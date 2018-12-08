# Mail Service

This is an abstraction between two different email service providers. If one of the services goes down, your service can quickly failover to a different provider without affecting your customers.

This is developed by NodeJs, ExpressJs and ReactJs

Need to add your mailgun api key, domain and sendgrid api key in src/server/config/default.js

#### To Run

```bash

# Install dependencies
npm install

# Start server
npm start

# To Test
npm test
```
#### APP url
http://localhost:8080

#### API url

###### POST

/api/sendmail

body parameter

{
	to: '',
	bcc: '',
	cc: '',
	subject: '',
	text: ''
}