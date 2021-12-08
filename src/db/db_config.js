const harperive = require('harperive').Client

const dbUrl = process.env['DB_URL']
const dbUser = process.env['DB_USER']
const dbPass = process.env['DB_PASS']
const dbSchema = process.env['DB_SCHEMA']

const DB_CONFIG = {
    harperHost: dbUrl,
    username: dbUser,
    password: dbPass,
    schema: dbSchema
}

const client = new harperive(DB_CONFIG)

module.exports = client