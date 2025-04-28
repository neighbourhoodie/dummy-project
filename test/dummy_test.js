'use script'

const assert = require('assert')

describe('project', () => {
  it('does maths', () => {
    assert.equal(2 + 2, 4)
  })
})

describe('main', () => {
  it('is ok', () => {})

  it('runs a slow test', async () => {
    await sleep (5 * 60)
  })
})

function sleep (sec) {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000))
}
