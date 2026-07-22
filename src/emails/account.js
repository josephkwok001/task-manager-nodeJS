const { Resend } = require("resend")
require("dotenv").config()
const resend = new Resend(process.env.resendAPIkey)


const sendWelcomeEmail = (email, name) => {
    resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Thanks for joining in!",
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    }).catch((error) => {
        console.log("Email error:", error)
    })
}

const sendCancelationEmail = (email, name) => {
    resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Sorry to see you go!",
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail, 
    sendCancelationEmail
}
