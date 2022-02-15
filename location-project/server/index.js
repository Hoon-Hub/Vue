const express = require("express")
const cors = require("cors")
const axios = require("axios")
const url = require("url")
require('dotenv').config()

const PORT = process.env.PORT || 3000

// inits express
const app = express()

// enable cors
app.use(cors())

// routes
app.use('/api/search/', require('./routes/searchResults.js'))

// production 배포 내용
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(`${__dirname}/public`))
}


app.listen(PORT, () => console.log(`app has stared on port: ${PORT}`))



