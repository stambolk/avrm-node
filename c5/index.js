const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://dev:dev1234@cluster0-rx2ck.mongodb.net/ecommerce?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err)=>{
        if(err){
            console.log("Cannot connect to DB");
            console.log(err);
        }
        return;
    }
);

const Users = mongoose.model(
    'users',
    {
        name: String,
        email: String,
        location: {
            city: String,
            address: String,
            number: String,
            country: String
        },
        password: String
    },
    'users'
);

const Products = mongoose.model(
    'products',
    {
        name: String,
        price: String,
        description: String,
        origin: String
    },
    'products'
);


//read
Users.find({}, (err,data)=>{
     if(err){
         return console.log(err);
        }
     console.log(data);
});

Products.find({}, (err,data)=>{
    if(err){
        return console.log(err);
    }
    console.log(data);
});
//write
let u = new Users({
    name:"Rajko Zinzifov",
    email: "rajkozif@gmail.com",
    location:{
        city: "Strumica",
        address: "Canko",
        number: "42",
        country: "Narnia"
    },
    password: "test5"
});

let p = new Products({
    name: "Aloevera",
    price: "30$",
    description: "Za mazenje",
    origin: "Algeria"
});

u.save((err)=>{
    if(err){
        return console.log(err);
    }
});

p.save((err)=>{
    if(err){
       return console.log(err);
    }
});

//update

Users.updateOne(
    {_id: '5e722137fa33623f40fd849c'},
    {
        email: "Alimuhamad@gmail.com",
        password: "test100"
    },
    (err)=>{
        if(err){return console.log(err);}
        console.log("User info updated")
    }
);


Products.updateOne(
    {_id:'5e7240eefa33623f4016b759'},
    {
        origin: "Papa New Guinea"
    },
    (err)=>{
        if(err){
           return console.log(err)
        };
        console.log('Product updated')
    }
)
//delete

Users.deleteOne({_id: '5e721ed0fa33623f40fb5c21'}, (err)=>{
    if(err){
        return console.log(err);
    }
    console.log('User deleted');
});

Products.deleteOne({_id: '5e72410ffa33623f4016be7f'}, (err)=>{
    if(err){
        return console.log(err);
    }
    console.log('Product deleted');
});
/* 
Nova kolekcija PRODUCTS 
Elementi definirani
racno dodavame 2 produkti
Kompleten CRUD za kolekcijata produkti
*/

//studentiReadWrite