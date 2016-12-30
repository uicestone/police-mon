var Station = require('../models/station.js');

module.exports = function(router) {
    // Station CURD
    router.route('/station')

        // create an station
        .post(function(req, res) {
            
            var station = new Station(req.body); // create a new instance of the Station model

            // save the station and check for errors
            station.save(function(err) {
                if (err)
                    res.send(err);

                res.json(station);
            });
            
        })

        // get all the stations
        .get(function(req, res) {
            if(!Station.totalCount){
                Station.count().exec().then(value => Station.totalCount = value);
            }

            var limit = +req.query.limit || 20;
            var skip = +req.query.skip || 0;

            var query = {};

            if(req.query.keyword) {
                query.name = new RegExp(req.query.keyword);
            }

            if(req.query.type) {
                query.type = req.query.type;
            }

            Station.find(query)
            .limit(limit)
            .skip(skip)
            .exec()
            .then(result => {

                if(skip + result.length > Station.totalCount) {
                    Station.totalCount = skip + result.length;
                }

                res.set('Items-Total', Station.totalCount)
                .set('Items-Start', skip + 1)
                .set('Items-End', Math.min(skip + limit, Station.totalCount))
                .json(result);
            });
        });

    // on routes that end in /station/:stationId
    // ----------------------------------------------------
    router.route('/station/:stationId')

        // get the station with that id
        .get(function(req, res) {
            Station.findById(req.params.stationId, function(err, station) {
                if (err)
                    res.send(err);
                res.json(station);
            });
        })

        .put(function(req, res) {
            Station.where({_id: req.params.stationId}).update(req.body, function(err, raw) {
                if (err) {
                    res.send(err);
                    return;
                }

                Station.findById(req.params.stationId, function(err, station) {
                    if (err)
                        res.send(err);

                    res.json(station);
                });
            });
        })

        // delete the station with this id
        .delete(function(req, res) {
            Station.remove({
                _id: req.params.stationId
            }, function(err, station) {
                if (err)
                    res.send(err);

                res.end();
            });
        });

    return router;
}
