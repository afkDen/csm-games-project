import process from 'node:process';

const [provider, ...rest] = process.argv.slice(2);
const limitRaw = rest.at(-1);
const maybeLimit = Number(limitRaw);
const limit = Number.isFinite(maybeLimit) ? Math.max(1, Math.min(20, maybeLimit)) : 8;
const queryParts = Number.isFinite(maybeLimit) ? rest.slice(0, -1) : rest;
const query = queryParts.join(' ').trim();

if (!provider || !query) {
  console.error('Usage: node --env-file=.env.local scripts/asset-search.mjs <polyhaven|pexels-photo|pexels-video> <query> [limit]');
  process.exit(1);
}

const out = (obj) => console.log(JSON.stringify(obj, null, 2));

async function polyhaven() {
  const url = new URL('https://api.polyhaven.com/search');
  url.searchParams.set('q', query.toLowerCase());
  url.searchParams.set('limit', String(limit));
  const res = await fetch(url, { headers: { 'User-Agent': 'chainsaw-lens-asset-scout/1.0' } });
  if (!res.ok) throw new Error(`Poly Haven search failed: ${res.status}`);
  const data = await res.json();
  const ranked = data.results ?? [];
  const entries = await Promise.all(ranked.map(async (row) => {
    const id = row.slug;
    let meta = null;
    try {
      const info = await fetch(`https://api.polyhaven.com/info/${encodeURIComponent(id)}`, { headers: { 'User-Agent': 'chainsaw-lens-asset-scout/1.0' } });
      if (info.ok) meta = await info.json();
    } catch {
      // Search metadata is still useful if an individual info request fails.
    }
    return {
      id,
      score: row.score ?? null,
      name: meta?.name ?? id,
      type: meta?.type ?? null,
      category: meta?.category ?? null,
      tags: meta?.tags ?? [],
      source: `https://polyhaven.com/a/${id}`,
      license: 'CC0 asset; live API access has separate terms including attribution and commercial-use restrictions unless licensed. Verify before production use.'
    };
  }));
  out({ provider: 'polyhaven', query, total: data.total ?? entries.length, results: entries });
}

async function pexels(kind) {
  const key = process.env.PEXELS_API_KEY;
  if (!key) throw new Error('PEXELS_API_KEY is missing. Put it in .env.local; never commit or print it.');
  const path = kind === 'video' ? '/v1/videos/search' : '/v1/search';
  const url = new URL(`https://api.pexels.com${path}`);
  url.searchParams.set('query', query);
  url.searchParams.set('per_page', String(limit));
  const res = await fetch(url, { headers: { Authorization: key } });
  if (!res.ok) throw new Error(`Pexels request failed: ${res.status}`);
  const data = await res.json();
  const rows = kind === 'video' ? data.videos : data.photos;
  const results = (rows ?? []).map((item) => ({
    id: item.id,
    author: item.user?.name ?? item.photographer ?? null,
    page: item.url,
    width: item.width,
    height: item.height,
    duration: item.duration ?? null,
    note: 'Review Pexels license/API credit guidance before production use.'
  }));
  out({ provider: `pexels-${kind}`, query, results });
}

try {
  if (provider === 'polyhaven') await polyhaven();
  else if (provider === 'pexels-photo') await pexels('photo');
  else if (provider === 'pexels-video') await pexels('video');
  else throw new Error(`Unknown provider: ${provider}`);
} catch (err) {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
}
