import EditLayout from '../../../components/layouts/EditLayout'
import { Input, Button, Icon, Form, Label } from 'semantic-ui-react'
import Link from 'next/link'

const Change = () => {
    return (
        <>
            <EditLayout title= 'Change password' className= 'changepassword__editLayout'>
                <div className="change">
                 
                    <div className="change__input"><Input placeholder= 'Old Password' fluid type= 'password'/></div>
                    <div className="change__input"><Input placeholder= 'New Password' fluid type= 'password'/></div>
                    <div className="change__input"><Input placeholder= 'Confirm Password' fluid type= 'password'/></div>
                    <Link href= '/accounts/password/reset'><p>Forgot your password?</p></Link>
                    <Button content= 'Change Password' primary />
                </div>
            </EditLayout>
        </>
    )
}

export default Change