//passport tiene diferentes estrategias para manejar logins (bearer, jwt, fackebook,google)
const JwtStrategy = require('passport-jwt').Strategy
// Extrae el token de los headers de mi peticions
const ExtractJwt = require('passport-jwt').ExtractJwt
const passport = require('passport')
const jwtSecret = require('../../config').api.jwtSecret
const { findUserById } = require('../users/users.controllers')// ../users/users.controllers'


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'), // si el token inicia JWT, toma el token 
    secretOrKey: jwtSecret
}
passport.use(
    new JwtStrategy(options, async (tokenDecoded, done) => {
        //? done(error, tokenDecoded)

        try {
            const user = await findUserById(tokenDecoded.id)
            if (!user) {
                return done(null, false) //no exixte un error pero tampoco existe el usuario
            }
            return done(null, tokenDecoded) //no existe un error pero si un suario
        } catch (error) {
            return done(error, false) // si existe un error, pero no un usuario
        }
    })
)
module.exports = passport
