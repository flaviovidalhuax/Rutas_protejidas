const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const passport = require('passport')
const jwtSecret= require('../../config').api.jwtSecret
const {findUserById} = require('../users/users.controllers')

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey:jwtSecret
}
passport.use(
    new JwtStrategy(options, async(tokenDecoded, done)=> {
        try {
            const users= findUserById(tokenDecoded.id)
            if (users) {
                return done(null, tokenDecoded)
            } else {
                return done(null, false)
            }
        } catch (error) {
            return done(error, false)
        }
    })
)
module.exports= passport