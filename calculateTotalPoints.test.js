const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {

    
    it('should return 180.8 p', () => {
        
        const distance = 211.5;
        const hillSize = 225;
        const kPoint = 200;
        const styleNotes = [17.5, 17.5, 17.0, 17.5, 17.5];
        const windFactor = -5.5;
        const gateFactor = 0;

        const actual = calculateTotalPoints(distance, hillSize, kPoint, styleNotes, windFactor, gateFactor).toFixed(1);
        const expected = 180.8;

        assert.equal(actual, expected);
    });

    it('should return 105.2 p', () => {
        
        const distance = 117.5;
        const hillSize = 134;
        const kPoint = 120;
        const styleNotes = [17.5, 16.5, 17.0, 17.0, 17.0];
        const windFactor = -1.3;
        const gateFactor = 0;

        const actual = calculateTotalPoints(distance, hillSize, kPoint, styleNotes, windFactor, gateFactor).toFixed(1);
        const expected = 105.2;

        assert.equal(actual, expected);
    });

    it('should return 120.3 p', () => {
        
        const distance = 103.5;
        const hillSize = 109;
        const kPoint = 98;
        const styleNotes = [18.5, 18.5, 19.0, 18.5, 18.5];
        const windFactor = -9.4;
        const gateFactor = 3.2;

        const actual = calculateTotalPoints(distance, hillSize, kPoint, styleNotes, windFactor, gateFactor).toFixed(1);
        const expected = 120.3;

        assert.equal(actual, expected);
    });
});