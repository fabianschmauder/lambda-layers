const {determineSomeStuff} = require('./../app/service');

test('the answer to life the universe and everything should be 42', () => {
    expect(determineSomeStuff()).toEqual({
        "answer": 42,
        "backToTheFuture": 294,
    });
});
