import browserDetect from 'browser-detect'
import {getUserIdSHA1, getPasswdHEX} from '../domain/hashLoginForm'

class apiClient {
  constructor() {
    this.url = 'https://master.sgi.dev.automacity.com/api/'
  }

  async login (_user, _pass) {    
    const url = this.url
    const info = browserDetect()
    const userId = getUserIdSHA1(_user)
    const passwd = getPasswdHEX(_pass)
    const urlSession = `${url}users/${userId}/sessions`
    const description = `${info.name}\\${info.version} on ${info.os}`
    const headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' })
    const body =  JSON.stringify({
      "passwd": passwd,
      "persistence": 0,
      "description": description
    })

    const response = await fetch(urlSession, {
      method: 'POST',
      headers,
      body,
      credentials: 'same-origin'
    });
    return response.json();
  }

}

export default new apiClient()