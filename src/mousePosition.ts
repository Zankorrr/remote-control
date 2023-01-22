import { mouse } from "@nut-tree/nut-js";

const mousePosition = async () => {
  console.log(await mouse.getPosition())
}

export default mousePosition