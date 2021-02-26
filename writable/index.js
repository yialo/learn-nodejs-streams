import fs from 'fs';
import http from 'http';

const initFileWriting = () => {
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
};

const initServerWorkflow = () => {
  const server = http.createServer();

  server.on('request', (req, res) => {
    res.write('Hello from server!');
    res.end(' 🦋');
  });

  server.listen(8080);
};

initServerWorkflow();
