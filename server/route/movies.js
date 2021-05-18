//libs
const express = require(`express`)
const sql = require(`mssql`)

let MoviesRoute = express.Router()

MoviesRoute.get('/', (req, res) => {
    let obj = [{
        id: 1,
        name: 'kuku'
    },
    {
        id: 2,
        name: 'gugu'
    },
    {
        id: 3,
        name: 'lulu'
    }]

    res.send(obj)
})


module.exports = MoviesRoute