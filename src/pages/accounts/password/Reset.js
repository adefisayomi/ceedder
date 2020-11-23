import { useState } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import HeaderSection from '../../../components/HeaderSection'
import { Form, Icon, Button, Header, Segment, Divider, Container } from 'semantic-ui-react'

const Reset = () => {

    const [form, setForm] = useState({ password: '' })

    const handleFormInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        validateForm()
    }

    // RESEF FORM
    const resetForm = () => {
        setForm({  email: '' })
    }

    const [submitBtn, setSubmitBtn] = useState(true)

    const [loading, setLoading] = useState(false)

    // VALIDATE FORM INPUT
    const validateForm = () => {
        if (!form.email ) {
            setSubmitBtn(true)
        } else{ setSubmitBtn(false) }
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        // handle post request
        const url = 'http://localhost:5000/api/login'
        const config = {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await fetch(url, config)
        const { data } = await res.json()
        resetForm()
    }

    return (
        <>
        <HeaderSection title= 'reset password' />
        <div className="reset">
         
                        <Segment>
                            <Container className= 'reset__container'fluid>  
                        <Form onSubmit= {handleFormSubmit}>
                        <Header as= 'h1' textAlign= 'center'><Icon name= 'lock' circular color= 'grey' /></Header>
                            <Form.Input 
                                name= 'email'
                                type= 'text'
                                value= {form.email}
                                placeholder= 'Enter your email address'
                                autoComplete= 'off'
                                icon= 'user'
                                iconPosition= 'left'
                                onChange= {handleFormInput}
                                fluid
                            />
                            <Button
                                content= 'Reset password' 
                                type= 'submit'
                                primary 
                                fluid
                                loading= {loading}
                                disabled= {submitBtn}
                                onClick= {handleFormSubmit}
                            />
                        </Form>
                            <Divider content= 'Or' horizontal/>
                            <Header as= 'h5' textAlign= 'center'><Link href= '/accounts/signup'><a>Create new account</a></Link></Header>
                    </Container> 
                </Segment>
                <Segment>
                    <Container className = 'reset__login' >
                        <Button color= 'black' fluid>
                        <Header as= 'h5' textAlign= 'center' ><Link href= '/accounts/login'><a>Back to Login</a></Link></Header>
                        </Button>
                    </Container>
                </Segment>
        </div>
        </>
    )
}

export default Reset