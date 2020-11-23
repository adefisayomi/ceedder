const bcrypt = require('bcryptjs')
const admin = require('firebase-admin')
const UserRef = require('../firebase/UserRef')

const login = async (req, res) => {

    if(req.method === 'POST') {

        const {username, password} = req.body
        const snapShot = await UserRef.where('username', '==', username).get()
        try {
            let uid;
            let user;
            if (snapShot.empty) {
                res.status(400).json({ success: false, error: ['User does not exist'] })
                }  
            else {
                snapShot.forEach(User =>  {
                    uid = User.id
                    user = User.data()
                })
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if(err) {
                        throw err
                    }
                    if(!isMatch) {
                        res.status(400).json({ success: false, error: ['Password does not match'] })
                    }
                    else{
                        res.status(201).json({ success: true, error: [] })
                    }
                    
                })
            }      
        }catch (err) {
            res.status(406).json({ success: false, error: err })
        }
        
    }

    else{ res.status(403).json({ success: false, message: ['Forbiden'] }) }
}

export default login