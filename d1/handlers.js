//handler
var fs = require('fs');
const name = (req,res) => {
    fs.readFile('log.json', 'utf8', (err, data) => {
        if (err) throw err;
        const students = JSON.parse(data);  
    students.push({
        ime: req.params.ime,
        prezime: req.params.prezime
    });
    fs.writeFile('log.JSON', JSON.stringify(students) , (err) => {
        if (err) throw err;
        console.log('JSON updated!');
        });
    });
res.send(req.params.ime +(" ")+ req.params.prezime);
};
fs.watchFile('log.JSON', (event, filename) => {
 if(filename){
    fs.readFile('log.json', 'utf8', (err, data) => {
     if (err) throw err;
    const students = JSON.parse(data);
    var studentArray = [];
    students.forEach(e => studentArray.push(e.ime + " " + e.prezime + "<br>"));
    return flatArray =  studentArray.join("");
 })
}
});
fs.readFile('log.json', 'utf8', (err, data) => {
    if (err) throw err;
    const students = JSON.parse(data);
    var studentArray = [];
    students.forEach(e => studentArray.push(e.ime + " " + e.prezime + "<br>"));
    return flatArray =  studentArray.join("");
 });
const index = (req,res) => {
    res.send("<center><h1>Dodaj ime/:ime/prezime/:prezime <br> ili post so Postman </h1> <br>" + flatArray + "</center>");
}
const post = (req, res) => {
    let postman = `${req.body.ime} ${req.body.prezime}`;
    fs.readFile('log.json', 'utf8', (err, data) => {
        if (err) throw err;
        const students = JSON.parse(data);  
    students.push({
        ime: req.body.ime,
        prezime: req.body.prezime
    });
    fs.writeFile('log.JSON', JSON.stringify(students) , (err) => {
        if (err) throw err;
        console.log('JSON updated!');
        });
    });
    res.send(postman)
}
module.exports = {
   name ,
   index  ,
   post
};