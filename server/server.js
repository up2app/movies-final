//libs
const express = require(`express`)
const http = require(`http`)
const path = require(`path`)
const cors = require(`cors`)

//vars
const PORT = process.env.PORT || 5000

//create the app
let app = express()
app.use(cors())

//create static folder to serve files
app.use(express.static(path.join(__dirname, '..', 'build')))

//for the client only - use the index.html file
app.get('/*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
    next()
})

//routes
app.use(`/api/movies`, require('./route/movies'))

//create the server
let server = http.createServer(app)

//run the server
server.listen(PORT, () => {
    console.log(`App listening on port ${PORT}: --> http://localhost:${PORT}`)
})
