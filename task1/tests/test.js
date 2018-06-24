const assert = require('assert');
const verify = require('../scripts/check_brackets');

describe('checkBrackets', function () {
    it('should return true when the input string is correct', function () {
        assert.equal(verify.checkBrackets('----(+++)----'), true);
    });
    it('should return true when the input string is empty', function () {
        assert.equal(verify.checkBrackets(''), true);
    });
    it('should return true when the input string contain correct brackets with words', function () {
        assert.equal(verify.checkBrackets('before ( middle []) after'), true);
    });
    it('should return false when the input brackets is incorrect (one type of brackets)', function () {
        assert.equal(verify.checkBrackets(')('), false);
    });
    it('should return true when the input brackets is incorrect (another type of brackets)', function () {
        assert.equal(verify.checkBrackets('}{'), true);
    });
    it('should return false when the input brackets is incorrect (two types of brackets)', function () {
        assert.equal(verify.checkBrackets('<( >)'), false);
    });
    it('should return true when the input string is correct (all types of brackets)', function () {
        assert.equal(verify.checkBrackets('( [ <> () ] <> )'), true);
    });
    it('should return true when the input string is incorrect', function () {
        assert.equal(verify.checkBrackets(' (  [)'), false);
    });
});