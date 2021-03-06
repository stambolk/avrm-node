const mongoose = require('mongoose');

const Student = mongoose.model(
    'students',
    {
      first_name: String,
      last_name: String,
      avg_grade: Number   
    },
    'students'
);

const save = (data) => {
    return new Promise((success,fail)=>{
      let s = new Student(data);
      s.save((err)=>{
          if(err){
              return fail(err);
          }
          return success(data);
      });
    });
}

const getAll = () => {
    return new Promise((succ,fail)=>{
        Student.find({}, (err,data)=>{
            if(err){return fail(err)}
            return succ(data);
        })
    });
}

const getOne = (id) => {
    return new Promise((succ,fail)=>{
        Student.findOne({_id: id}, (err,data)=>{
            if(err){return fail(err)}
            return succ(data);
        })
    });
}

const updateOne = (id,data) => {
    return new Promise((success,fail)=>{
        Student.updateOne({_id:id},data , (err)=>{
            if(err){return fail(err)}
            return success();
        })
    })
}

const deleteOne = () => {
    return new Promise((success,fail)=>{
        Student.deleteOne({_id:id}, (err)=>{
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