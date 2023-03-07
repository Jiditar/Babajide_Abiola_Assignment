const assert = require('assert');

// Example 1: assert that a value is truthy
assert(true); // no error thrown
assert(1); // no error thrown
assert('hello'); // no error thrown
assert(0, '0 is falsy'); // AssertionError: 0 is falsy

// Example 2: assert that two values are equal
assert.equal(1 + 2, 3); // no error thrown
assert.equal('hello', 'world'); // AssertionError: 'hello' == 'world'

// Example 3: assert that two values are deeply equal
assert.deepEqual({a: 1, b: 2}, {a: 1, b: 2}); // no error thrown
assert.deepEqual({a: 1, b: {c: 3}}, {a: 1, b: {c: 4}}); // AssertionError: { a: 1, b: { c: 3 } } deepEqual { a: 1, b: { c: 4 } }

// Example 4: assert that a value is not equal to another value
assert.notEqual(1 + 2, 4); // no error thrown
assert.notEqual('hello', 'hello'); // AssertionError: 'hello' != 'hello'

// Example 5: assert that a value is not deeply equal to another value
assert.notDeepEqual({a: 1, b: 2}, {a: 1, b: 3}); // no error thrown
assert.notDeepEqual({a: 1, b: {c: 3}}, {a: 1, b: {c: 3}}); // AssertionError: { a: 1, b: { c: 3 } } notDeepEqual { a: 1, b: { c: 3 } }

// Example 6: assert that a value is of a certain type
assert.strictEqual(typeof 'hello', 'string'); // no error thrown
assert.strictEqual(typeof 42, 'string'); // AssertionError: 'number' === 'string'