import { mouse } from "@nut-tree/nut-js";

const mousePosition = async () => {
  const point = await mouse.getPosition()
  return point
}

export default mousePosition