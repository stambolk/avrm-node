const users = require('../models/users');

const getAllUser = (req,res)=>{
    users.getAll()
    .then(data =>{
        res.status(200).send(data);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).send(err);
    });
};

const getOneUser = (req,res)=>{
    users.getOne(req.params.id)
    .then(data =>{
        res.status(200).send(data);
    })
    .catch(err=>{
        res.status(500).send(err);
    });
};

const addOneUser = (req,res)=>{
    console.log(req.body)
    users.save(req.body)
    .then(()=>{
        res.status(200).send('OK');
    })
    .catch(err=>{
        res.status(500).send(err);
    });
};

const updateOneUser = (req,res)=>{
    users.updateOne(req.params.id, req.body)
    .then(()=>{
        res.status(200).send('OK');
    })
    .catch(err=>{
        res.status(500).send(err);
    });
};

const deleteOneUser = (req,res)=>{
    users.deleteOne(req.params.id)
    .then(()=>{
        res.status(200).send('OK');
    })
    .catch(err=>{
        res.status(500).send(err);
    });
};


module.exports={
    getAllUser,
    getOneUser,
    addOneUser,
    updateOneUser,
    deleteOneUser
};