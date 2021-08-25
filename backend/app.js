if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const contactSchema = require('./models/ContactSchema');
const mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');



mongoose.connect(process.env.MONGODBURL,{ useUnifiedTopology: true })
const db = mongoose.connection;
db.on('open', () => console.log('connected to mongoDB'));
db.on('error', (err) => console.log('failed to connect' + err));

app.use(express.static('public'))

app.use(cors({
    origin:"*"
}));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

let route = process.env.PORT || 3001;
app.listen(route,() => {
    console.log("listening on port" + route);
});


app.get('/',(req, res) =>{
    res.json({"Server working":true})
});

app.post('/',(req, res) => {
    let userMessage = {name:req.body.name, email:req.body.email, message:req.body.message};
    let message = new contactSchema(userMessage);
    message.save()
        .then(() => {
            console.log('message saved to database')
            res.json({"message":"message successfully saved to database"});
        })
        .catch((err) => {
            console.log(err);
        })
    // let userMessage = new ContactSchema({name:req.body.name, email:req.body.email, message:req.body.message});
});


