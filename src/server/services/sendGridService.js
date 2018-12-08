const { ServerError } = require("../helpers/server");
const config = require("../config/default");
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(config.sendGridApiKey);

/**
 * basic email sending
 * @params {object} data containing to,from,subject,to,text,
 * @returns {Promise} Promise object represents the email
 */
function sendSendGrid(data) {


  return new Promise((resolve, reject) => {
	  
	  let fromMail = config.sendGridFrom;
	  
	  data.from = fromMail;
	  
	  sgMail.send(data, function(error, body) {
      if (error) {
    	
        return reject(error.toString());
      }
      else {
    	  
    	  resolve(body);
      }
    });
  });
}


module.exports = { sendSendGrid };
