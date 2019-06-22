import jsSHA from 'jssha'

/**
 * Funcion que recibe como paramentro el mail y retorna
 * el mail equivalente a `base64_encode(sha1('text', raw: true))`
 * @param  {string} mail
 */
export const getUserIdSHA1 = (mail) => {
  let shaObj = new jsSHA("SHA-1", "TEXT")
  shaObj.update(mail)
  return shaObj.getHash("B64")
    .replace('+', '-')
    .replace('/', '_')
    .replace('=', '')
}

/**
 * Funcion que recibe como paramentro el pass y retorna
 * el pass equivalente en HEX
 * @param  {string} passwd
 */
export const getPasswdHEX = (passwd) => {
  let shaObj = new jsSHA("SHA-256", "TEXT")
  shaObj.update(passwd)
  return shaObj.getHash("HEX")
}

export default {
  getUserIdSHA1,
  getPasswdHEX
}