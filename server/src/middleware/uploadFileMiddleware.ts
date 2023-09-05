import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/uploads/files"));
  },
  filename: (req, file, cb) => {
    // Rename uploaded files
    const uniqueSuffix = `${Date.now()}_${Math.round(Math.random() * 1e9)}`;
    const fileExtension = path.extname(file.originalname);
    cb(null, `${uniqueSuffix}${fileExtension}`);
  },
});

const uploadFile = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10, // 10MB (adjust as needed)
    maxFiles: 1,
  },
  fileFilter: (req, file, cb) => {
    // Define the allowed file types here
    const fileTypes = /pdf|doc|docx|txt|xls|xlsx|csv|zip/; // Add more file extensions as needed
    const extName = fileTypes.test(
      file.originalname.split(".")[file.originalname.split(".").length - 1]
    );
    const mimeType = fileTypes.test(file.mimetype);
    if (extName && mimeType) {
      cb(null, true);
    } else {
      cb(
        new Error(
          "Only support .pdf, .doc, .docx, .txt, .xls, .xlsx, .csv, .zip"
        )
      );
    }
  },
});

export default uploadFile;
