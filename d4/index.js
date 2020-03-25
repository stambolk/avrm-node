const express = require('express');
const bodyParser = require('body-parser');
const students = require('./handlers/students');
const db = require('./db');
const cors = require('cors');

db.init();

const api = express();
api.use(bodyParser.json());
api.use(cors());

api.get('/api/v1/students', students.getAll); 
api.get('/api/v1/students/:id', students.getOne); 
api.post('/api/v1/students', students.addOne); 
api.put('/api/v1/students/:id', students.updateOne); 
api.delete('/api/v1/students/:id', students.deleteOne);

api.listen(4200, (err) => {
    if(err){
        return console.error(err);
    }
    console.log('API ON 4200');
});
