require('dotenv').config();
require('./db')(); //connect to database
const express = require('express')
const cors = require('cors');
const {ApolloServer, gql} = require('apollo-server')
const app = express()

const todoRouter = require('./routes/todoRouter')


//MiddleWares
app.use(cors());
app.use(express.json())

app.use('/api/todos',todoRouter)

const PORT = process.env.PORT || 6000
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})



