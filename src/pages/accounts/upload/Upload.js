import HeaderSection from '../../../components/HeaderSection'
import Nav from '../../../components/Nav'
import { Button, Icon, Input } from 'semantic-ui-react'

const Upload = () => {

    const addField = () => {
        const input = document.createElement('input')
        const textarea = document.createElement('textarea')
        const getDetailsField = document.getElementById('upload__detailsField')
        getDetailsField.appendChild(textarea).appendChild(input)
    }

    return (
        <>
        <HeaderSection title= 'upload product image' />
        <Nav />
        <div className="upload__wrapper">
        <div className="upload">
            
            <div className="upload__details"  id= 'upload__detailsField'>
                <input type="text" placeholder= 'Title'/>
                <textarea placeholder= 'Details' />
            </div>
            <Button color= 'black' onClick= {addField}>
                <Icon name= 'upload' size= 'small' circular/>Upload
            </Button>
               
        </div>
        </div>
        </>
    )
}

export default Upload
/* price, details, dynamically added fields, preview, button, enable affiliation */ 