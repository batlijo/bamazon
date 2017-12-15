/*
How to run node js with mysql:
C:\Users\Your Name>npm install mysql.
var mysql = require('mysql');
Run "demo_db_connection.js" C:\Users\Your Name>node demo_db_connection.js.
Connected!
con. connect(function(err) { if (err) throw err; console.log

*/

var mysql = require('mysql');
var inquirer = require("inquirer");

var connect = {
  host: 'localhost',
  user: 'root',
  password: "santal33!",
  database: "bamazon",
  port: 3306
};

/*connect.connect(function() {
  if(error){
    console.log("Error");
  } else {
    console.log("Connected");
  }
});*/


const mySql = require("mysql")
const connection = mySql.createConnection(connect)


connection.connect(function(error){
  if (error){
    throw error
  }
  console.log(`Connected as ID: ${connection.threadId}`)
});

productDisplay();
function productDisplay(){
  var query = "SELECT ID, product_name, price FROM products;"
  connection.query(query,function (err,response){
    if (err){
      throw err
    };
  for (var i = 0; i < response.length; i +=1){
    console.log(`Product ID: ${response[i].ID} \nItem: ${response[i].product_name} \nPrice:$${response[i].price}\n`);
  }
  inquirer
    .prompt([
        {
        type: "input",
        message:"which product would you like to purchase?",
        name: "product",
      },
        {
        type: "input",
        message: "How many would you like to purchase?",
        name:"quantity"
        }
    ])
.then(function(inquirerResponse){
  var thing = "select * from products where ID = " + inquirerResponse.product;
  connection.query(thing,function(error,response){
    if (error) {
      throw error
    }
    if (response[0].stock_quantity < inquirerResponse.quantity){
      console.log("INSUFFICIENT QUANTITY");
      connection.end();
    }else {
      purchase(response[0].stock_quantity, inquirerResponse.quantity,inquirerResponse.product)
      }
  })
//then this is to check stock quantity, use if statement ^^^

});
})
}
 function purchase (stockQuantity, customerQuantity, item) {
   var peeps = "select * from products where ID = " + item
   connection.query(peeps,function(error,response){
     if (error) {
       throw error
     }
     var totalPrice = response[0].price * customerQuantity;
     console.log("Your total is $" + totalPrice);
   })
 }
// }else {
  //purchase response stock quantity
// })

//then this is to check stock quantity






/*
prompt 1: Which product ID would you like to purchase?
prompt 2: how many units would you like to buy?
database needs to check enough qty of the product, if not prompt user insufficient stock
if enough stock prompt user sufficient stock
update database with remaining qty on mysql
show customer total cost of their purchase


LOOK AT ICE CREAM CRUD.JS ACTIVITY FROM SATURDAY FOR REFERENCE FOR THE NODE STUFF
*/
