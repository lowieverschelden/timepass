const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index');
const endrouteRouter = require('./routes/endroute');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', indexRouter);
app.use('/endroute', endrouteRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Server draait op http://localhost:${port}`);
});