import bcrypt from 'bcryptjs'
import emailValidator from 'email-validator'
const admin = require('firebase-admin')
const UserRef = require('../firebase/UserRef')

const signup = async (req, res) => {

    if(req.method === 'POST') {
        const {username, name, email, password} = req.body
        // split name to get first and othernames
        const splitName = name.split(' ')
        // firstName
        const firstName = splitName.shift()
        // otherNames
        const otherNames = splitName.slice()
        // validate email
        const isValidEmail = await emailValidator.validate(email)
        // check if email and username exist
        const checkEmail = await UserRef.where('email', '==', email).get()
        const checkUsername = await UserRef.where('username', '==', username).get()
        
        try {
            const errors = []
            if(!email || !username || !name || !password ) {
                errors.push('Please fill all the fields')
            }
            if(checkEmail.size > 0) {
                errors.push('Email already exist')
            }
            if(checkUsername.size > 0) {
                errors.push('Username already exist')
            }
            if(!isValidEmail) {
                errors.push('Email is not valid')
            }
            if(password.length < 6) {
                errors.push('Password must be at least 6 character long')
            }
            if(errors.length > 0) {
                res.status(406).json({ success: false, error: errors })
            }
           else{
            //    check if username and email already exist
               bcrypt.hash(password, 12, async(err, hash) => {
                   if(!err && hash) {
                       const user = {
                           email: email,
                           username: username,
                           firstName: firstName,
                           otherNames: otherNames,
                           password: hash
                       }

                       const newUser = await UserRef.add(user)
                            if(newUser) {
                                admin.auth().createCustomToken(newUser.id, (err, token) => {
                                    if(!err && token) {
                                        res.headers({'Authorization':  token})
                                        res.status(201).json({ success: true, error: [] })
                                    }
                                    else { throw err }
                                })
                            }
                            else{
                                res.status(406).json({ success: false, error: ['There was a problem creating your account'] })
                            }
                   }else{
                       throw err
                   }
               })
           }
        }
        catch(err) {
            res.status(400).json({ success: false, error: err })
        }
    }
    else {
        res.status(405).json({ status: false, error: ['method not allowed'] })
    }
}

export default signup