


const sendEmail = async (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    const mail = {
        from: name,
        to: "hbmt.test@gmail.com",
        subject: subject,
        html:  `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Message: ${message}</p>`
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({status: "error"});
        } else {
            res.json({status: "message sent"});
        }
    });

};

module.exports = { sendEmail };