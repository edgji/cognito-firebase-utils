var firebase = require('firebase')
var AWS = require('aws-sdk')
var config = require('./config')

module.exports = (function () {
  firebase.initializeApp({
    serviceAccount: config.serviceAccountCredentialsPath,
    databaseURL: config.databaseURL
  })

  var cognitoIdentity = new AWS.CognitoIdentity()

  function verifyFirebaseToken (idToken, fn) {
    firebase.auth().verifyIdToken(idToken).then(function (decodedToken) {
      fn(null, decodedToken)
    }).catch(function (err) {
      fn(err)
    })
  }

  function getToken (uid, fn) {
    var param = {
      IdentityPoolId: config.identityPoolId,
      Logins: {} // To have provider name in a variable
    }
    param.Logins[ config.developerProviderName ] = uid
    cognitoIdentity.getOpenIdTokenForDeveloperIdentity(param, function (err, data) {
      if (err) return fn(err)
      else fn(null, data)
    })
  }

  return {
    verifyFirebaseToken: verifyFirebaseToken,
    getToken: getToken
  }
}())
