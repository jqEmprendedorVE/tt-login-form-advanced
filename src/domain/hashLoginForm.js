import jsSHA from 'jssha';
import browserDetect from 'browser-detect'

export const getUserIdSHA1 = (mail) => {
  let shaObj = new jsSHA("SHA-1", "TEXT");
  shaObj.update(mail);
  return shaObj.getHash("B64")
    .replace('+', '-')
    .replace('/', '_')
    .replace('=', '');
}

export const getPasswdHEX = (passwd) => {
  let shaObj = new jsSHA("SHA-256", "TEXT");
  shaObj.update(passwd);
  return shaObj.getHash("HEX");
}

export const tryLogin = () => {
  const info = browserDetect();
  const description = `${info.name}\\${info.version} on ${info.os}`;
  const userId = getUserIdSHA1('hello@example.com');
  const passwd = getPasswdHEX('lalala');    
  const headers = new Headers({ 'Content-Type': 'application/json' });
  const body =  JSON.stringify({
    "passwd": passwd,
    "persistence": 0,
    "description": description
  });

  fetch(`https://master.sgi.dev.automacity.com/api/users/${userId}/sessions`, {
    method: 'POST',
    headers,
    body,
    credentials: 'include'
  }).then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
}

export default {
  getUserIdSHA1,
  getPasswdHEX,
  tryLogin
}