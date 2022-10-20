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
            pass:'tamttkfjlivspxcm'
        },


    })

    let info ={
        from: '"Khadija 👻" <khadijach896@gmail.com>',
        to: email,
        subject: "Verification de compte  ✔",
        html:
            `<div style='height: 150px; width: 100%;'>
              <h3>Hy dear,</h3>
              <p>welcome to <span style='font-weight: bold;'>MARHABA</span>, click button for active your account.</p>
              <a href="http://localhost:3000/api/auth/test/${token}" style="height: 60px; background-color: #199319; color: white; padding: 15px 25px; text-decoration: none; border-radius: 8px; margin-bottom: 10px; margin-top: 10px;">Active</a> 
            </div>`,
      };

      transporter.sendMail(info);

      console.log("Message sent");
}

module.exports={main}