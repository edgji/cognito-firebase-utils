var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var log4js = require('log4js')
var logger = log4js.getLogger('server')
var middleware = require('./utils/middleware')(require('./config'))

var app = express()

app.set('port', process.env.PORT || 3000)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// function ensureAuthenticated (req, res, next) {
//   if (!req.headers.authorization) {
//     return res.status(401).send(
//       {message: 'Please make sure your request has an Authorization header'})
//   }
//   var token = req.headers.authorization.split(' ')[1]
//   auth.verifyFirebaseToken(token, function (err, decodedToken) {
//     if (err) {
//       return res.status(401).send(err)
//     }
//
//     req.userId = decodedToken.uid
//     next()
//   })
// }

app.post('/token', middleware)

app.listen(app.get('port'), function () {
  logger.info('express server listening on port ' + app.get('port'))
})
