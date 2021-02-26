import fs from 'fs';

const stream = fs.createReadStream('./readable/video.mp4');

stream.on('data', (chunk) => {
  console.log(chunk);
});
stream.on('end', () => {
  console.log('End');
});
