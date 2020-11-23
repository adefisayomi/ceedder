import { useState } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import HeaderSection from '../../components/HeaderSection'
import { Form, Icon, Button, Header, Segment, Divider, Container } from 'semantic-ui-react'

const Login = () => {

    const [form, setForm] = useState({ username: '', password: '' })

    const handleFormInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        validateForm()
    }

    // RESET FORM
    const resetForm = () => {
        setForm({ username: '', password: '' })
    }

    const [submitBtn, setSubmitBtn] = useState(true)

    const [loading, setLoading] = useState(false)

    // VALIDATE FORM INPUT
    const validateForm = () => {
        if (!form.username || !form.password ) {
            setSubmitBtn(true)
        } else{ setSubmitBtn(false) }
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        // handle post request
        const url = 'http://localhost:3000/api/account/login'
        const config = {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await fetch(url, config)
        const data = await res.json()
        console.log(data)
        resetForm()
    }

    return (
        <>
        <HeaderSection title= 'login page' />
        <div className="login">
         
                        <Segment>
                            <Container className= 'login__container'fluid>  
                        <Form onSubmit= {handleFormSubmit}>
                        <Header as= 'h1' textAlign= 'center'>ceder</Header>
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
                            <Button
                                content= 'Login' 
                                type= 'submit'
                                primary 
                                fluid
                                loading= {loading}
                                disabled= {submitBtn}
                                onClick= {handleFormSubmit}
                            />
                        </Form>
                             <Header as= 'h5' textAlign= 'center'color= 'grey'>Forgot your Password? click  
                                <Link href= '/accounts/password/reset'>
                                    <a> here</a>
                                </Link>
                            </Header>
                            <Divider content= 'Or' horizontal/>
                            <Button
                                fluid 
                                secondary
                            >  
                                <Icon name= 'google' iconPosition= 'left' size= 'large' />
                            Login with Google
                            </Button>
                    </Container> 
                </Segment>
                <Segment>
                    <Container className = 'login__signup'>
                        <Header as= 'h5' textAlign= 'center'>Don't have an account?
                            <Link href= '/accounts/signup'>
                                <a> Signup here</a>
                            </Link>
                        </Header>
                    </Container>
                </Segment>
        </div>
        </>
    )
}

export default Login