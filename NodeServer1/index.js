//Import express
const express = require('express');
//Create an application
const app = express();
const PORT = 3000;

//SImple get Route
app.get('/', (req, res) =>{
    const pranildata = {
        name:'pranil',
        sname: 'veer',
        no:'1',
        age:'23'
    }
    res.send(pranildata)
})

app.get('/veer', (req, res) =>{
    const pranildata = {
        name:'xyz',
        sname: 'yzw',
        no:'2',
        age:'unknown'
    }
    res.json(pranildata)
})

app.get('/about', (req, res) =>{
    res.sendFile(__dirname + '/about.html')
})

app.get('/download', (req, res) =>{
    res.download(__dirname + '/about.html')
})
//Attaching server to port
app.listen(PORT, () => {
    console.log(`Server Runing successfully on ${PORT}`)
})

//Run the server

// HTTP Methods: (REST API's)
// - GET
// - POST
// - PUT/PATCH 
// - DELETE