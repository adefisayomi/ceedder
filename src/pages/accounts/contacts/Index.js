import EditLayout from '../../../components/layouts/EditLayout'
import { Button, Icon, Label, Divider } from 'semantic-ui-react'
import { useRouter } from 'next/router'

const Index = () => {
    const router = useRouter()

    const contacts = [
        {tag: 'clients', count: '20', icon: 'dollar', color: 'blue'},
        {tag: 'follower', count: '223', icon: 'add user', color: 'black'},
        {tag: 'following', count: '120', icon: 'users', color: 'black'},
        {tag: 'affiliates', count: '20', icon: 'handshake', color: 'black'},
    ]

    return (
        <>
        <EditLayout title= 'contacts' >
            
        <div className="contacts">
            {contacts.map(contact => (
                <div className="contacts__">
                <Button content= {contact.tag} color= {contact.color} onClick= {() => router.push(`/accounts/contacts/${contact.tag}`)}/>
                <span></span>
                <Icon name= {contact.icon} color= {contact.color} inverted circular size= 'large'/>
                </div>
            ))}
        </div>
        </EditLayout>
        </>
    )
}

export default Index 