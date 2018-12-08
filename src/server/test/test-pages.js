var expect  = require('chai').expect;
var request = require('request');
const assert = require("assert");
const config = require("../config/default");
const mailgunService = require("../services/mailgunService");
const sendGridService = require("../services/sendGridService");
const mailMgtService = require("../controllers/mailMgtService");
const { ServerError } = require("../helpers/server");


describe("Sending Emails", function() {
	it("Mailgun Testing", async () => {
		
		let data = {
				  from: "",
				  to: "saraawss@gmail.com",
				  subject: "Test1",
				  text: "Test2"
		};
		 
		let result = await mailgunService.send(data);
		assert.ok(result.id);
		
	});
	
	it("SendGrid Testing", async () => {
			
					    
			let data = {
					  from: "",
					  to: "saraawss2@outlook.com",
					  bcc: "saraawss@gmail.com",
					  cc: "",
					  subject: "TestSendGrid",
					  text: "TestSendGrid2"
			};
			 
			let result = await sendGridService.sendSendGrid(data);
			assert.equal(result[0].statusCode, 202);
			
		});
	
	it("MailMgt Testing", async () => {
		
	    
		let data = {
				  from: "",
				  to: "saraawss2@outlook.com",
				  bcc: "saraawss@gmail.com",
				  cc: "",
				  subject: "TestSendGrid",
				  text: "TestSendGrid2"
		};
		

		let result = new ServerError(""); 
		result = await mailMgtService.sendMail(data);
		
		assert.equal(result.message, "ok");
		
	});
	

});