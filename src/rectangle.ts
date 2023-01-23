import { Button, mouse, left, right, up, down } from "@nut-tree/nut-js";

const drawRectangle = async (size: number, length: number) => {
  await mouse.pressButton(Button.LEFT)
  await mouse.move(right(size))
  await mouse.releaseButton(Button.LEFT)
  await mouse.pressButton(Button.LEFT)
  await mouse.move(down(length))
  await mouse.releaseButton(Button.LEFT)
  await mouse.pressButton(Button.LEFT)
  await mouse.move(left(size))
  await mouse.releaseButton(Button.LEFT)
  await mouse.pressButton(Button.LEFT)
  await mouse.move(up(length))
  await mouse.releaseButton(Button.LEFT)
}

export default drawRectangle