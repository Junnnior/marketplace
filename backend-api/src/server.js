const express = require('express');

const server = express();

server.get('/', (req, res) => {
    return res.send("Ola");
})

server.listen(3333);