var User = require('../models/user.js');

module.exports = function(router) {
    // User CURD
    router.route('/user')

        // create a user
        .post(function(req, res) {
            
            var user = new User(req.body);      // create a new instance of the User model

            // save the user and check for errors
            user.save(function(err) {
                if (err)
                    res.send(err);

                res.json(user);
            });
            
        })

        // get all the users
        .get(function(req, res) {
            if(!User.totalCount){
                User.count().exec().then(value => User.totalCount = value);
            }

            var limit = +req.query.limit || 20;
            var skip = +req.query.skip || 0;

            var query = {};

            if(req.query.keyword) {
                query = {
                    name: new RegExp(req.query.keyword)
                };
            }

            User.find(query)
            .limit(limit)
            .skip(skip)
            .exec()
            .then(result => {

                console.log(result)

                if(skip + result.length > User.totalCount) {
                    User.totalCount = skip + result.length;
                }

                res.set('Items-Total', User.totalCount)
                .set('Items-Start', skip + 1)
                .set('Items-End', Math.min(skip + limit, User.totalCount))
                .json(result);
            });
        });

    // on routes that end in /user/:userId
    // ----------------------------------------------------
    router.route('/user/:userId')

        // get the user with that id
        .get(function(req, res) {
            User.findById(req.params.userId, function(err, user) {
                if (err)
                    res.send(err);
                res.json(user);
            });
        })

        .put(function(req, res) {
            User.where({_id: req.params.userId}).update(req.body, function(err, raw) {
                if (err) {
                    res.send(err);
                    return;
                }

                User.findById(req.params.userId, function(err, user) {
                    if (err)
                        res.send(err);
                    
                    res.json(user);
                });
            });
        })

        // delete the user with this id
        .delete(function(req, res) {
            User.remove({
                _id: req.params.userId
            }, function(err, user) {
                if (err)
                    res.send(err);

                res.end();
            });
        });

    return router;
}
