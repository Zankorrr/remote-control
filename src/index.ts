import { WebSocketServer } from 'ws';
import drawCircle from './circle';
import httpServer from "./http_server";
import mouseDown from './mouseDown';
import mouseLeft from './mouseLeft';
import mouseRight from './mouseRight';
import mouseUp from './mouseUp';
import mousePosition from './mousePosition';
import drawRectangle from './rectangle';
import drawSquare from './square';
import printScreen from './printScreen';

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', async function message(data) {
    console.log('received: %s', data);
    const command = data.toString().split(' ')[0]
    const size = +data.toString().split(' ')[1]
    const length = +data.toString().split(' ')[2]
    switch (command) {
      case "mouse_up":
        ws.send(`${command} ${size}`)
        mouseUp(size)
        break
      case "mouse_right":
        ws.send(`${command} ${size}`)
        mouseRight(size)
        break
      case "mouse_down":
        ws.send(`${command} ${size}`)
        mouseDown(size)
        break
      case "mouse_left":
        ws.send(`${command} ${size}`)
        mouseLeft(size)
        break
      case "mouse_position":
        const x = (await mousePosition()).x
        const y = (await mousePosition()).y
        ws.send(`mouse_position {${x} px},{${y} px}`)
        break;
      case "draw_square":
        ws.send(`${command} ${size}`)
        drawSquare(size)
        break;
      case "draw_rectangle":
        ws.send(`${command} ${size} ${length}`)
        drawRectangle(size, length)
        break
      case "draw_circle":
        ws.send(`${command} ${size}`)
        drawCircle(size)
        break
      case "prnt_scrn":
        const image = await printScreen()
        ws.send(`prnt_scrn ${image}`)
        break
      default:
        break;
    }
  });
});
