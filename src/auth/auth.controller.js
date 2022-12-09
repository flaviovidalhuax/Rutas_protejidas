const JwtStrategy =require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const passport = require('passport')
const jwtSecret = require('../../config').api.jwtSecret
const {findUserById}= require('../users/users.controllers')

const option = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: jwtSecret
}

passport.use(
    new JwtStrategy(option, async(tokenDecoded, done)=> {
        try {
            const user= await findUserById(tokenDecoded.id)
            if (!user) {
                return done(null,false)
            }
            return done(null, false)
            
        } catch (error) {
            return done(error, false)
        }
    })
)
module.exports= passport



















// const {getUserByEmail}= require('../users/users.controllers')
// const {comparePassword} = require('../utils/crypto')

// const checkUserCredentials = async(email, password) => {
//     try {
//         const user = await getUserByEmail(email)
//         const verifyPassword = comparePassword(password, user.password)
//         if (verifyPassword) {
//             return user
//         }
//         return null
//     } catch (error) {
//         return null
//     }
   
// }
// module.exports= checkUserCredentials