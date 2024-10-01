const express = require("express");
const nodemailer= require("nodemailer");
const app = express();



app.get("/home", (req, res) => {
  console.log("home routeeee");
  
  res.send("get request is working");
});




app.get("/sendmail", (req, res) => {
  console.log("sending mail");
  
  const transport= nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:465,
    secure:true,
    auth:{
      user:"amananurag.20@gmail.com",
      pass:"rwmi ejic bkzc uhpu",

    }
  });

  const mailOptions={
    from: 'amananurag.20@gmail.com', // Sender address
    to: 'amaxanurag.20@gmail.com',                  // List of receivers
    subject: 'reset password',                             // Subject line
    text: 'Hello world! your otp is 4533',                         // Plain text body
    // html: '<b>Hello world!</b>'                   // HTML body
  }
  

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.send("email sendingggggggggg");
});




app.listen(5000, () => {
  console.log("server is listeninig on port no 5000");
});
