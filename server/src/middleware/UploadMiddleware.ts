// upload middleware for multer and typescript

import multer from "multer";
import { Request } from "express";
import { v4 as uuidv4 } from "uuid";
import { GridFsStorage } from "multer-gridfs-storage";
import { GridFSBucket } from "mongodb";

const storage = new GridFsStorage({
  //  implement all features in GridFsStorage

  // 1. url: url to connect to mongodb
  url: process.env.MONGO_CONNECTION_STRING as string,

  // 2. file: callback function to get file info
  file: (req: Request, file: Express.Multer.File) => {
    return new Promise((resolve, reject) => {
      // 2.1 connect to mongodb using mongoose or create connection manually using mongodb driver methods (recommended)
      const db = req.app.locals.db;
      const bucket = new GridFSBucket(db, {
        bucketName: "uploads",
      });

      // 2.2 create upload stream using bucket
      const uploadStream = bucket.openUploadStream(file.originalname);

      // 2.3 upload file to mongodb
      file.stream
        .pipe(uploadStream)
        .on("error", (error: Error) => {
          reject(error);
        })
        .on("finish", () => {
          resolve(uploadStream.id);
        });

      // 3. get file info
      const fileInfo = {
        filename: uuidv4() + file.originalname,
        bucketName: "uploads",
      };
      resolve(fileInfo);
    });
  },
});

const upload = multer({ storage });

export default upload;
