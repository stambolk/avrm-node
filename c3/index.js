const express = require('express');
const handlers = require('./handlers');
const bodyParser = require("body-parser")
// app obj
let app = express();
//midllware 
app.use(bodyParser.urlencoded({extended:true}));

//roytes
app.get("/", handlers.index);
app.post("/", handlers.post );
app.get("/ime/:name" /*params name*/ , handlers.name);
app.get("/calc/:op/:a/:b", handlers.calc);
//starter
//dsdsadsadsadsads
//dsdsadsadsadsads
//dsdsadsadsadsads
app.listen(4200, (err) => {
    if(err){
      console.log(err);
      return;
    }
    console.log("Server is on 4200");
});
//dsdsadsadsadsads


/*
1 file so array od studenti [] ;
na get / da gi otpecati site studente;
na POST / prakam student da bide zapisan u studenti[];
Open file, read file, parse JSON, zapisi stringify; 


*/ 