require('dotenv').load()

module.exports = {
  identityPoolId: process.env.IDENTITY_POOL_ID || 'cognito Identity pool ID like us-east-1:12345678-1234-1234-1234-123456789012 found on https://console.aws.amazon.com/cognito',
  developerProviderName: process.env.DEVELOPER_PROVIDER_NAME || 'Developer provider name like mylogin that you chose as a Custom Authentication provider for your cognito identity pool',
  serviceAccountCredentialsPath: './credentials.json',
  databaseURL: `https://${process.env.DATABASE_NAME}.firebaseio.com`
}
