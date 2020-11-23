import EditLayout from '../../components/layouts/EditLayout'
import { Input, Icon, Button, Form, Container, Dropdown, Label, TextArea } from 'semantic-ui-react'
import {ThemeValue} from '../../components/contexts/theme/ThemeState'
import ImageUploader from '../../components/buttons/ImageUploader'
import { useState } from 'react'

const Edit = () => {
    const {UI} = ThemeValue()
    const [image, setImage] = useState(null)
    const getImage = (e) => {
        const img = e.target.files[0]
        setImage(img)
    }
    
        console.log(image)
    return (
        <>
        <EditLayout title= 'Edit profile'>
            {/* <ImageUploader/> */}
            <div className="edit" style= {{border: UI.border}}>
                <div className="edit__header">
                    <span className= 'edit__header__picture'>
                    <img src='https://c8.alamy.com/comp/2AK59RD/young-african-lady-selling-in-a-local-african-market-using-her-mobile-phone-and-credit-card-to-do-a-transaction-online-2AK59RD.jpg' alt="edit image"/>
                    </span>
                    <span className= 'edit__fileButton'>
                        <label for= 'inputFile'>
                            Choose a file
                        </label>
                        <input
                            onChange= {getImage}
                            id= 'inputFile'
                            type="file" 
                            name="profilePicture"
                        />
                    </span>
                </div>

                <div className="edit__body">
                    <div className="edit__body__profile" >
                        <span>
                            <p>Name</p>
                            <div className= 'edit__body__container'>
                                <Input 
                                    transparent= {UI.inverted}
                                    inverted= {UI.inverted}
                                    placeholder= 'First name & Last name'
                                    fluid
                                    icon= {{name: 'info' , inverted: UI.inverted}}
                                />
                            </div >
                        </span>

                    <span>
                        <p>Username</p>
                        <div className= 'edit__body__container'>
                            <Input
                                transparent= {UI.inverted}
                                inverted= {UI.inverted}
                                placeholder= 'username'
                                fluid
                                icon= {{name: 'users', inverted: UI.inverted}}
                            />
                        </div >
                    </span>

                    <span className= 'textArea'>
                        <p>Bio</p>
                        <div className= 'edit__body__container'>
                            <TextArea
                                style= {{backgroundColor: UI.bgColor, border: UI.border}}
                                placeholder= 'Bio'
                            />
                        </div >
                    </span>

                </div>
                    
                    <p>Public business information</p>

                    <span >
                        <p>Category</p> 
                        <div className= 'edit__body__container'>
                            <Dropdown
                                name= 'category'
                                fluid
                                placeholder='Business category'
                                selection
                                options={[{text: 'Fashion designer',value: 'Fashion designer' }, {text: 'Web designer',value: 'web designer' }]}
                            />
                        </div >
                    </span>

                    <span>
                        <p>Email</p>
                        <div className= 'edit__body__container'>
                            <Input
                                transparent= {UI.inverted}
                                inverted= {UI.inverted}
                                type= 'email'
                                placeholder= 'Email address'
                                fluid 
                                icon= {{name: 'at', inverted: UI.inverted}}
                            />
                        </div >
                    </span>

                    <span>
                        <p>Phone</p>
                        <div className= 'edit__body__container'>
                            <Input
                                transparent= {UI.inverted}
                                inverted= {UI.inverted}
                                placeholder= 'Phone number'
                                fluid
                                icon= {{name: 'phone', inverted: UI.inverted}}
                            />
                        </div >
                    </span>

                    <span>
                        <p>Address</p>
                        <div className= 'edit__body__container'>
                            <Input
                                transparent= {UI.inverted}
                                inverted= {UI.inverted}
                                placeholder= 'Business address'
                                fluid
                                icon= {{name: 'map marker', inverted: UI.inverted}}
                            />
                        </div>
                    </span>

                    <span>
                        <p>Gender</p>
                        <div className= 'edit__body__container' fluid >
                            <Dropdown
                                    name= 'gender'
                                    fluid
                                    placeholder='Gender'
                                    selection
                                    options={[{text: 'Male',value: 'male' }, {text: 'Female',value: 'female' }]}
                                />
                        </div>
                    </span>
                    <Input
                        label={{ basic: true, content: 'Date of birth' }}
                        labelPosition='left'
                        type= 'date'
                        defaultValue = "2014-02-09"
                    />
                </div>
            </div>
        </EditLayout>
        </>
    )
}

export default Edit