require('dotenv').load()

module.exports = {
  identityPoolId: process.env.IDENTITY_POOL_ID,
  developerProviderName: process.env.DEVELOPER_PROVIDER_NAME,
  serviceAccountCredentialsPath: './credentials.json',
  databaseURL: `https://${process.env.DATABASE_NAME}.firebaseio.com`
}
