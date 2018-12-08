const { ServerError } = require("../helpers/server");
const sendGridService = require("../services/sendGridService");
const mailgunService = require("../services/mailgunService");


async function sendMail(data) {
	
	let isError = false;
	let serverError = new ServerError("");
	
	
	await mailgunService.send(data).then(function() {
		isError = false;
		serverError = new ServerError("ok");
	})
	.catch(function(rej) {
		isError = true;
		serverError = new ServerError(rej);
	    
	 });
	
	
	if(isError){
		
		await sendGridService.sendSendGrid(data).then(function() {
			serverError = new ServerError("ok");
			
		})
		.catch(function(rej) {
			serverError = new ServerError(rej);
			
		    
		 });
		

	}
	
	return serverError;

}

module.exports = { sendMail };