const http = require('http'),
path = require('path'),
express = require('express'),
bodyParser = require('body-parser');
const sqlite3 = require('sqlite').verbose();
const app = express();
app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
