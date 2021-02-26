import fs from 'fs';

const stream = fs.createReadStream('./readable/video1.mp4');

stream.on('data', (chunk) => {
  console.log(chunk);
});
stream.on('end', () => {
  console.log('End');
});
stream.on('error', (error) => {
  console.log(error.message);
});
