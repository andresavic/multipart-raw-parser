/**
 * @flow
 */

import fs from 'fs-promise'

import {
  parseBoundary,
  parseHeader,
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

describe('parseBoundary', () => {
  it('should return a string', async () => {
    try {
      const contentType = await fs.readFile('ressources/header', 'utf-8')
      const results = parseBoundary(contentType)
      expect(typeof results).toBe('string')
    } catch (e) {
      console.log(e)
    }
  })

  it('should throw an exception', async () => {
    try {
      const contentType = 'abcdefghifklmnopqrstuvwyz'
      const results = parseBoundary(contentType)
      expect(results).toThrow(new Error('Bad content-type header, no multipart boundary'))
    } catch (e) {
      console.log(e)
    }
  })
})

describe('parseHeader', () => {
  it('should return an array of results', async () => {
    try {
      const headers = [
        'Content-Type: application/octet-stream',
        'Content-Transfer-Encoding: binary',
        'Content-ID: <cc4451c7-9084-401b-b20d-c40331c4c43d-47984@cxf.apache.org>'
      ]
      const results = parseHeader(headers)
      expect(results).toBeInstanceOf(Array)
    } catch (e) {
      console.log(e)
    }
  })
})
