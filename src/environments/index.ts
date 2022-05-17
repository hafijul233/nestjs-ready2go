import * as dotenv from 'dotenv'
dotenv.config()

// environment
const NODE_ENV: string = process.env.NODE_ENV || 'development'

// author
const AUTHOR: string = process.env.AUTHOR || 'Chnirt'

// application
const DOMAIN: string = process.env.DOMAIN || 'localhost'
const PORT: number = +process.env.PORT || 14047
const END_POINT: string = process.env.END_POINT || 'graphql'
const VOYAGER: string = process.env.VOYAGER || 'voyager'
const FE_URL: string = process.env.FE_URL || 'xxx'
const RATE_LIMIT_MAX: number = +process.env.RATE_LIMIT_MAX || 10000
const GRAPHQL_DEPTH_LIMIT: number = +process.env.GRAPHQL_DEPTH_LIMIT || 3

// static
const STATIC: string = process.env.STATIC || 'static'

// ssl
const SSL: string = process.env.SSL || '.well-known/acme-challenge'

// mlab
const MLAB_USER = process.env.MLAB_USER || 'admin'
const MLAB_PASS = process.env.MLAB_PASS || 'chnirt1803'
const MLAB_HOST = process.env.MLAB_HOST || 'ds243055.mlab.com'
const MLAB_PORT = +process.env.MLAB_PORT || 43055
const MLAB_DATABASE =
	process.env.MLAB_DATABASE || 'nestjs-restful-best-practice'
const MLAB_URL =
	process.env.MLAB_URL ||
	`mongodb://${MLAB_USER}:${MLAB_PASS}@${MLAB_HOST}:${MLAB_PORT}/${MLAB_DATABASE}`

// mongodb
const MONGO_URL: string = process.env.MONGO_PORT
	? `mongodb://localhost:${process.env.MONGO_PORT}`
	: MLAB_URL
const MONGO_PORT: number = +process.env.MONGO_PORT || 11049
const MONGO_DB: string = process.env.MONGO_PORT ? 'chnirt-nest' : MLAB_DATABASE

// jsonwebtoken
const ISSUER: string = process.env.ISSUER || 'http://chnirt.github.io'
const ACCESS_TOKEN: string = process.env.ACCESS_TOKEN || 'access-token'
const ACCESS_TOKEN_SECRET: string = process.env.ACCESS_TOKEN_SECRET || 'basic'
const REFRESH_TOKEN: string = process.env.REFRESH_TOKEN || 'refresh-token'
const REFRESH_TOKEN_SECRET: string =
	process.env.REFRESH_TOKEN_SECRET || 'refresh-token-key'
const EMAIL_TOKEN: string = process.env.EMAIL_TOKEN || 'email-token'
const EMAIL_TOKEN_SECRET: string =
	process.env.EMAIL_TOKEN_SECRET || 'email-token-key'
const RESETPASS_TOKEN: string = process.env.RESETPASS_TOKEN || 'resetpass-token'
const RESETPASS_TOKEN_SECRET: string =
	process.env.RESETPASS_TOKEN_SECRET || 'resetpass-token-key'

// bcrypt
const SALT: number = +process.env.SALT || 10

// nodemailer
const MAIL_USER: string = process.env.MAIL_USER || 'xxx'
const MAIL_PASS: string = process.env.MAIL_PASS || 'xxx'

// cloudinary
const CLOUD_NAME: string = process.env.CLOUD_NAME || 'xxx'
const API_KEY: string = process.env.API_KEY || 'xxx'
const API_SECRET: string = process.env.API_SECRET || 'xxx'

// speakeasy
const SPEAKEASY_SECRET = process.env.SPEAKEASY_SECRET || 'speakeasy-secret'
const SPEAKEASY_DIGITS = +process.env.SPEAKEASY_DIGITS || 6
const SPEAKEASY_STEP = +process.env.SPEAKEASY_STEP || 60

// pubsub
const NOTIFICATION_SUBSCRIPTION: string = 'newNotification'
const USER_SUBSCRIPTION: string = 'newUser'
const MESSAGES_SUBSCRIPTION: string = 'newMessages'

// passport
const GOOGLE_CLIENT_ID: string = process.env.GOOGLE_CLIENT_ID || 'xxx'
const GOOGLE_CLIENT_SECRET: string = process.env.GOOGLE_CLIENT_SECRET || 'xxx'
const GOOGLE_CALLBACK_URL: string =
	process.env.GOOGLE_CALLBACK_URL || 'auth/google/callback'

const FACEBOOK_APP_ID: string = process.env.FACEBOOK_APP_ID || 'xxx'
const FACEBOOK_APP_SECRET: string = process.env.FACEBOOK_APP_SECRET || 'xxx'
const FACEBOOK_CALLBACK_URL: string =
	process.env.FACEBOOK_CALLBACK_URL || 'auth/facebook/callback'

// google cloud
const GOOGLE_APPLICATION_CREDENTIALS: string =
	process.env.GOOGLE_APPLICATION_CREDENTIALS || 'xxx'

// stripe
const STRIPE_PUBLIC_KEY: string = process.env.STRIPE_PUBLIC_KEY || 'xxx'
const STRIPE_SECRET_KEY: string = process.env.STRIPE_SECRET_KEY || 'xxx'
const STRIPE_PLAN: string = process.env.STRIPE_PLAN || 'xxx'

// twilio
const TWILIO_ACCOUNT_SID: string = process.env.TWILIO_ACCOUNT_SID || 'xxx'
const TWILIO_AUTH_TOKEN: string = process.env.TWILIO_AUTH_TOKEN || 'xxx'

export {
	NODE_ENV,
	AUTHOR,
	DOMAIN,
	PORT,
	END_POINT,
	VOYAGER,
	FE_URL,
	RATE_LIMIT_MAX,
	GRAPHQL_DEPTH_LIMIT,
	STATIC,
	SSL,
	MLAB_USER,
	MLAB_PASS,
	MLAB_HOST,
	MLAB_PORT,
	MLAB_DATABASE,
	MLAB_URL,
	MONGO_URL,
	MONGO_PORT,
	MONGO_DB,
	ISSUER,
	ACCESS_TOKEN,
	ACCESS_TOKEN_SECRET,
	REFRESH_TOKEN,
	REFRESH_TOKEN_SECRET,
	RESETPASS_TOKEN,
	RESETPASS_TOKEN_SECRET,
	EMAIL_TOKEN,
	EMAIL_TOKEN_SECRET,
	SALT,
	MAIL_USER,
	MAIL_PASS,
	CLOUD_NAME,
	API_KEY,
	API_SECRET,
	SPEAKEASY_SECRET,
	SPEAKEASY_DIGITS,
	SPEAKEASY_STEP,
	USER_SUBSCRIPTION,
	NOTIFICATION_SUBSCRIPTION,
	MESSAGES_SUBSCRIPTION,
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	GOOGLE_CALLBACK_URL,
	FACEBOOK_APP_ID,
	FACEBOOK_APP_SECRET,
	FACEBOOK_CALLBACK_URL,
	GOOGLE_APPLICATION_CREDENTIALS,
	STRIPE_PUBLIC_KEY,
	STRIPE_SECRET_KEY,
	STRIPE_PLAN,
	TWILIO_ACCOUNT_SID,
	TWILIO_AUTH_TOKEN
}
