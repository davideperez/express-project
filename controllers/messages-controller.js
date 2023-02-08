const path = require('path')

function postMessage(req, res) {
    console.log("Updating Messages...")
} 

function getMessages(req, res) {
    res.render('messages', {
        title: 'Mensajes a mi amigo.',
        friend: 'Alberto Ginastera'
    })
    
    //res.sendFile(path.join(__dirname, '..', 'public', 'images', 'beachChurch.jpg'))
    //res.send("<ul><li> Hello David!! </li></ul>")
} 

module.exports = {
    postMessage,
    getMessages
}