import http from 'http';
import fs from 'fs';

const server = http.createServer();

server.on('request', (req, res) => {
  const stream = fs.createReadStream('./video.mp4');
  stream.pipe(res);
});

server.listen(8080);
