import Jimp from "jimp";
import { mouse, Region, screen } from "@nut-tree/nut-js";

const printScreen = async () => {
  const point = await mouse.getPosition();

  const grab = await screen.grabRegion(new Region(point.x, point.y, 200, 200));
  const jimp = new Jimp(grab.width, grab.height);
  jimp.bitmap.data = (await grab.toRGB()).data;

  const b64 = await jimp.getBase64Async(Jimp.MIME_PNG);
  const screenshot = b64.slice(22)

  return screenshot
};

export default printScreen