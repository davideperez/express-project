//Imports
const express = require('express')
const messagesRouter = require('./routes/messages-router')
const friendsRouter = require('./routes/friends-router')
const path = require('path')

//Sv start

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

const PORT = 3000

// Middleware
app.use((req, res, next) => {
    const start = Date.now()
    next()
    const delta = Date.now() - start
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta} ms`)
})

// Web Serving

app.use('/site', express.static(path.join(__dirname,'public')))
app.use(express.json()) // middleware que convierte los req en jsons

app.get('/',(req, res) => {
    res.render('index', {
        tabTitle: 'Holidays Places',
        firstTitle: 'Churches on Islands!'
    })
})


/// Routes

app.use('/friends', friendsRouter)
app.use('/messages', messagesRouter)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})