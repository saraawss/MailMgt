const { ServerError } = require("../helpers/server");
const config = require("../config/default");
const mailgun = config.mailgunApi;

/**
 * basic email sending
 * @params {object} data containing to,from,subject,to,text,
 * @returns {Promise} Promise object represents the email
 */
function send(data) {


  return new Promise((resolve, reject) => {
    
	let fromMail = config.mailgunFrom;
	data.from = fromMail;
		
    mailgun.messages().send(data, function(error, body) {
      if (error) {
    	
    	return reject(error.toString());
      }
      else {
    	  
    	  return resolve(body);
      }
    });
  });
}


module.exports = { send };
