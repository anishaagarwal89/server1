const express = require("express");

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', () => {
  res.send('');
})

app.get('/v1/user', (req, res) => {
  console.log("/v1/user");
  res.send("API: /v1/user")
});

app.get('/v1/user/api', (req, res) => {
  console.log("/v1/user/api");
  res.send("API: /v1/user/api")
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

app.listen(3000, (error) => {
  if (!error)
    console.log("Server is Successfully Running, and App is listening on port " + 3000)
  else
    console.log("Error occurred, server can't start", error);
}
);

module.exports = app;
