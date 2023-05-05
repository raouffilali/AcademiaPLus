require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5174;
const DB_URI =
  process.env.DB_URI ||
  "mongodb+srv://sanaaard:BEd9srIN57WmnNOs@cluster0.xusdwl7.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const teacherSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  education: String,
  experience: String,
  message: String,
  cv: {
    data: Buffer,
    contentType: String,
  },
});

const Teacher = mongoose.model("Teacher", teacherSchema);

app.post("/api/teachers", upload.single("cv"), async (req, res) => {
  const { name, email, phone, education, experience, message, cv } = req.body;

  const teacher = new Teacher({
    name,
    email,
    phone,
    education,
    experience,
    message,
    cv,
  });
  if (req.file && req.file.buffer) {
    teacher.cv.data = req.file.buffer;
    teacher.cv.contentType = req.file.mimetype;
  }

  try {
    await teacher.save();
    res.send("Teacher saved");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving teacher");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
