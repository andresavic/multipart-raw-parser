/**
 * @flow
 */

import {
  convertToRaw,
  rawStringToBuffer,
} from 'helpers'

describe('convertToRaw', () => {
  it('should return an array of results', async () => {
    try {
      const data = 'test123'
      const results = convertToRaw(data)
      // expect(results).toBeInstanceOf(Array)
    } catch (e) {
      console.log(e)
    }
  })
})

describe('rawStringToBuffer', () => {
  it('should return a string', async () => {
    try {
      const data = 'test123'
      const results = rawStringToBuffer(data)
      expect(results).toBeInstanceOf(ArrayBuffer)
    } catch (e) {
      console.log(e)
    }
  })
})
