import { Button, mouse, left, right, up, down } from "@nut-tree/nut-js";

const drawSquare = async (size: number) => {
  await mouse.pressButton(Button.LEFT)
  await mouse.move(right(size))
  await mouse.releaseButton(Button.LEFT)
  await mouse.pressButton(Button.LEFT)
  await mouse.move(down(size))
  await mouse.releaseButton(Button.LEFT)
  await mouse.pressButton(Button.LEFT)
  await mouse.move(left(size))
  await mouse.releaseButton(Button.LEFT)
  await mouse.pressButton(Button.LEFT)
  await mouse.move(up(size))
  await mouse.releaseButton(Button.LEFT)
}

export default drawSquare