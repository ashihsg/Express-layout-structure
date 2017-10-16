var mailer = require ("../lib/Mailer")(require("../models")());
mailer.send({
    to: ["ali.aruz@outlook.com", "arpc2004@gmail.com"],
    subject: "test with The Health Co",
    body: "This is a test email."
}).catch(err => {
    console.log(err);
});
