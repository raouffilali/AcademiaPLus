import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/uploads/multiple_files"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const uploadFiles = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10, // 10MB (adjust as needed)
    maxFiles: 10,
  },
  fileFilter: (req, file, cb) => {
    // Define the allowed file types here, for example:
    const fileTypes = /pdf|doc|docx|txt|jpeg|jpg|png/; // Add more file extensions as needed
    const extName = fileTypes.test(
      file.originalname.split(".")[file.originalname.split(".").length - 1]
    );
    const mimeType = fileTypes.test(file.mimetype);
    if (extName && mimeType) {
      cb(null, true);
    } else {
      cb(new Error("Only support .pdf, .doc, .docx, .txt, .jpeg, .jpg, .png"));
    }
  },
});

export default uploadFiles;
