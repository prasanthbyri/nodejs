var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://127.0.01:27017//sample';
app.get('/', function (req,res) {

MongoClient.connect(url, function(err, db){
	var collection = db.collection(test);
	collection.find({}).toArray(function(err,docs){
	console.log("Found the records");
	console.dir(docs);
	db.close();
	});
	});
})
	
	app.listen(3000, function(){
		console.log('Hey! server started at port 3000!')
		})
		
	exports.app=app;