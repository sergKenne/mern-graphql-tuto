const Todo = require('../models/todoModels')

const resolvers = {
    Query: {
        todos: async () => {
            const todos = await Todo.find({});
            return todos;
        },
        todo: async (parent, args, context) => {
            const { id } = args;
            const todo = await Todo.findById(id);
            return todo;
        },
    },
    Mutation: {
        createTodo: async (parent, args) => {
            const { title, description } = args.input;
            const todo = new Todo({ title, description });
            return await todo.save();
        },
        deleteTodo: async (parent, args) => {
            const { id } = args;
            return await Todo.findByIdAndDelete(id);
        },
        updateTodo: async (parent, args, context) => {
            const { id, input } = args;
            console.log("input:", input);

           return await Todo.findByIdAndUpdate(id, input)

            //const { title, description } = args.input;

            // const newTodo = await Todo.findByIdAndUpdate(id, input)
            // console.log(newTodo);
            // return newTodo
            // const newTodo = await Todo.findOne({ id })
            // console.log("newTodo:", newTodo);
            // newTodo.title = title
            // newTodo.description = description

            
           
            // return await newTodo.save();
           

        }
    },
};

module.exports = resolvers;