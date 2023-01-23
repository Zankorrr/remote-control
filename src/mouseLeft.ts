import { mouse, left } from "@nut-tree/nut-js";

const mouseLeft = async (offset: number) => {
  await mouse.move(left(offset))
}

export default mouseLeft