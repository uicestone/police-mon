module.exports = function(app, router) {
    // register routes
    router = require('./station.js')(router);
    router = require('./suspect.js')(router);
    router = require('./user.js')(router);
    app.use('/api', router);
};
