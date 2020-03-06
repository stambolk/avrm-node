var fs = require('fs');

const filename = 'data.txt'

fs.writeFile(filename, 'pepepe ppepepe ', (err) => {    
    if(err){
        console.error(err);
        return;
    }
    console.log("Write is successs ")

    fs.appendFile('data.txt', ' Nov Tekst.', function (err) {
    if (err) throw err;
    console.log('Updated!');

    fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
    });
        });


const write = (fname, data) => {
    return new Promise((success, fail) => {
        fs.writeFile(fname, data, (err) => {
            if(err){
                return fail(err);
            }
            else{
                return success();
            }
        });
    });
};

const append = (fname, data) => {
    return new Promise((success, fail) =>{
        fs.appendFile(fname, data , (err) =>{
            if(err){
                return fail(err);
            }
            return success();
        });
    });
};


const read = (fname) => {
    return new Promise ((success, fail) => {
        fs.readFile(fname, 'utf8', (err,data) => {
            if(err){
                return fail(err);
            }
            return success(data);
        });
    });
};

let file2 = 'data2.txt';
write(file2, 'test test test')
.then(() =>{
    return append(file2, ' TEST TEST AAA ')
})
.then(() => {
    return read(file2);
})
.then((data) => {
    console.log(data);
})
.catch(err => {
    console.error(err);
})