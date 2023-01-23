import { Button, mouse, Point } from "@nut-tree/nut-js";

const drawCircle = async (size: number) => {

  let points = []
  let startX = (await mouse.getPosition()).x
  let startY = (await mouse.getPosition()).y

  for(let i = 0; i < 360; i++) {
    let rad = i / 180 * 3.14
    let x = Math.round(size * Math.cos(rad)) + startX
    let y = Math.round(size * Math.sin(rad)) + startY
    let point = new Point(x, y)
    if(i === 0) {
      await mouse.setPosition(point)
    } else {
      points.push(point)
    }
  }
  await mouse.pressButton(Button.LEFT)
  await mouse.move(points)
  await mouse.releaseButton(Button.LEFT)
}

export default drawCircle