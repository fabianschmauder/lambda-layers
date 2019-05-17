'use strict';

const {determineSomeStuff} = require("./service");
module.exports.hello = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify(determineSomeStuff()),
    };
};
