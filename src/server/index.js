const express = require('express');
const bodyParser = require('body-parser');
const os = require('os');
const mailMgtService = require('./controllers/mailMgtService');

const app = express();


app.use(express.static('dist'));
app.use((req, res, next) => {
	  
	  res.setHeader('Access-Control-Allow-Origin', '*');
	  // Request methods you wish to allow
	  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	  // Request headers you wish to allow
	  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	  // Set to true if you need the website to include cookies in the requests sent
	  // to the API (e.g. in case you use sessions)
	  res.setHeader('Access-Control-Allow-Credentials', true);
	  next();
	});

//Body.
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json({
  limit: '50mb'
}));


app.post('/api/sendmail', async function (req, res, next) {
	
	let message = await mailMgtService.sendMail(req.body);
	
	res.send(message);
});




app.listen(8080, () => console.log('Listening on port 8080!'));
