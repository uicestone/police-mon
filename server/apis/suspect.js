var Suspect = require('../models/suspect.js');

module.exports = function(router) {
    // Suspect CURD
    router.route('/suspect')

        // create a suspect
        .post(function(req, res) {
            
            var suspect = new Suspect(req.body);      // create a new instance of the Suspect model

            // save the suspect and check for errors
            suspect.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Suspect created!' });
            });
            
        })

        // get all the suspects
        .get(function(req, res) {
            var limit = +req.query.limit || 20;
            var skip = +req.query.skip || 0;

            var queryPromises = [];
            var query = Suspect.find().limit(limit).skip(skip);

            if(!Suspect.totalCount){
                queryPromises.push(Suspect.count().exec().then(value => Suspect.totalCount = value));
            }

            if(req.query.keyword) {
                query.find({$or: [
                    {name: new RegExp(req.query.keyword)},
                    {code: new RegExp(req.query.keyword)}
                ]});
            }

            ['code', 'name'].forEach(property => {
                if(req.query[property]) {
                    query.find({[property]: new RegExp(req.query[property])});
                }
            });

            ['percentage', 'pb', 'peTtm', 'peLyr', 'psr', 'marketCapital', 'floatMarketCapital'].forEach(property => {
                
                if(req.query[property]) {

                    var range = req.query[property].split(/[~_]/);

                    var condition = {[property]:{}};

                    if(range[0] && !isNaN(range[0])) {
                        condition[property].$gte = Number(range[0]);
                    }

                    if(range[1] && !isNaN(range[1])) {
                        condition[property].$lte = Number(range[1]);
                    }

                    query.find(condition);

                }

            })

            if(req.query.orderBy) {
                query.sort({
                    [req.query.orderBy]: (req.query.order === 'desc' || req.query.order === 'false' || Number(req.query.order) <= 0 ? 'desc' : 'asc')
                });
            }

            Promise.all(queryPromises)

            .then(() => {
                return query.exec();
            })

            .then(result => {

                if(skip + result.length > Suspect.totalCount) {
                    Suspect.totalCount = skip + result.length;
                }

                res.set('Items-Total', Suspect.totalCount)
                .set('Items-Start', skip + 1)
                .set('Items-End', Math.min(skip + limit, Suspect.totalCount))
                .json(result);
            });

        });

    // on routes that end in /suspect/:suspectId
    // ----------------------------------------------------
    router.route('/suspect/:suspectId')

        // get the suspect with that id
        .get(function(req, res) {
            Suspect.findById(req.params.suspectId, function(err, suspect) {
                if (err)
                    res.send(err);
                res.json(suspect);
            });
        })

        .put(function(req, res) {
            Suspect.where({_id: req.params.suspectId}).update(req.body, function(err, raw) {
                if (err) {
                    res.send(err);
                    
                    return;
                }

                Suspect.findById(req.params.suspectId, function(err, suspect) {
                    if (err)
                        res.send(err);
                    
                    res.json(suspect);
                });
            });
        })

        // delete the suspect with this id
        .delete(function(req, res) {
            Suspect.remove({
                _id: req.params.suspectId
            }, function(err, suspect) {
                if (err)
                    res.send(err);

                res.json({ message: 'Successfully deleted' });
            });
        });

    return router;
}
