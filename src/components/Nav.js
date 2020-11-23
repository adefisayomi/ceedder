import Link from 'next/link'
import { useRouter } from 'next/router'
import { Icon, Input, Container } from 'semantic-ui-react'
import MenuBar from '../components/buttons/MenuBar'
import {ThemeValue} from './contexts/theme/ThemeState'

const Nav = ({props}) => {
  
   const {pathname} = useRouter()
  const {UI} = ThemeValue()

    return (
        <>
        <div className = 'nav' style= {{backgroundColor: UI.bgColor, color: UI.color}}>
        <div className="nav__container">
          <div className="nav__logo">
            <h1>ceadder</h1>
            {props ? <span>{props}</span> : <span><MenuBar/></span>}
            
            </div>
            
          <Container className="nav__search">
          <Input fluid placeholder= 'Search ...' />
          </Container>
          <div className="nav__icons" >
            <Link href= '/'><Icon name= 'home' size= 'large' link /></Link>
            <Icon name= 'send' size= 'large' link/>
            <Icon name= 'like' size= 'large' link/>
            <Icon name= 'cart' size= 'large' link/>
            
            <Link href= '/[user]'><span><img  src= 'https://image.shutterstock.com/image-photo/cheerful-hipster-guy-smiles-happily-260nw-744198382.jpg'/></span></Link>
          </div>
        </div>
        </div>
        <div className="nav__margin" style= {{backgroundColor: UI.bgColor}}></div>
        </>
    )
}
export default Nav
