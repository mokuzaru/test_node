const express = require('express');

const app = express();

app.use('port', process.env.PORT||3000);

app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.use('/',require('./routes'));

app.listen(app.get('port'),() => {
    console.log('server on port', app.get('port'));
})