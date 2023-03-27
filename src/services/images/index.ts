import { ref, uploadBytes, getStorage, getDownloadURL } from "firebase/storage";
import { resizeImage, IMAGE_SIZES } from "../../helpers";
import { firebaseApp } from "../../config";

export const getImageResize = async (file: any) => {
  try {
    const firebaseStorage = getStorage(firebaseApp);

    let parts = file.split(";");
    let mimType = parts[0].split(":")[1];
    let imageData = parts[1].split(",")[1];
    const fileName = `thumbnailGenerator-${Date.now()}`;
    const imgBuffer = Buffer.from(imageData, "base64");

    const resizedImages = await Promise.all(
      IMAGE_SIZES.map(async (size) => {
        const newName = `${fileName}-${size.width}x${size.height}.jpeg`;
        return {
          name: newName,
          width: size.width,
          height: size.height,
          image: await resizeImage(imgBuffer, size.width, size.height),
        };
      })
    );

    const urls = await Promise.all(
      resizedImages.map(async (item, index) => {
        const imageRef = ref(firebaseStorage, item.name);
        const metatype = { contentType: mimType, name: item.name };
        await uploadBytes(imageRef, item.image, metatype);
        return { ...item, id: index + 1, url: await getDownloadURL(imageRef) };
      })
    );
    return urls;
  } catch (error) {
    throw error;
  }
};
