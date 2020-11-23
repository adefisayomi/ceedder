import { Container, Message } from 'semantic-ui-react'

const Errors = ({error, visibility}) => {

    return (
        <Container style = {{ paddingBottom: '15px' }} fluid>
           <Message
                size= 'tiny'
                error
                visible= {visibility}
                >
                    <Message.Header>Error alert</Message.Header>
                    {error.map(err => (
                        <Message.List key= {err}>
                    <Message.Item>{err}</Message.Item>
                 </Message.List>
                    ))}
            </Message>
        </Container>
    )
}

export default Errors