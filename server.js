const express = require('express') //install
const app = express() 
const api = require( './server/routes/api' )  // check the path
const path = require('path')
const bodyParser = require('body-parser') //install

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'dist'))) 
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use('/', api)



const port = 3000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})




