const express = require('express');
const hbs = require('hbs'); //handlebars
const bodyParser = require("body-parser");
var fs = require('fs');
let app = express();
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
   //res.send('OK')
   res.render('main');
});

app.get('/ime/:ime' , (req, res) => {
   let data = {
      ime: req.params.ime,
      prezime: 'Lolce',
      denovi: ['pon','vto','sre','cet','pet', 'sab', 'ned']
   };
   res.render('ime', data);
});

const post = (req, res) => {
    fs.readFile('studenti.json', 'utf8', (err, data) => {
        if (err) throw err;
        const students = JSON.parse(data);  
    students.push({
        ime: req.body.ime,
        prezime: req.body.prezime,
        prosek: req.body.prezime,
    });
    fs.writeFile('studenti.json', JSON.stringify(students) , (err) => {
        if (err) throw err;
        console.log('JSON updated!');
        return;
        });
    });   
    res.redirect('/studenti');
}

app.post('/students', post);



fs.readFile('studenti.JSON', 'utf8', (err,data) =>{
if (err) throw err;
const students = JSON.parse(data);
var imeNaStudenti = [];
students.forEach(e => imeNaStudenti.push(e.ime));
var prezimeNaStudenti = [];
students.forEach(e => prezimeNaStudenti.push(e.prezime));
var prosekNaStudenti = [];
students.forEach(e => prosekNaStudenti.push(e.prosek));
app.get('/s', (req,res)=>{
    let studentData = {
        ime : imeNaStudenti,
        prezime: prezimeNaStudenti,
        prosek: prosekNaStudenti
     };
     res.render('tabela' , studentData) ;
});
});



app.listen(4200, (err) =>{
    if(err) {
        console.log(err);
        return;
    }
    console.log("Server is on 4200");
});