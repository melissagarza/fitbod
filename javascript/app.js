var Fitbod = require('./fitbod');

var parseDate = d3.timeParse('%Y-%m-%d');

d3.csv('../data/fitbod_workout.csv')
    .row(function(d) {
        return {
            date: parseDate(d.Date),
            exercise: d.Exercise,
            sets: d.Sets,
            reps: d.Reps,
            weight: d.Weight,
            isWarmup: d.isWarmup
        };
    })
    .get(function(error, data) {
        // console.log(data);
        var fitbod = new Fitbod(data);
    });
