/**
 * @param config
 * @returns {cognitoToken}
 */
module.exports = function(config) {
  var auth = require('./auth')(config)
  return function cognitoToken (req, res) {
    auth.verifyFirebaseToken(req.body.idToken, function (err, decodedToken) {
      if (err) {
        return res.status(401).send(err)
      }

      auth.getToken(decodedToken.uid, function (err, data) {
        if (err) {
          return res.status(401).send(err)
        }

        res.send(data)
      })
    })
  }
}
