const express = require('express');
const handlers = require('./handlers');
// app obj
let app = express();


//roytes
app.get("/", handlers.index);

app.get("/pero", handlers.pero );

app.get("/ime/:name" /*params name*/ , handlers.name);
//starter
app.listen(4200);
