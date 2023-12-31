const express =  require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./config/mongoose.js')
const router = require('./routes/index.js');
// const cookieParser = require('cookie-parser');
const path = require('path');

const Port = process.env.PORT;
const app = express();

// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());

app.use('/uploads',express.static(path.join(__dirname,'/uploads')))

app.use('/', router);


app.listen( Port || 3100, function(){
    console.log("Server is running on the Port: ", Port)
})

