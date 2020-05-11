//DEPENDENCIES
require('dotenv').config()
const express = require('express')
const session = require('express-session')

//IMPORT 
const {SERVER_PORT, SESSION_SECRET} = process.env
const {modifier} = require('./middleware')

//TOP-LEVEL MIDDLEWARE
const app=express()
app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookies: {
        maxAge: 1000*60*60*24*14
    }
}))
app.use( express.static( `${__dirname}/../build` ) );
//SERVER SETUP
app.post('/api/chat', (req,res,next) => {
    const {msg} = req.query
    res.status(200).send(msg)
})


//REQUEST-LEVEL MIDDLEWARE
app.use(modifier)

//SERVER SETUP
app.post('/api/message', (req,res,next) => {
    const {message} = req.body
    req.session.message = message
    console.log(req.session.message)
    res.status(200).send(message)
})






app.listen(SERVER_PORT, () => console.log(`server listening on port ${SERVER_PORT}`))