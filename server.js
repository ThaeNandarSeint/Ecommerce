require("dotenv").config({path: './config.env'});
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')
const cors = require('cors')

// server deployment
const path = require('path')
const logger = require('morgan')

// routes
const productRoutes = require("./routes/productRoutes");
const infoRoutes = require("./routes/infoRoutes");
const userRoutes = require("./routes/userRoutes");

// database connect
const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI).then(()=>console.log("DB connected")).catch((err)=>console.log(err))

const app = express();

// server deployment
app.use(logger('dev'))
// send data btw frontend & backend
app.use(cors())
// allow to pass json data from backend to frontend
app.use(express.json());

app.use(cookieParser());

// api
app.use("/api/products", productRoutes);
app.use("/api/infos", infoRoutes)
app.use("/api", userRoutes)

// Server production assets
if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, '/client/build')))
  app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}else{
  app.get('/', (req, res)=>{
    res.send('Development Api is running')
  })
}

// for dashboard login
app.get('/dashboard', (req, res)=>{
  res.json({
    email: "wang@gmail.com",
    password: "wang1234"
  })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));