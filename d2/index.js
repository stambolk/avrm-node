const express = require('express');
const hbs = require('hbs'); //handlebars
const bodyParser = require("body-parser");
var fs = require('fs');
let app = express();

app.set('view engine', 'hbs'); //install express hbs 
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res)=> {
    fs.readFile('blogs.json', 'utf8', (err, data)=>{
     if (err) throw err;
     var data = {
         blogs:JSON.parse(data)
        };
     res.render('blogs', data);
    });
});

app.get('/postblog', (req,res)=> {
    fs.readFile('blogs.json', 'utf8', (err, data)=>{
     if (err) throw err;
     var data = {
         blogs:JSON.parse(data)
        };
     res.render('blogs', data);
    });
});
app.post('/postblog', (req,res)=>{
   fs.readFile('./blogs.json', 'utf8', (err,data)=>{
       if(err) throw err;
       var data = JSON.parse(data);
       data.push({
           blogtitle: req.body.blogtitle,
           blogpost: req.body.blogpost,
           username: req.body.username
       });
       data.reverse();
       var data = JSON.stringify(data)
       fs.writeFile('./blogs.json', data, (err) =>{
       if(err) throw err;
       res.redirect('/postblog')
       });
   });
});

app.get('/postblog/delete/:id', (req,res)=>{
   fs.readFile('./blogs.json', 'utf8', (err,data)=>{
       if(err) throw err;
       data = JSON.parse(data);
       data = data.filter((v,i)=>{
           if(i != req.params.id){
               return v;
           }
       });
       data = JSON.stringify(data);
       fs.writeFile('./blogs.json', data, (err)=>{
           if(err) throw err;
           res.redirect('/postblog')
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