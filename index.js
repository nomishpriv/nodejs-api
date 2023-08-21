require('dotenv').config();
const express = require('express');
// const mongoose = require('mongoose');
// const db = require('./db_connection')


const app = express();

app.use(express.json());

const routes = require('./routes/routes')

app.use('/api', routes)


app.listen(3001, ()=>{
    console.log(`Server is Active ${3001}`)
})