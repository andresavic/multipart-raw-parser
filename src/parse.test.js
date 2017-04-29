/**
 * @flow
 */

import fs from 'fs-promise'

import {
  parse,
} from 'parse'

describe('parse', () => {
  it('should return an array of results', async () => {
    try {
      const contentType = await fs.readFile('ressources/header', 'utf-8')
      const data = await fs.readFile('ressources/response', 'utf-8')
      const results = parse(data, contentType)
      expect(results).toBeInstanceOf(Array)
    } catch (e) {
      console.log(e)
    }
  })
})
