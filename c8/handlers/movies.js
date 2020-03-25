const movies = require('../models/movies');

const getAllMovie = (req,res)=>{
    movies.getAll()
    .then(data =>{
        res.status(200).send(data);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).send(err);
    });
};

const getOneMovie = (req,res)=>{
    movies.getOne(req.params.id)
    .then(data =>{
        res.status(200).send(data);
    })
    .catch(err=>{
        res.status(500).send(err);
    });
};

const addOneMovie = (req,res)=>{
    console.log(req.body)
    movies.save(req.body)
    .then(()=>{
        res.status(200).send('OK');
    })
    .catch(err=>{
        res.status(500).send(err);
    });
};

const updateOneMovie = (req,res)=>{
    movies.updateOne(req.params.id, req.body)
    .then(()=>{
        res.status(200).send('OK');
    })
    .catch(err=>{
        res.status(500).send(err);
    });
};

const deleteOneMovie = (req,res)=>{
    movies.deleteOne(req.params.id)
    .then(()=>{
        res.status(200).send('OK');
    })
    .catch(err=>{
        res.status(500).send(err);
    });
};


module.exports={
    getAllMovie,
    getOneMovie,
    addOneMovie,
    updateOneMovie,
    deleteOneMovie
};