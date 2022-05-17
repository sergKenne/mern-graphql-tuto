require('dotenv').config();
require('./db')(); //connect to database
const express = require('express')
const cors = require('cors');
const {ApolloServer} = require('apollo-server')
const app = express()

const todoRouter = require('./routes/todoRouter')


//MiddleWares
app.use(cors());
app.use(express.json())

app.use('/api/todos', todoRouter)

const typeDefs = require('./schema/typeDefs')
const resolvers = require('./schema/resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});

// const PORT = process.env.PORT || 6000
// app.listen(PORT, () => {
//     console.log(`server running on port ${PORT}`);
// })



