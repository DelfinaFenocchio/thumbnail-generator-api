import express from "express";
import multer from "multer";
import { getImageResize } from "../../services";

const router = express.Router();

const memoStorage = multer.memoryStorage();
const upload = multer({ storage: memoStorage });

router.post("/", upload.single("file"), async (req, res, next) => {
  try {
    const { file } = req.body;
    const urls = await getImageResize(file);
    res.json({
      urls,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;
