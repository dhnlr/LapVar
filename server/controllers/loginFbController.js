const jwt=require("jsonwebtoken");
const jwtSecret=process.env.JWT_SECRET;
const ObjectId=require('mongodb').ObjectID;
const User=require("../models/userModel");
const mongoose = require('mongoose')

const {Facebook, FacebookApiException} = require('fb'),
    fb = new Facebook({version: 'v2.11'});

// const sendEmail=(username,useremail)=>{
//     const transporter=nodemailer.createTransport({
//         host:"smtp.gmail.com",
//         port:587,
//         secure:false,
//         requireTLS:true,
//         auth:{
//             user:"theliberty.noreply@gmail.com",
//             pass:"phase_1@hacktiv8.com"
//         }
//     });
//     const mailContent={
//         from:"noreply_indonesia@gmail.com",
//         to:useremail,
//         subject:"Terimakasih!",
//         text:`Terimakasih ${username} telah mendaftar sebagai beta user dengan email ${useremail}`
//     };
//     transporter.sendMail(mailContent,(err)=>{
//         if(err){
//             console.log("Email gagal terkirim!");
//         }
//     });
// }

module.exports = {
  loginFb(req,res){
    User.find().then((result)=>{
      res.json({
        message : "test",
        data : result
      })
    })
  },
  login:(req,res)=>{
    // console.log(req.body);
    req.header.tokenFb = req.body.authResponse.accessToken
    fb.setAccessToken(req.body.authResponse.accessToken);
    fb.api(req.body.authResponse.userID,{fields:["id","name","email","picture"]},(response)=>{
      if(!response || response.error){
        res.send({status:false});
      } else {
        User.count({email:response.email}).then((result)=>{
          console.log(result);
          if(result === 0){
            const user = new User({
                fb_id:response.id,
                email:response.email,
                name:response.name,
                profile:response.picture.data.url
            })
            .save((err,stats)=>{
              const loginToken = jwt.sign({id:stats._id},jwtSecret);
              res.send({status:true,token:loginToken});
            });
            // sendEmail(response.name,response.email);
          }
          else {
            console.log(result);
            User.findOne({email:response.email},(err,data)=>{
                const loginToken = jwt.sign({id:data._id},jwtSecret);
                res.send({status:true,token:loginToken});
            });
          }
          }).catch((err)=>{
              res.send({status:false});
            });
        }
    });
  },
  // getUser:(req,res)=>{
  //   const userId = jwt.verify(req.body.token,jwtSecret);
  //   User.findOne({"_id":ObjectId(userId.id)},(err,data)=>{
  //       if(err || data === null){
  //           res.send({status:false});
  //       } else{
  //           res.send({status:true,user:data});
  //       }
  //   });
  // }
};
