
var  should = require('should');
var assert = require('assert');
var prime = require('../prime');
//var asyncPrime = require('../index').asyncPrime;

describe('nextPrime', function() {
    test('nextPrime should return the next prime number', function() {
        var newNextPrime = new prime.nextPrime();
        assert.equal(11, newNextPrime.primeFunction(7));
    });

    test('zero and one are not prime numbers', function() {
        var newNextPrime = new prime.nextPrime();
        assert.equal(2, newNextPrime.primeFunction(0));
        assert.equal(2, newNextPrime.primeFunction(1));
    });
});

