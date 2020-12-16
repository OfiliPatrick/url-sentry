const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const app = express();
require("dotenv").config();

//middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const URL_Sentry_Middleware = (req, res, next) => {
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date + " " + time;

  const transporter = nodemailer.createTransport(
    sendgridTransport({
      auth: {
        api_key: process.env.SENDGRID_API_KEY,
      },
    })
  );

  let emailBody = `
  <p> URL Sentry has detected access!</p>
  <h3 > Access Details</h3>
  <ul>
  <li> URL: suspect.com</li>
  <li> Access Type: Unsecure</li>
  <li> Date Accessed: ${dateTime}</li>
  </ul>
  <p> &copy; Patrick Ofili 2020</p>
    `;

  let mailOptions = {
    to: process.env.TO_EMAIL,
    from: process.env.FROM_EMAIL,
    subject: "SITE ACCESS DETECTED",
    html: emailBody,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return console.log(err);
    }
  });
  next();
};

app.use(URL_Sentry_Middleware);

app.get("/", (req, res) => {
  res.send("<h3>SORRY RESTRICTED URL</h3>");
});

const PORT = 80;

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
