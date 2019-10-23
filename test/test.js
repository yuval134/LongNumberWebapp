const expect = require('chai').expect;
const operations = require('../long_number_oprations');


describe('Long number operations tests:', function () {
    describe('Sum operation tests:', function () {
        it('111 + 456 = 567', function () {
            expect(operations.sum([1, 1, 1], [4, 5, 6])).to.deep.equal([5, 6, 7]);
        });
        it('999 + 1 = 1000', function () {
            expect(operations.sum([9, 9, 9], [1])).to.deep.equal([1, 0, 0, 0]);
        });
        it('99 + 11 = 110', function () {
            expect(operations.sum([9, 9], [1, 1])).to.deep.equal([1, 1, 0,]);
        });
    });
    describe('Multiple operation tests:', function () {
        it('11 * 11 = 121', function () {
            expect(operations.multiple([1, 1], [1, 1])).to.deep.equal([1, 2, 1]);
        });
        it('999 * 999 = 998001', function () {
            expect(operations.multiple([9, 9, 9], [9, 9, 9])).to.deep.equal([9, 9, 8, 0, 0, 1]);
        });
        it('7421 * 394 = 2923874', function () {
            expect(operations.multiple([7, 4, 2, 1], [3, 9, 4])).to.deep.equal([2, 9, 2, 3, 8, 7, 4]);
        });
    });


});


