import fs from 'fs';

const stream = fs.createReadStream('./readable/text.txt', { encoding: 'utf8' });

// NOTE: alternative variant
// const stream = fs.createReadStream('./readable/text.txt');
// stream.setEncoding('utf8');

stream.on('data', (chunk) => {
  console.log(chunk);
});
stream.on('end', () => {
  console.log('End');
});
stream.on('error', (error) => {
  console.log(error.message);
});
