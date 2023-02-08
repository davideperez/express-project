const path = require('path')

function postMessage(req, res) {
    console.log("Updating Messages...")
} 

function getMessages(req, res) {
        res.sendFile(path.join(__dirname, '..', 'public', 'beachChurch.jpg'))
    //res.send("<ul><li> Hello David!! </li></ul>")
} 

module.exports = {
    postMessage,
    getMessages
}