var fs = require('fs');

fs.readFile('studenti.json', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    var studenti = JSON.parse(data);
    console.log(studenti);
    studenti.sort(function(a, b ){
        return a.ime.length - b.ime.length
    });
    console.log(studenti);
    studenti.sort(function(a, b ){
        return b.prezime.length - a.prezime.length
    });
    console.log(studenti);
    studenti.sort(function(a, b ){
        return b.prosek - a.prosek
    });
    console.log(studenti);

    studenti.sort(function(a, b ){
        return a.prosek - b.prosek
    });
    console.log(studenti);
    
    let FBLM = studenti.filter((v) =>{
       return v.prezime.endsWith('ski')
         console.log(FBLM);
    });
    
    let rbp = studenti.reduce((acc,s)=>{
        if(acc.prosek != undefined){
            return acc.prosek;
        }
      let o = Number(acc) + Number(s.prosek) ;
        
    }
    );
    console.log(rbp / studenti.length);
});

let msbp = studenti.map((s, i) => {
    return s.prosek / 2;
    
});
/*
JSON.parse();
array.sort
array.filter
array.map
array.reduce

procitaj podatocite od file
student so najkratko ime (ARAYY SORT)
student so najdolgo prezime(ARAYY SORT)
student so najvisok proske(ARAYY SORT)
student so naj nizok porsek(ARAYY SORT)
studenti cie prezime ne zavrsuva na ski (ARAYY filter)
grupen prosek (array.reduce)
prosek/2    array.map     */