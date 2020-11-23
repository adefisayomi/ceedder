import { useState } from 'react'
import {useRouter} from 'next/router'
import Error from '../../components/Alerts/Error'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import HeaderSection from '../../components/HeaderSection'
import { Form, Icon, Button, Header, Segment, Divider, Container } from 'semantic-ui-react'

const Signup = () => {
    const router = useRouter()
    // form field
    const [form, setForm] = useState({ username: '',
                                       password: '',
                                       email: '',
                                       name: ''
                                    })

    // get form inputs
    const handleFormInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        validateForm()
    }

    // reset form
    const resetForm = () => {
        setForm({ username: '',
                  password: '',
                  email: '',
                  name: ''
                })
    }

    // submit button 
    const [submitBtn, setSubmitBtn] = useState(true)
    // submit button loading state
    const [loading, setLoading] = useState(false)
    // if erroe with signup
    const [signupError, setSignupError] = useState({status: false, error: []})

    // VALIDATE FORM INPUT
    const validateForm = () => {
        if (!form.username || !form.email || !form.name || !form.password ) {
            setSubmitBtn(true)
        } else{ setSubmitBtn(false) }
    }
    // handle submit
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        // POST request configuration
        const url = 'http://localhost:3000/api/accounts/signup'
        const config = {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        }
         
        // MAKE post request
        const res = await fetch(url, config)
        const data = await res.json()
        const { success, error } = data
           
           
            if(error.length > 0) {
                setSignupError({status: true, error: error})
                setLoading(false)
            }
            else if (error.length === 0) {
                setSignupError({status: false, error: []})
                setLoading(false)
                resetForm()
            }
            
    }

    return (
        <>
        <HeaderSection title= 'signup' />
        <div className="signup__wrapper">
        <div className="signup">
         
                        <Segment>
                            <Container className= 'signup__container'fluid>  
                        <Form onSubmit= {handleFormSubmit}>
                        <Header as= 'h1' textAlign= 'center'>create account</Header>
                            <Form.Input 
                                name= 'email'
                                type= 'email'
                                value= {form.email}
                                placeholder= 'Email'
                                autoComplete= 'off'
                                icon= 'at'
                                iconPosition= 'left'
                                onChange= {handleFormInput}
                                fluid
                            />
                            <Form.Input 
                                name= 'name'
                                type= 'text'
                                value= {form.name}
                                placeholder= 'Full name'
                                autoComplete= 'off'
                                icon= 'user circle'
                                iconPosition= 'left'
                                onChange= {handleFormInput}
                                fluid
                            />
                            <Form.Input 
                                name= 'username'
                                type= 'text'
                                value= {form.username}
                                placeholder= 'Username'
                                autoComplete= 'off'
                                icon= 'user'
                                iconPosition= 'left'
                                onChange= {handleFormInput}
                                fluid
                            />
                            <Form.Input 
                                name= 'password'
                                type= 'password'
                                value= {form.password}
                                placeholder= 'Password'
                                icon= 'lock'
                                iconPosition= 'left'
                                onChange= {handleFormInput}
                                fluid
                            />
                            {signupError && <Error error = {signupError.error} visibility = {signupError.status} />}
                            <Button
                                content= 'Create account' 
                                type= 'submit'
                                primary 
                                fluid
                                loading= {loading}
                                disabled= {submitBtn}
                                onClick= {handleFormSubmit}
                            />
                        </Form>
                             <Header as= 'h5' textAlign= 'center'color= 'grey'>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</Header>
                            <Divider content= 'Or' horizontal/>
                            <Button
                                fluid 
                                secondary
                            >  
                                <Icon name= 'google' iconPosition= 'left' size= 'large' />
                            Signup with Google
                            </Button>
                    </Container> 
                </Segment>
                <Segment>
                    <Container className = 'signup__login'>
                        <Header as= 'h5' textAlign= 'center' >Already have an account?
                            <Link href= '/accounts/login'>
                                <a> Login here</a>
                            </Link>
                        </Header>
                    </Container>
                </Segment>
                </div>
        </div>
        </>
    )
}

export default Signup