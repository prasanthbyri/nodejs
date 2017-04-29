var express = require('express');
var app = express();

app.get('/' , function (req, res){
		res.send('HEY! YOU made a GET api call');
		});
		
app.post('/', funciton (req,res){
		res.send(' Hey! YOU made a POST api call');
		});
		
app.put('/', funciton (req,res){
		res.send(' Hey! YOU made a PUT api call');
		});
		
app.delete('/', funciton (req,res){
		res.send(' Hey! YOU made a delete api call');
		});
		
app.listen(3000, function (){
	console.log('Hey,, server started at port 3000!')
});