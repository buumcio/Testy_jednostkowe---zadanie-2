const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('The Flying Hill', () => {
        const hillSize = 225;
        const kPoint = 200;
        const distanceExkPoint = 200;
        const distanceMtkPoint = 225;
        const distanceLtkPoint = 195;

        it('should return 120p - distance exactly kPoint', () => {
            const actual = calculateDistancePoints(distanceExkPoint, hillSize, kPoint);
            const expected = 120;
            assert.equal(actual, expected);
        });

        it('should return 150p - distance more than kPoint', () => {
            const actual = calculateDistancePoints(distanceMtkPoint, hillSize, kPoint);
            const expected = 150;
            assert.equal(actual, expected);
        });

        it('should return 114 - distance less than kPoint', () => {
            const actual = calculateDistancePoints(distanceLtkPoint, hillSize, kPoint);
            const expected = 114;
            assert.equal(actual, expected);
        });
    });

    describe('The Large Hill', () => {

        const hillSize = 134;
        const kPoint = 120;
        const distanceExkPoint = 120;
        const distanceMtkPoint = 134;
        const distanceLtkPoint = 119;

        it('should return 60 - distance exactly kPoint', () => {
            const actual = calculateDistancePoints(distanceExkPoint, hillSize, kPoint);
            const expected = 60;
            assert.equal(actual, expected);
        });

        it('should return 85.2 - distance more than kPoint', () => {
            const actual = calculateDistancePoints(distanceMtkPoint, hillSize, kPoint);
            const expected = 85.2;
            assert.equal(actual, expected);
        });

        it('should return 58.2 - distance less than kPoint', () => {
            const actual = calculateDistancePoints(distanceLtkPoint, hillSize, kPoint);
            const expected = 58.2;
            assert.equal(actual, expected);
        });
    });

    describe('The Normal Hill', () => {

        const hillSize = 109;
        const kPoint = 98;
        const distanceExkPoint = 98;
        const distanceMtkPoint = 111;
        const distanceLtkPoint = 80;

        it('should return 60 - distance exactly kPoint', () => {
            const actual = calculateDistancePoints(distanceExkPoint, hillSize, kPoint);
            const expected = 60;
            assert.equal(actual, expected);
        });

        it('should return 86 - distance more than kPoint', () => {
            const actual = calculateDistancePoints(distanceMtkPoint, hillSize, kPoint);
            const expected = 86;
            assert.equal(actual, expected);
        });

        it('should return 24 - distance less than kPoint', () => {
            const actual = calculateDistancePoints(distanceLtkPoint, hillSize, kPoint);
            const expected = 24;
            assert.equal(actual, expected);
        });
    });


});