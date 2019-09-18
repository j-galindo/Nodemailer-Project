const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
// const templateExample = require('../templates/template')

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');
});


// let transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//         user: 'your email address',
//         pass: 'your email password'
//     }
// });

router.post('/send-email', (req, res, next) => {
    let { email, subject, message } = req.body;
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'jgalindo.ironhack@gmail.com',
            pass: 'Ms134life'
        }
    });
    transporter.sendMail({
            from: '"My Awesome Project 👻" <jgalindo.ironhack@gmail.com>',
            to: email,
            subject: subject,
            text: message,
            html: `<b>${message}</b>`,
        })
        .then(info => res.render('message', { email, subject, message, info }))
        .catch(error => console.log(error));
});


module.exports = router;