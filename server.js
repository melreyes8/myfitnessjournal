var express = require('express');
var app = express();
var mysql = require('mysql');


// set the view engine to ejs
app.set('view engine', 'ejs');

//you need this to be able to process information sent to a POST route
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static("public"));

// Initializes the connection variable to sync with a MySQL database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306. Mine is 418.
    port: 418,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "myfitnessjournal_db"
});

// app.post('/submit', function(req, res){
// res.json(req.body);

app.post('/profile', function(req, res){

connection.query(
	"INSERT INTO userprofile (userMotto, userName, userAge, userWeight, userGoal, userGoalStatus, userExercises) VALUES (?,?,?,?,?,?,?)",
	[req.body.userMotto, req.body.userName, req.body.userAge, req.body.userWeight, req.body.userGoal, req.body.userGoalStatus, req.body.userExercises],
	function(err, response) {
		res.redirect('/');
	}
	);
});

app.post('/journal.html', function(req, res){

    connection.query(
        "INSERT INTO userprofile (userMotto, userName, userAge, userWeight, userGoal, userGoalStatus, userExercises) VALUES (?,?,?,?,?,?,?)",
        [req.body.userMotto, req.body.userName, req.body.userAge, req.body.userWeight, req.body.userGoal, req.body.userGoalStatus, req.body.userExercises],
        function(err, response) {
            res.redirect('/');
        }
        );
    });


// app.get('/flashcard', function(req, res){
// connection.query(
// 	"SELECT * FROM flashcard",
// 	function(err, response) {
// 		res.json(response);
// 	}
// 	);
// });

// app.get('/show-flashcard', function(req, res){
// 	connection.query(
// 		"SELECT * FROM flashcard",
// 		function(err, response) {
// 		  res.render('show', {
// 			flashcard: response
// 		  });
// 		}
// 	  );
//   });

app.listen(3000, function(){
	console.log('listening on 3000');
});

