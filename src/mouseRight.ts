import { mouse, right } from "@nut-tree/nut-js";

const mouseRight = async (offset: number) => {
  await mouse.move(right(offset))
}

export default mouseRight