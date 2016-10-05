var express = require("express"),
app = express();
var nodemailer = require("nodemailer");
var cors = require('cors');
var bodyParser = require('body-parser');
var routers = require('./app/router/router');
var modules = require('./app/module/signup');
var Sequelize = require('sequelize'),
   dbConfig = require('./app/config/config');
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.json());
var router = express.Router();
app.use(express.static(__dirname + '/'));
app.use('/', router);
var databaseBS = new Sequelize(dbConfig.ConnectionString, dbConfig.settings);
routers(databaseBS, Sequelize).apiRouters(router);
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "vigneswaran231995@gmail.com",
        pass: "vigneswaran6121994"
    }
});
app.get('/',function(req,res){
    res.sendfile('joinus.html');
});
app.get('/send',function(req,res){
    var mailOptions={
        to : req.query.to,
        subject : req.query.subject,
        text : req.query.text
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
});
});
app.listen(3406, function () {
   // Console will print the message
   console.log('Example app listening on port 3406!');
});

