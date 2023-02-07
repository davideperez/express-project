const express = require('express')

const app = express()

const PORT = 3000

const friends = [
    {
        id: 0,
        name: 'Olivier Messiaen'
    },
    {
        id: 1,
        name: 'Johann Sebastian Bach'
    },
]

app.use((req, res, next) => {
    const start = Date.now()
    next()
    const delta = Date.now() - start
    console.log(`${req.method} ${req.url} ${delta} ms`)

})

app.use(express.json()) // middleware que convierte los req en jsons

app.post('/friends', (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({
            error: 'Missing friend name'
        })
    }
    
    const newFriend = {
        name: req.body.name,
        id: friends.length
    }
    friends.push(newFriend)

    res.json(newFriend) // esto es parte de tener la politica de que los responses siempre devuelvan jsons. 
})

app.get('/', (req, res) => {
    res.send({id: 1, name: "David Pérez"})
} )

app.get('/messages', (req, res) => {
    res.send("<ul><li> Hello David!! </li></ul>")
} )

app.get('/friends', (req, res) => {
    res.json(friends) // or res.send(friends)
} )

app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId)
    const friend = friends[friendId]
    if (friend) {
        res.status(200).json(friend)
    } else {
        res.status(404).json({error: "Friend does not exists!!!"})
    }
} )


app.post('/messages', (req, res) => {
    console.log("Updating Messages...")
} )
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})