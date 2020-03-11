const express = require('express');
const hbs = require('hbs'); //handlebars
const bodyParser = require("body-parser");
var fs = require('fs');
let app = express();

app.set('view engine', 'hbs'); //install express hbs 
hbs.registerPartials(`${__dirname}/views/partials`);

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(`${__dirname}/public`));

app.get('/', (req,res) => {
    res.render('main');
});

app.get('/ime/:ime', (req, res) => {
    var data = {
        ime: req.params.ime,
        prezime: 'Lolce',
        denovi: ['pon','vtor','sre','cet']
    };
    res.render('ime'/*handlebar*/, data)
});

app.get('/students', (req,res)=>{
  fs.readFile('./studenti.json', 'utf8', (err,data) => {
    if(err) throw err;
    var output = {
        students: JSON.parse(data)
    };
    res.render('students', output)
  });
});


app.post('/students', (req,res)=>{
   fs.readFile('./studenti.json','utf8', (err,data)=>{
     if(err) throw err;
     data = JSON.parse(data);
     data.push({
         ime: req.body.ime,
         prezime: req.body.prezime,
         prosek: req.body.prosek
     });
     data = JSON.stringify(data);
     fs.writeFile('./studenti.json', data, (err)=>{
         if (err) throw err;
         res.redirect('/students');
     });
   });
});

app.get('/students/delete/:id', (req,res) => {
   fs.readFile('./studenti.json', 'utf8', (err,data)=>{
     if(err) throw err;
     data = JSON.parse(data)
     data = data.filter((v, i)=>{
         if(i != req.params.id){
             return v;
         }
     });
     data = JSON.stringify(data);
     fs.writeFile('./studenti.json', data, (err)=>{
         if(err) throw err;
         res.redirect('/students');
     });
   });
});

app.listen(4200, (err) =>{
    if(err) {
        console.log(err);
        return;
    }
    console.log("Server is on 4200");
});