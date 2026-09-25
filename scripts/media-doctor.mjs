import { spawnSync } from 'node:child_process';

function inspect(name) {
  const result = spawnSync(name, ['-version'], { encoding: 'utf8' });
  if (result.error || result.status !== 0) {
    console.log(`${name}: not available (optional development-time capability)`);
    return false;
  }
  const first = (result.stdout || result.stderr || '').split(/\r?\n/).find(Boolean) || `${name}: available`;
  console.log(first);
  return true;
}

const ffmpeg = inspect('ffmpeg');
const ffprobe = inspect('ffprobe');

if (ffmpeg && ffprobe) {
  console.log('Media pipeline: READY when a milestone has a concrete media transformation need.');
} else {
  console.log('Media pipeline: OPTIONAL/BLOCKED until an approved equivalent is available; bootstrap remains valid.');
}
