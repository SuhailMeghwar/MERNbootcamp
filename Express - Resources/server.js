// For Understnding how client server architecture works.
const http = require('http');

const data = (req, res) => {
    res.write('client has reached out to server!');
    res.end();
}

http.createServer(data).listen(4500);
console.log("Server is running!")













// const data = (req, res) => {
//     res.write('client has reached out to server!');
//     res.end();
// }

// ngrok config add-authtoken 2O6xlz6WERlBkMKZf9A9d8AYjN1_5fmR2v5Fv8s6r2nkJiX3U
// ngrok http 4500
