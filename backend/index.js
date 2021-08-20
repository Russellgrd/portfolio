if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const contactSchema = require('./models/ContactSchema');
const mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
const ContactSchema = require('./models/ContactSchema');


mongoose.connect(process.env.MONGODBURL,{ useUnifiedTopology: true })
const db = mongoose.connection;
db.on('open', () => console.log('connected to mongoDB'));
db.on('error', (err) => console.log('failed to connect' + err));

app.use(express.static('public'))
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

let route = process.env.route || 3001;
app.listen(route,() => {
    console.log("listening on port" + route);
});


app.post('/',(req, res) => {
    let userMessage = {name:req.body.name, email:req.body.email, message:req.body.message};
    let message = new contactSchema(userMessage);
    message.save()
        .then(() => {
            console.log('message saved to database')
            res.json({"message":"message successfully saved to database"});
        });
    // let userMessage = new ContactSchema({name:req.body.name, email:req.body.email, message:req.body.message});
});


