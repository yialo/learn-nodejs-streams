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
    const stream = fs.createReadStream('./video/sample.mp4');

    stream.pipe(res);

    stream.on('error', (error) => {
      console.log(error.message);

      if (error.code === 'ENOENT') {
        res.statusCode = 404;
        res.end('File not found');
      } else {
        res.statusCode = 500;
        res.end('Something went wrong');
      }
    });

    stream.on('open', () => {
      console.log('[Open]');
    });

    stream.on('close', () => {
      console.log('[Close]');
    });

    req.on('aborted', () => {
      stream.destroy();
    });
  });

  server.listen(8080);
};

initServerWorkflow();
