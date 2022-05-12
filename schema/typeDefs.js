const {}  =  require('apollo-server')
const typeDefs = gql`

    type Todo {
        id: ID
        title: string
        description: string
    }

    type Query {
        todos: [Todo]!
        todo(id: ID): Todo!
    }
` 
module.exports =  typeDefs