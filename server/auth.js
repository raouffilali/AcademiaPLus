
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')

const path = require('path')

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))
//
// Routes
app.use('/user',require('./routes/userRouter')) 
app.use('/api', require('./routes/upload'))
// Connect to mongodb
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
//
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
  app.get('*', (req, res)=>{
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}

//server port 
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})