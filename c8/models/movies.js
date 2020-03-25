const mongoose = require('mongoose');

const Movie = mongoose.model(
    'movies',
    {
        name: String,
        director: String,
        release_date: Date,
        genre: [String],
        actors: [String],
        plot: String
    },
    'movies'
)

const save = (data) => {
    return new Promise ((success,fail)=>{
        let s = new Movie(data);
        s.save((err)=>{
            if(err){
                return fail(err);
            }
            return success(data);
        });
    });
};

const getAll = () => {
    return new Promise((succ,fail)=>{
        Movie.find({}, (err,data)=>{
            if(err){return fail(err)}
            return succ(data);
        })
    });
}

const getOne = (id) => {
    return new Promise((succ,fail)=>{
        Movie.findOne({_id: id}, (err,data)=>{
            if(err){return fail(err)}
            return succ(data);
        })
    });
}

const updateOne = (id,data) => {
    return new Promise((succ,fail)=>{
        Movie.updateOne({_id:id},data , (err)=>{
            if(err){return fail(err)}
            return success();
        })
    })
}

const deleteOne = () => {
    return new Promise((success,fail)=>{
        Movie.deleteOne({_id:id}, (err)=>{
            if(err){
                return fail(err);
            }
            return success();
        })
    })
}

module.exports = {
    save,
    getAll,
    updateOne,
    getOne,
    deleteOne
};