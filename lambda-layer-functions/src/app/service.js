const moment = require('moment');
const {theAnswerToLifeTheUniverseAndEverything} = require('business-code');

const determineSomeStuff = () => ({
    backToTheFuture: moment("2015-10-21").dayOfYear(),
    answer: theAnswerToLifeTheUniverseAndEverything()
});


module.exports = {
    determineSomeStuff
};