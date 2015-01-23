var express= require("express");
var path = require("path");
var bodyParser = require("body-parser");
var csv= require('ya-csv');

var app = express();
app.use(express.static(path.join(__dirname, "")));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/hello", function(request, response){
    response.sendFile(path.join(__dirname, "index.html"));
});
app.post('/booking', function(request, response){
    console.log(request.body);
    var fullName = request.body.name;
    var phonenumber = request.body.phonenumber;
    var email = request.body.email;
    var guests = request.body.guests;

    var database = csv.createCsvFileWriter("bookings.csv", {"flags": "a"});
    var data = [fullName,phonenumber, email, guests];

    database.writeRecord(data);
    database.writeStream.end();

    response.send(' Thanks '+ fullName
        +"! We will contact you on "
        + email + ' about your booking for '+ guests +" guests. Thank you :)");
});


var server = app.listen(8080, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("Gardies at http://%s:%s", host, port);
});
