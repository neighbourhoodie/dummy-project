'use script'

const assert = require('assert')

describe('project', () => {
  it('does maths', () => {
    assert.equal(2 + 2, 4)
  })

  it('does advanced maths', () => {
    assert.equal(3 - 2, 1)
  })

  it('does economics', () => {
    assert.equal(3 * 1.5, 4.5)
  })
})
