
module.exports = {
		mailgunFrom: "sara@<mailgun domain>",
		mailgunApi: require("mailgun-js")({
		        apiKey: "<mailgun api key>",
		        domain: "<mailgun domain>"
		      }),
	   sendGridFrom: "saraawss@gmail.com",
	   sendGridApiKey: "<sendgrid api key>"
		  
}