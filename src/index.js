/**
* @flow
*/

const rawStringToBuffer = (str: string): ArrayBuffer => {
  let idx
  const len = str.length
  const arr = new Array(len)
  for (idx = 0; idx < len; ++idx) {
    arr[idx] = str.charCodeAt(idx) & 0xFF
  }
  return new Uint8Array(arr).buffer
}

const parse = (body: string, contentType: string): Object => {
}
console.log('Enjoy! 🍻')
export {
  parse,
}
