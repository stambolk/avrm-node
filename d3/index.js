
//MONGOOSE
const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://dev:dev1234@cluster0-rx2ck.mongodb.net/ecommerce?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err)=>{
        if(err){
            console.log(err);
            console.log('Database error')
        }
        return;
    }
);
//MONGOOSE

//EXPRESS
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(`${__dirname}/public`));
//EXPRESS


const Students = mongoose.model(
    'students',
    {
        ime: String,
        prezime: String,
        prosek: Number,
        grad: String
    },
    'students'
);



app.get('/',(req,res)=>{
   Students.find({},(err,data)=>{
       if(err){return console.log(err)}
       console.log(data) ;
       res.render('main', {students: data});
   });
});



app.post('/edit/:id', (req,res)=>{
    Students.updateOne(
        {_id: req.params.id},
        {   ime: req.body.ime,
            prezime: req.body.prezime,
            grad: req.body.grad,
            prosek: req.body.prosek},
        (err)=>{
            if(err){
                console.log(err)
            }
            res.redirect('/')
        }
    )
});

app.get('/edit/:id',(req,res)=>{
    Students.find({_id: req.params.id },(err,data)=>{
        if(err){return console.log(err)}
        res.render('edit', {students: data});
    });
 });




app.get('/delete/:id',(req,res)=>{
    Students.deleteOne(
        {_id: req.params.id},
        (err)=>{
            if(err){
                console.log(err)
            }
            res.redirect('/');
        }
    );
});

app.post('/newstudent', (req,res)=>{
   let newStudent = new Students({
       ime: req.body.ime,
       prezime: req.body.prezime,
       grad: req.body.grad,
       prosek: req.body.prosek
   });
   newStudent.save((err)=>{
       if(err){console.log(err)};
       res.redirect('/')
   });
});
  


app.listen(4200, (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Server up on 4200')
});