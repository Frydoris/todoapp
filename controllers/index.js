const Todo = require('../models/todo')


const getIndex = (req, res) => {
    Todo.find({}, (err, todos) => {
        if(err) console.log(err);
        res.render('index', {
            todos : todos
        });
    })
    
}

const postIndex = (req, res) => {
    const newTodo = new Todo({
        title: req.body.title
    })
    console.log(newTodo);
    newTodo.save((err)=>{
        if(err) console.log(err)
        res.redirect('/');
        
    });
    
}

const deleteIndex = (req, res) => {
    const { id } = req.params;
    Todo.findByIdAndDelete(id, (err) => {
        if(err) console.log(err)
        console.log("todo supprimé")
        res.redirect('/');
    })   
}

module.exports = {
    getIndex: getIndex,
    postIndex: postIndex,
    deleteIndex: deleteIndex
}