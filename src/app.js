const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require ('method-override')
const indexRouter = require('./router/index');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use(express.static(path.join(__dirname, '../public')));
app.listen (3000, function(req, res){
    console.log("conectado en puerto 3000");
})