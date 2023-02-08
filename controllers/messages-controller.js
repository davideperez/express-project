function postMessage(req, res) {
    console.log("Updating Messages...")
} 

function getMessages(req, res) {
    res.send("<ul><li> Hello David!! </li></ul>")
} 

module.exports = {
    postMessage,
    getMessages
}