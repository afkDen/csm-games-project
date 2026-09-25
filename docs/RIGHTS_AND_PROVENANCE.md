# Rights and Provenance Notes

This document is a project-control checklist, not legal advice.

## Unofficial status

The final site should clearly state that it is an **unofficial portfolio concept / interaction study** and is not affiliated with or endorsed by JINS, MAPPA, Shueisha, or the Chainsaw Man rights holders.

## Owner-supplied anime/campaign imagery

The project owner plans to supply still images from the campaign/anime. Treat those files as copyrighted source material with rights that may differ from open stock assets.

On 2026-09-25, after being told that the authoritative GitHub repository is public, the owner explicitly confirmed **“I have publication rights”** for the supplied anime stills and chibi images. This records the owner's permission assertion for publishing intentional derivatives in this repository; it does not establish creator identity, source URL, license terms, or rights for unrelated assets. Keep raw masters in `assets/source/` and record each derivative's lineage in the asset manifest.

Before public release:

- confirm which source images are actually being shipped;
- keep a provenance note for where each came from;
- avoid implying ownership of the underlying character/artwork;
- use only what the owner is comfortable publishing in a public portfolio;
- consider replacing particularly sensitive source material with original reinterpretations if needed;
- do not assume cropping, cutouts, depth maps, compositing, filters, animation, or other transformations remove the underlying copyright/provenance obligations.

## Chibis

For each chibi asset, record whether it is:

- owner-supplied official art;
- owner-supplied fan art with permission;
- generated under an approved image workflow;
- original project art;
- procedurally reconstructed/stylized 3D.

Do not silently mix these categories.

## External open assets

Record source URL, license/terms, author when applicable, acquisition date, and any required credit in `ASSET_MANIFEST.json` / `AUDIO_MANIFEST.json`.
