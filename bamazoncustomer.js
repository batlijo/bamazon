/*
How to run node js with mysql:
C:\Users\Your Name>npm install mysql.
var mysql = require('mysql');
Run "demo_db_connection.js" C:\Users\Your Name>node demo_db_connection.js.
Connected!
con. connect(function(err) { if (err) throw err; console.

*/

var mysql = require('mysql');
var connect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "",
  database: "bamazon"
});

connect.connect(function() {
  if(error){
    console.log("Error");
  } else {
    console.log("Connected");
  }
});

/* is this to retrieve the data from the table via command line?

app.get("/", function(req, resp){
  connnection.query("SELECT * FROM bamazon", function(error,rows...)
    if(!!error) {
      console.log("Error in the query");
    } else {
      console.log("Success!\n");
      console.log(rows[0].Name);
      resp.send("Hello" + rows[0].Name)
  }
}
*/

console.log(amazon items);


/*
prompt 1: Which product ID would you like to purchase?
prompt 2: how many units would you like to buy?
database needs to check enough qty of the product, if not prompt user insufficient stock
if enough stock prompt user sufficient stock
update database with remaining qty on mysql
show customer total cost of their purchase
*/
