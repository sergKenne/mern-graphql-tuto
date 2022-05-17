const {gql}  =  require('apollo-server')
const typeDefs = gql`
    type Todo {
        id: ID
        title: String
        description: String
    }

    input TodoInput {
        title: String
        description: String
    }

    type Query {
        todos: [Todo]!
        todo(id: ID): Todo!
    }

    type Mutation {
        createTodo(input: TodoInput): Todo
        deleteTodo(id: ID): Todo
        updateTodo(id: ID, input: TodoInput): Todo
    } 
` 
module.exports =  typeDefs