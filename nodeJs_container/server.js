const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Sudipto 🚀 Docker is working!');
});

app.listen(5000, function() {
    console.log('Web application is listening on port 5000');
});
