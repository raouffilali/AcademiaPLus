import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/uploads/pictures"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const uploadPicture = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5MB
  },
  onFileUploadStart: (file) => {
    console.log(file.originalname + " is starting ...");
  },
  onFileUploadComplete: (file) => {
    console.log(file.fieldname + " uploaded to " + file.path);
  },

  fileFilter: (req, file, cb) => {
    // ? method1
    const fileTypes = /jpeg|jpg|png/;
    const extName = fileTypes.test(
      file.originalname.split(".")[file.originalname.split(".").length - 1]
    );
    const mimeType = fileTypes.test(file.mimetype);
    if (extName && mimeType) {
      cb(null, true);
    } else {
      cb(new Error("Only support .jpg, .jpeg, .png"));
    }

    // --------------------------------------------------------------------
    // ? method2
    /* const ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      return cb(new Error("Only support .jpg, .jpeg, .png"));
    }
    cb(null, true);*/
    // --------------------------------------------------------------------
  },
  onError: (err, next) => {
    console.log("error", err);
    next(err);
  },
});

export default uploadPicture;
