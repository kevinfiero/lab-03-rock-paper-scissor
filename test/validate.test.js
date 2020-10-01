
import { checkResults, generateOpponentThrow } from '../utils.js';

const test = QUnit.test;

test('test checkResults for valid type', (expect) => {
    
    const expected = 'string';
    const actual = typeof(checkResults('Rock', 'Scissors'));
    expect.equal(actual, expected);
});

test('test generateOpponentThrow for valid possible values', (expect) => {
    const actual = generateOpponentThrow();
    const possibleValues = ['Rock', 'Paper', 'Scissor'];
    expect.equal(possibleValues.includes(actual), true);
});
