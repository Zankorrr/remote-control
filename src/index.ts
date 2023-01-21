import { WebSocketServer } from 'ws';
import httpServer from "./http_server";
import drawSquare from './square';

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
    const command = data.toString().split(' ')[0]
    const size = +data.toString().split(' ')[1]
    switch (command) {
      case "draw_square":
        drawSquare(size)
        break;
      default:
        break;
    }
  });
});
