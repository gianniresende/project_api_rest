const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const { host, port, user, pass} = require('../config/mailer.json');

const transport = nodemailer.createTransport({
  host,
  port,
  auth: { user, pass },
});

//transport.use('compile', hbs({

  //viewEngine: {
    //extName: '.hbs',
    //partialsDir: './src/resources/mailer/',
    //layoutsDir: './src/resources/mailer/',
    //defaultLayout: 'forgot_password.html',
  //},
  //viewPath: './src/resources/mailer/',
 // extName: '.html',

 // viewEngine: 'handlebars',
 // viewPath: path.resolve('./src/resources/mailer/'),
  //exName: '.html',
//}));

const handlebarOptions = {
  viewEngine: {
    extName: '.html',
    partialsDir: './src/resources/mailer/auth',
    layoutsDir: './src/resources/mailer/auth',
    defaultLayout: 'forgot_password.html',
  },
  viewPath: path.resolve('./src/resources/mailer/'),
  extName: '.html',
};

transport.use('compile', hbs(handlebarOptions));


module.exports = transport;