import browserDetect from 'browser-detect'
import {getUserIdSHA1, getPasswdHEX} from '../domain/hashLoginForm';

class apiClient {
  constructor() {
    this.url = 'https://master.sgi.dev.automacity.com/api/'
  }

  async login (_user, _pass) {
    const url = this.url;
    const info = browserDetect();
    const description = `${info.name}\\${info.version} on ${info.os}`;
    const userId = getUserIdSHA1(_user);
    const passwd = getPasswdHEX(_pass);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const body =  JSON.stringify({
      "passwd": passwd,
      "persistence": 0,
      "description": description
    });

    return await fetch(`${url}users/${userId}/sessions`, {
      method: 'POST',
      headers,
      body,
      credentials: 'include'
    }).then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      return myJson;
    });
  }

}

export default new apiClient();