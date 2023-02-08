//// Imports ////

const express = require('express')
const friendsController = require('./controllers/friends-controller')
const messagesController = require('./controllers/messages-controller')

//// SV Start ////

const app = express()
const PORT = 3000

//// Data ////



//// Middleware ////

//#1

app.use((req, res, next) => {
    const start = Date.now()
    next()
    const delta = Date.now() - start
    console.log(`${req.method} ${req.url} ${delta} ms`)

})

//#2

app.use(express.json()) // middleware que convierte los req en jsons

//// Routes ////

app.get('/friends', friendsController.getFriends)
app.get('/friends/:friendId',  friendsController.getFriend)
app.post('/friends', friendsController.postFriend)

app.get('/messages', messagesController.getMessages)
app.post('/messages',messagesController.postMessage)

//// Checks ////
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})