const Todo = require('../models/todoModels')

const getAllTodo = (req, res) => {
    Todo.find({}, (err, data) => {
        if (err) {
            return res.json({
                success: false,
                msg: err.msg
            })
        }
        res.status(200).json(data)
    })
}

const getTodo = (req, res) => {
    //Todo.find({ id: req.params.id })
    Todo.findById(req.params.id)
        .then((todo) => {
            res.status(200).json(todo);
        })
        .catch((err) => {
            res.json({ msg: err.message });
        });
}

const createTodo = (req, res) => {
    const newTodo = new Todo(req.body)
    newTodo
        .save()
        .then(todo => {
            console.log("todo:", todo);
            res.status(200).json({
                msg: 'todo created successfully',
                todo,
            });
        })
        .catch(err => {
            res.json(err.message)
        })
}

const updateTodo =  async(req, res) => {
    const todo = await Todo.findOne({ id: req.params.id });
    todo.title = req.body.title;
    todo.description = req.body.description;
    
    todo.save((err, todo) => {
        if (err) {
            return res.json(err.message)
        }
        res.status(200).json({
            msg: 'todo updated successfully',
            todo,
        });
    })
}

const deleteTodo = (req, res) => {
    Todo.findByIdAndDelete(req.params.id)
        .then(todo => {
            res.status(200).json({
                msg: "todo deleted successfully",
                todo
            })
        })
        .catch(err => {
            res.json({msg: err.msg})
        })
}
module.exports = {
    getAllTodo,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
};
