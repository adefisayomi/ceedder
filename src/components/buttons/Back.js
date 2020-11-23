import {Button, Icon} from 'semantic-ui-react'
import { useRouter } from 'next/router'

const Back = () => {
    const router = useRouter()

    return (
            <div className= 'back'>

            <Button icon labelPosition='left' color= 'black' onClick= {() => router.back()}>
            Back
            <Icon name='arrow alternate circle left' size= 'large'/>
        </Button>
  </div>
    )
}

export default Back