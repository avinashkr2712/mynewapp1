require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
//app.use(jwt());

app.use("/", express.static(path.join(__dirname, "angular")));
// api routes
app.use('/users', require('./users/users.controller'));
app.use('/permissions', require('./permissions/permission.controller'));
app.use('/roles', require('./roles/roles.controller'));
app.use('/securitymodels', require('./security_model/security_model.controller'));
app.use('/userprofiles', require('./user_profile/user_profile.controller'));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "angular", "index.html"));
});

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 8080;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
