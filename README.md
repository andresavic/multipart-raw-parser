# Multipart Raw Parser
[![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![coverages][coverage-image]][coverage-url] [![downloads][downloads-image]][downloads-url]

[travis-image]: https://travis-ci.org/Wing-eu/multipart-raw-parser.svg?branch=master
[travis-url]: https://travis-ci.org/Wing-eu/multipart-raw-parser
[npm-image]: https://badge.fury.io/js/multipart-raw-parser.svg
[npm-url]: https://badge.fury.io/js/multipart-raw-parser
[downloads-image]: https://img.shields.io/npm/dm/multipart-raw-parser.svg
[downloads-url]: https://npmjs.org/package/multipart-raw-parser
[coverage-image]: https://coveralls.io/repos/github/Wing-eu/multipart-raw-parser/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/Wing-eu/multipart-raw-parser?branch=master


[The multipart raw parser](https://github.com/Wing-eu/multipart-raw-parser) is a helper function to parse a multipart/*whatever* Content-Type from any HttpRequest response.

It is tiny (2kB, including dependencies).

## Installation

Install the npm module:
``` bash
  $ npm install multipart-raw-parser --save
```

## Usage

The function takes the response `Content-Type` header and the response `body`.

A multipart/*whatever* response is composed for each content of a `boundary identifier`, `headers` and `contents`:

**NOTE**: The function will not process any form which do not contain a boundary identifier (`--id:...`).

Basic usage example:

``` javascript
import fetch from 'fetch'
import { parse } from 'multipart-raw-parser'

try {
  const response = await fetch('https://wh.at/raw')
  const multipartDataArray = parse(response, response.headers.get('Content-Type'))
  console.log(multipartDataArray)
  // [...{
  //    index: 1,
  //    headers: [{
  //      name: 'Content-Type',
  //      value: 'application/octet-stream'
  //    }, ...],
  //    value: 'sdbjkcndsjkvbdjs... '
  // }]
} catch (e) {
  throw (e)
}
```

## Development

To run demo locally on localhost:8080:

``` bash
npm install
npm run dev
```

Keep CI tests passing by running `npm run test` or `npm run test:watch` and `npm run lint` often.

## Contribute

We actively welcome pull requests.


## Change Log

This project adheres to [Semantic Versioning](http://semver.org/).  

## License

MIT
