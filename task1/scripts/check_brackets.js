'use strict';

const brackets = {
    '(': {id: 0, type: 'open'},
    ')': {id: 0, type: 'close'},
    '[': {id: 1, type: 'open'},
    ']': {id: 1, type: 'close'},
    '<': {id: 2, type: 'open'},
    '>': {id: 2, type: 'close'}
};

module.exports.checkBrackets = function(analyzedString) {
    let stack = [];
    let currentBracket;
    for (let i = 0; i < analyzedString.length; i++) {
        if (brackets.hasOwnProperty(currentBracket = analyzedString.charAt(i))) {
            if (brackets[currentBracket].type === 'open') {
                stack.push(brackets[currentBracket].id);
            }
            else if (stack.length === 0 || stack.pop() !== brackets[currentBracket].id) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
