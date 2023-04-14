const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const app = express()

const port = 3000
app.use(cors())

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    passworld:"",
    database:"logowanie"
})

con.connect(function(err){
    if(err) console.log(err)
    console.log("Poloczono")
})

const users = app.get("/select",function(req,res){
    const sql = "SELECT user,pass,upr FROM users"
    con.query(sql,function(err,result,fields){
        if(err) console.log(err)
        res.send(result)
    }) 
})

app.listen(port,()=>{
    console.log(`Aplikacja dziala na porcie: ${3000}`)
})