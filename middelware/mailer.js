const nodemailer = require("nodemailer");
var storage = require('local-storage')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const main = ()=> {

    const email = storage('email')
    const token = jwt.sign({email:email},process.env.SUCRET)

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth:{
            user:'khadijach896@gmail.com',
            pass:process.env.MAILER,
        },


    })

    let info ={
        from: '"Khadija ✨" <khadijach896@gmail.com>',
        to: email,
        subject: "Verification de compte  ✔",
        html:
            `<div style='height: 150px; width: 100%;'>
              <h4>Hi dear,</h4>
              <p>You are receiving this because you (or someone else) have requested the reset of the password for your account. <span style='font-weight: bold;'>MARHABA</span>,Please click on the following link, or paste this into your browser to complete the process:</p>
              <a href="http://localhost:3000/api/auth/Verification/${token}" style="height: 60px; background-color: #199319; color: white; padding: 15px 25px; text-decoration: none; border-radius: 8px; margin-bottom: 10px; margin-top: 10px;">Active</a> 
            </div>`,
      };

      transporter.sendMail(info);

      console.log("Message sent");
}

module.exports={main}