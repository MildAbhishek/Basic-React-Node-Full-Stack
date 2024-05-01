// const express = require('express') // common-js

import express from 'express';

const app = express();


const port = process.env.PORT || 3000;

// This below line i to use static asset of frontend distribution folder, which is generated in frontend using npm run build
app.use(express.static('dist')); // middleware, by default it will run over '/' route

// app.get('/', (req, res)=>{
//     res.send('Server is running');
// })

// Get a list of 5 jokes

app.get('/api/jokes', (req, res)=>{
    const jokes = [
        {
            id:1,
            content:"Joke 1"
        },
        {
            id:2,
            content:"Joke 2"
        },
        {
            id:3,
            content:"Joke 3"
        }
    ]

    // res.send(jokes)
    res.json(jokes)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})