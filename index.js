const express = require ("express");
const bodyParser = require("body-parser");
const nodemailer = require ("nodemailer");
const cors = require ("cors");


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


app.get("/", ()=>{
    resizeBy.send("welcome to my forma")
})

app.post("/api/forma", (req, res)=>{
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: "Gmail",
        port: 465,
        auth:{
            user:"martinstoyinp@gmail.com",
            pass:"Rhoda@17"
        }

    });



let mailOptions={
    from:data.email,
    to:"martinstoyinp@gamil.com",
    subject:`Message from ${data.firstname}`,
    html:`
    <h3>Informations</h3>
    <ul>
    <li>Firstname: ${data.firstname}</li>
    <li>Lastname: ${data.lastname}</li>
    <li>Email: ${data.email}</li>
    </ul>

    <h3>Message</h3>
    <p>${data.message}</p>

    `
};

smtpTransport.sendMail(mailOptions, (error, respose)=>{
    if(error){
        res.send(error)
    }
    else{
        res.send("Success")
    }
})

smtpTransport.close();
})


const PORT = process.env.PORT||3001;

app.listen(PORT, ()=>{
    console.log(`server starting at port ${PORT}`);
})