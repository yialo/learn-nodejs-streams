import http from 'http';
import fs from 'fs';

const server = http.createServer();

server.on('request', (req, res) => {
  fs.readFile('./video.mp4', (err, content) => {
    res.end(content);
  });
});

server.listen(8080);
