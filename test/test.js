const assert = require('assert');

describe('Array', () => {
  it('should return -1 when the value is not present', () => {
    assert.equal(false, [1, 2, 3].includes(4));
  });
});
