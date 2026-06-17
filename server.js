const express=require("express");

const mysql=require("mysql2");

const cors=require("cors");



const app=express();


app.use(cors());

app.use(express.json());


app.use(
express.static("public")
);



const db =
mysql.createConnection(
{

host:"localhost",

user:"root",

password:"MySQL@1947",

database:"register_db"

}
);



db.connect(
function(error)
{

if(error)
{
console.log(error);
}

else
{
console.log(
"Database Connected"
);
}


}
);





app.post(
"/register",

function(req,res)
{


let name=req.body.name;

let email=req.body.email;

let password=req.body.password;



let sql=
"INSERT INTO users(name,email,password) VALUES(?,?,?)";



db.query(
sql,

[name,email,password],

function(error,result)
{


if(error)
{
console.log(error);
}


else
{
res.send(
"Inserted"
);
}


}

);


}

);





app.listen(
3000,

function()
{

console.log(
"Server started on port 3000"
);

}

);