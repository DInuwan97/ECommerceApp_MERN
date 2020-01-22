const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const usersRoute = require('./routes/Users');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;


const app = express();
app.use(express.json());


app.use(bodyParser.json());

/////////////////////////////Configure Body Parser//////////////////////
app.use(
    bodyParser.urlencoded({
        extended:false
    })
)
app.use('/user',usersRoute);
/////////////////////////////Configure Body Parser//////////////////////



///////////////////////////Usage of CORS///////////////////////////
app.use(cors());
var corsOption = {
    origin: '*',
    optionSuccessStatus:200
}
app.use(cors(corsOption));
///////////////////////////Usage of CORS///////////////////////////




const mongoURI = 'mongodb://localhost:27017/WalkerEcom'; 
mongoose
    .connect(mongoURI,{useNewUrlParser : true, useUnifiedTopology :  true})
    .then(()=>console.log('MongoDB Connected to WalkerEcom'))
    .catch(err => console.log(err));

    
app.listen(PORT,()=>{
    console.log("Server is listening on port " +PORT);
})

