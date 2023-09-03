import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/uploads/videos"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const uploadVideo = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 100, // 100MB (adjust as needed)
  },
  fileFilter: (req, file, cb) => {
    const fileTypes = /mp4|avi|mov/; // Add more video extensions as needed
    const extName = fileTypes.test(
      file.originalname.split(".")[file.originalname.split(".").length - 1]
    );
    const mimeType = fileTypes.test(file.mimetype);
    if (extName && mimeType) {
      cb(null, true);
    } else {
      cb(new Error("Only support .mp4, .avi, .mov"));
    }
  },
});

export default uploadVideo;
