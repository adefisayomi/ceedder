import Nav from "../Nav"
import HeaderSection from '../HeaderSection'
import Link from 'next/link'
import {links} from '../testfiles/links'
import {ThemeValue} from '../contexts/theme/ThemeState'

const editLayout = ({children, title}) => {
    const {UI} = ThemeValue()
    
    return (
        <>
        <HeaderSection title= {title} />
      
            <Nav  />
        <div className="editlayout__wrapper" style= {{backgroundColor: UI.bgColor, color: UI.color, border: UI.border}}>
        <div className="editLayout" style= {{border: UI.border}}>
            <div className="editLayout__aside">
                <ul>
                    {links.map(menu => (
                        <Link href= {menu.path}><li>{menu.name}</li></Link>
                    ))}
                    
                </ul>
            </div>
            <div className="editLayout__main" >
                <div className="children" >
                 {children}
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default editLayout