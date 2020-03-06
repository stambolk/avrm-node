//handler
const index = (req,res) => {
    res.send("ok");
}
const pero = (req,res) => {
    res.send("hi pero");
}

const name = (req,res) => {
    res.send(req.params.name);
}

const calc = (req,res) => {
    switch (req.params.op){
            case "add" :
            var result = parseInt(req.params.a) + parseInt(req.params.b);
            break;
            case "sub" :
            var result = parseInt(req.params.a) - parseInt(req.params.b);
            break;
            case "mul" :
            var result = parseInt(req.params.a) * parseInt(req.params.b);
            break;
            case "div" :
            var result = parseInt(req.params.a) / parseInt(req.params.b);
            break;
    }
    res.send(result.toString());
}

const post = (req, res) => {
    let pozdrav = `Zdravo ${req.body.ime} ${req.body.prezime}`;
    res.send(pozdrav)
}

module.exports = {
    index,
    pero,
    name,
    calc,
    post
};