import { mouse, down } from "@nut-tree/nut-js";

const mouseDown = async (offset: number) => {
  await mouse.move(down(offset))
}

export default mouseDown