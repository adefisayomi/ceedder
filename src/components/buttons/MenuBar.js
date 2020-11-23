import { useState } from 'react'
import {useRouter} from 'next/router'
import { Icon, Button, } from 'semantic-ui-react'
import {menuLink, links} from '../testfiles/links'
import Link from 'next/link'
import {ThemeValue} from '../contexts/theme/ThemeState'


const MenuBar = () => {
    const {query, pathname} = useRouter()
    const {dispatch, UI} = ThemeValue()
    const toggleTheme = () => {
        dispatch({type: 'toggleTheme'})
    }

    const [classname, setClassName] = useState({
        mainMenu: 'left__slide', container: 'right__slide', isMenu: false
    })
    const leftSlide = classname.isMenu ? classname.mainMenu : ''
    const rightSlide = classname.isMenu ? classname.container : ''

    const handleMenuSlide = () => {
            if(leftSlide && rightSlide) {
                setClassName({...classname, isMenu: false})
            }else{ setClassName({...classname, isMenu: true}) }
    }
    const closeModal = () => {
        setClassName({...classname, isMenu: false})
    }

    return (
        <>
        <div className="menubar">
            <span className= 'menubar__button'>
            <Button  onClick= {handleMenuSlide} color= {UI.btn}>
              <Icon 
                name= 'align left'
                inverted
            />  ceedder
            </Button></span>
            
            <div className= {`menubar__container ${rightSlide}`} onClick= {closeModal}></div>
                <div className= {`menubar__menu ${leftSlide}`} style= {{backgroundColor: UI.bgColor, color: UI.color}}>
                    <ul>
                        <Link href= '#'><li><Icon name= '' size= 'large' link/></li></Link>
                        <Link href= '#'><li onClick= {toggleTheme}><Icon name= 'nintendo switch' size= 'large' link />Switch Theme</li></Link>

                        {pathname === '/accounts/edit' ? links.map(links => (
                        <Link href= {links.path}><li>{links.name}</li></Link>
                    )) : menuLink.map(links => (
                            <Link href= {links.path}><li><Icon name= {links.iconName} size= 'large'  link/> {links.name} </li></Link>
                        ))}
                        
                        
                    </ul>
                </div>
            
        </div>
        </>
    )
}
export default MenuBar