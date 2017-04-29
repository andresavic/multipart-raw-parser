/**
* @flow
*/

/**
 * Convert a string
 * @param  {string}  body Response string
 * @return {string}
 */
const convertToRaw = (body: string): string => String.fromCharCode.apply(null, new Uint8Array(body))

/**
 * Convert a string to typed array buffer
 * @param  {string}  str A string
 * @return {ArrayBuffer}
 */
const rawStringToBuffer = (str: string): ArrayBuffer => {
  const arr = Array.from(str)
  const result = arr.map((element) => element.charCodeAt(0) & 0xFF)
  return new Uint8Array(result).buffer
}

export {
  convertToRaw,
  rawStringToBuffer,
}
