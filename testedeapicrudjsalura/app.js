const express = require('express')
const express = require('express-session')

var path  = require('path')
const app = express()

app.engine('html', require('ejs').renderFile)
app.set('view engine',  'html')
app.use('html', express.static(path.join(__dirname, ' public')))
app.set('views',path.join(__dirname, '/views'))