import fs from 'fs';

const stream = fs.createWriteStream('./writable/hello.txt');

stream.on('error', (error) => {
  console.log(error.message);
});
stream.on('open', () => {
  console.log('[Open]');
});
stream.on('finish', () => {
  console.log('[Finish]');
});

stream.write('Hello');
stream.write(' world!');

stream.end(' 🦆');
