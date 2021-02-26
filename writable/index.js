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
    const stream = fs.createReadStream('./video/sample.mp4', { encoding: 'utf8' });

    stream.on('data', (chunk) => {
      const needPause = !res.write(chunk);

      if (needPause) {
        stream.pause();
        res.once('drain', () => {
          stream.resume();
        });
      }

    });

    stream.on('end', () => {
      res.end('\n[End of file]');
    });

    stream.on('error', (error) => {
      console.log(error.message);
    });
  });

  server.listen(8080);
};

initServerWorkflow();
