//? email
//? password7
const { getUserByEmail } = require('../users/users.controllers')// users/users.controllers
const { comparePassword } = require('../utils/crypto')//../utils/crypto

//? Esta funcion va a validar si los datos pertenecen o no a un usuario
const checkUserCredential = async(email, password) => {

    try {
        const user = await getUserByEmail(email)
        const veryfyPassword = comparePassword(password, user.password) //(pasword_plano, password_encriptado)
        if(veryfyPassword){
            return user
        }
        return null
    } catch (error) {
        return null
    }
    
}
// validar la credencial de un usuario
// checkUserCredential('flavio@gmail.com','1234')
//     .then((data)=> console.log(data))
//     .catch((err)=> console.log(err))

module.exports= checkUserCredential



























// const JwtStrategy =require('passport-jwt').Strategy
// const ExtractJwt = require('passport-jwt').ExtractJwt //same
// const passport = require('passport')
// const jwtSecret = require('../../config').api.jwtSecret
// const {findUserById}= require('../users/users.controllers')

// const option = {
//     jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
//     secretOrKey: jwtSecret
// }

// passport.use(
//     new JwtStrategy(option, async(tokenDecoded, done)=> {
//         try {
//             const user= await findUserById(tokenDecoded.id)
//             if (!user) {
//                 return done(null,false)
//             }
//             return done(null, false)
            
//         } catch (error) {
//             return done(error, false)
//         }
//     })
// )
// module.exports= passport



















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