import EditLayout from '../../../components/layouts/EditLayout'
import { Button, Input, List, Image } from 'semantic-ui-react'
import { Router, useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'

const ContactPage = () => {
    const router = useRouter()
    const {query} = useRouter()

    const [action, setAction] =useState('')
    const [searchTag, setSearchTag] = useState('')
   useEffect(() => {
    if(query.path === 'clients') {
        setAction('Edit')
        setSearchTag('Search clients...')
    }
    if(query.path === 'follower') {
        setAction('follow')
        setSearchTag('Search followers...')
    }
    if(query.path === 'following') {
        setAction('Unfollow')
        setSearchTag('Search following...')
    }
    if(query.path === 'affiliates') {
        setAction('Edit Permission')
        setSearchTag('Search affiliates...')
    }
   }, [query.path])

const clients = [
    {name: 'Solomon kane', image: 'https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
    {name: 'Solomon kane', image: 'https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
    {name: 'Tunde Bakare', image: 'https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
    {name: 'Solomon kane', image: 'https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
    {name: 'Solomon kane', image: 'https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
    {name: 'Solomon kane', image: 'https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
]

    return (
    <>
    <EditLayout title= 'clients'>
        <div className="clients">
        <Button color= 'black' content= 'Go Back' onClick= {() => router.back()}/><Input icon='add user' iconPosition='left' placeholder= {searchTag}/>
        <List divided verticalAlign='middle'>
          {clients.map(cli => (
            <List.Item className= 'clients__list'>
              <List.Content floated='right'>
                <Button content= {action} primary/>
              </List.Content>
              <Image avatar src= {cli.image} />
              <List.Content>{cli.name}</List.Content>
            </List.Item>
          ))}
            
        </List>
        </div>
    </EditLayout>
        </>
    )
}

export default ContactPage