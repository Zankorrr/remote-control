import { mouse, up } from "@nut-tree/nut-js";

const mouseUp = async (offset: number) => {
  await mouse.move(up(offset))
}

export default mouseUp