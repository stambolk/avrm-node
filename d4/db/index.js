const mongoose = require('mongoose');
const username = 'dev';
const password = 'dev1234';
const host = 'cluster0-rx2ck.mongodb.net';
const dbname = 'ecommerce';

const cstring = `mongodb+srv://${username}:${password}@${host}/${dbname}?retryWrites=true&w=majority`;

const init = () => {
    mongoose.connect(
        cstring,
        {useNewUrlParser:true, useUnifiedTopology:true},
        (err) => {
            if(err){
                return console.log(err);
            }
            console.log('DB INITED')
        }
    )
};

module.exports = {
    init
};