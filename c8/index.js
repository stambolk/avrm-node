//API Video Store

//public
//User create acc
//User login
//Add movie
//List all movies

//private
//Get one movie
//Update movie
//Delete movie
/*
movie{
    name:
    director:
    release_date: ISODate("1991-1429,421")
    genre:['action','comedy','sci-fi']
    actors: ['Pero perovski lalla']
    plot: "Lorem ipsus dosu kosus losus bro"
}

list all
/movies
list one
/movies/:id
*/

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const db = require('./db');
const auth = require('./handlers/auth');
const movies = require('./handlers/movies')
db.init();
const api = express();
api.use(bodyParser.json());
api.use(cors());

api.use(
    jwt({secret: 'tajna123'})
    .unless({path:[
        {url: '/register', methods: ['POST'] },
        {url: '/login', methods: ['POST'] },
        {url: '/movies', methods: ['GET'] },
        {url: /^\/movies\/.*/ , methods: ['GET'] }
    ]})
);

api.post('/register', auth.register);
api.post('/login', auth.login);
api.get('/movies', movies.getAllMovie);
api.post('/movies', movies.addOneMovie);
api.get('/movies/:id', movies.getOneMovie); 
api.put('/movies/:id', movies.updateOneMovie);
api.delete('/movies/:id', movies.deleteOneMovie);


api.listen(4200,(err)=>{
    if(err){
        return console.log(err)
    }
    console.log('API ON')
});