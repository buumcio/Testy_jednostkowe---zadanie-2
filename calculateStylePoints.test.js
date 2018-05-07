const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {

        it('should return -1 - not an array', () => {
            const actual = calculateStylePoints(19.0, 19.5, 19.0, 19.0, 19.0);
            const expected = -1;
            assert.equal(actual, expected);
        });

        it('should return 48p - judges points: 16.0, 16.5, 16.0, 16.0, 16.0', () => {
            const actual = calculateStylePoints([16.0, 16.5, 16.0, 16.0, 16.0]);
            const expected = 48;
            assert.equal(actual, expected);
        });

        it('should return 51p - judges points: 17.0, 17.0, 17.0, 17.0, 17.0', () => {
            const actual = calculateStylePoints([17.0, 17.0, 17.0, 17.0, 17.0]);
            const expected = 51;
            assert.equal(actual, expected);
        });

        it('should return 56p - judges points: 17.0, 18.0, 20.0, 19.5, 18.5', () => {
            const actual = calculateStylePoints([17.0, 18.0, 20.0, 19.5, 18.5]);
            const expected = 56;
            assert.equal(actual, expected);
        });

        it('should return 53.5p - judges points: 17.0, 17.0, 19.5, 18.0, 18.5', () => {
            const actual = calculateStylePoints([17.0, 17.0, 19.5, 18.0, 18.5]);
            const expected = 53.5;
            assert.equal(actual, expected);
        });
    });