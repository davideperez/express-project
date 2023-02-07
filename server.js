const express = require('express')

const app = express()

const PORT = 3000

app.get('/', (req, res) => {
    res.send({id: 1, name: "David Pérez"})
} )

app.get('/messages', (req, res) => {
    res.send("<ul><li> Hello David!! </li></ul>")
} )


app.post('/messages', (req, res) => {
    console.log("Updating Messages...")
} )
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})