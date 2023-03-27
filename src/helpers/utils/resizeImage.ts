const sharp = require("sharp");

const resizeImage = (imagePath: any, width: number, height: number) => {
  try {
    const resize = sharp(imagePath)
      .resize(width, height, { fit: "outside" })
      .toBuffer();
    return resize;
  } catch (error) {
    throw error;
  }
};

export default resizeImage;
