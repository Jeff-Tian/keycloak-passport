const assert = require('assert')
const Strategy = require('../index')

describe('configuration', () => {
  it('allows omit authorizationURL in configuration', () => {
    const strategy = new Strategy({
      host: 'https://xxx.yyy.net',
      realm: 'YourRealm',
      clientID: 'Client-Local',
      clientSecret: 'xxx',
      callbackURL: `/api`,
    }, () => {
      console.log('verify callback with: ', arguments)
    })

    assert(strategy.options.authorizationURL === 'https://xxx.yyy.net/auth/realms/YourRealm/protocol/openid-connect/auth')
  })
})
