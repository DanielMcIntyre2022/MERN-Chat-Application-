// import backend requirements //

const express = require('express');
const app = express();
const cors = require('cors');

const rooms = ['general', 'tech', 'finance', 'cyrpto'];

// use express to utilize the features below //

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// create server connection to front-end//

const server = require('http').createServer(app);
const PORT = 5001;
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

// Listen for server port //

server.listen(PORT, () => {
    console.log('listening to port', PORT)
})
