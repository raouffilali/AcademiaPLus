import fs from "fs";
import path from "path";

const filesRemover = (filenames:[], folder) => {
  filenames.forEach((filename) => {
    const filePath = path.join(__dirname, `../public/uploads/${folder}/${filename}`);
    fs.unlink(filePath, (err) => {
      if (err && err.code === "ENOENT") {
        // FILE DOESN'T EXIST
        console.info(`File ${filename} doesn't exist, won't remove it.`);
      } else if (err) {
        // OTHER ERROR
        console.error(`Error occurred while trying to remove file ${filename}`);
      } else {
        console.info(`Removed file ${filename}`);
      }
    });
  });
};

export default filesRemover;
