
const express=require("express");
const mysql = require("mysql");
const app=express();
const request=require("request");
const https=require("https");
app.use(express.static("Static"));
app.set('view engine','ejs');
const bodyParser=require("body-parser");
var Password;
var emailInput;
var fullName;
 
const btn1=document.getElementById("btn1");
btn1.textContent="ALEX";


app.use(bodyParser.urlencoded({extended:true}));

//Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'goat6565',
    database: "codes",
    
  });

//Connect to Database
db.connect((err) => {
    if(err){
      console.log(err);
      return;
    }
    console.log('Connection established');
  });

  //Insert into Database
  
//for css rendering
  app.use(express.static(__dirname));

app.get("/", function (req, res) {
    
    res.sendFile(__dirname+"/index.html");
    
    
   
    
});
app.post("/login",function(req,res){
     Password = req.body.Password;
     emailInput = req.body.emailInput;
     db.query("SELECT * FROM userinfo WHERE email = "+ mysql.escape(emailInput),function(err, result){
           if(err){
               console.log(err);
           }else{
               console.log("Email Exists \n");
               let info =result;//Stores the emails info in a json format
               console.log("The password for "+emailInput+" is "+info[0].password);
               //Check if input password is same as database password
               if(result[0].password == Password){
                   console.log("Login Success");
                   res.sendFile(__dirname+"/welcome.html")
               }else{
                   console.log("Wrong Password");
                   res.redirect("/");
               }
           }
     });
     
    
});

app.get("/signUp",function(req,res){

    //Change back to HTML
     res.sendFile(__dirname + "/signUP.html");
    
     

   
    
});
app.post("/add", function (req, res) {

    Password = req.body.password;
    emailInput = req.body.emailInput;
    fullName = req.body.nameInput;

    var post={firstname:req.body.nameInput, lastname:req.body.nameInput, email: req.body.emailInput, password: req.body.password};

    console.log(fullName + " / " + Password + " / " + emailInput);
    


    db.query("SELECT * FROM userinfo WHERE email = "+ mysql.escape(emailInput),function(err, result){
        console.log(fullName + " /" + Password + " /" + emailInput);
        console.log("-----------------------------------");
        console.log(result);
        
        if(result==""){
            console.log("Email doesn't Exist");
            db.query("INSERT INTO userinfo SET ?", post, (err, result) => {
                if (err) {
                    console.log("Not successful");
                    throw err;
                 
                }
                else {
                    console.log("Inserted Successfully");
                }

            });
            res.redirect("/");
        }
         else if(result[0].email==emailInput){

            console.log("Email already exists");
            res.sendFile(__dirname+"/emailExist.html");
           
        }
        

         
        });
        

    

});


app.listen(3000,function(){
    console.log("Server running on port 3000");
});


