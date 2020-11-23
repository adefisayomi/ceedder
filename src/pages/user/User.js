import { useRouter } from 'next/router'
import HeaderSection from '../../components/HeaderSection'
import { Button } from 'semantic-ui-react'
import Gallery from '../../components/gallery/Gallery'
import Nav from '../../components/Nav'
import {ThemeValue} from '../../components/contexts/theme/ThemeState'

const User = () => {
  const router = useRouter()
  const {UI} = ThemeValue()


    return (
        <>
        <HeaderSection/>
        <Nav />
        <div className="user" style= {{backgroundColor: UI.bgColor, color: UI.color}}>
            <div className="user__body" style= {{backgroundColor: UI.bgColor, color: UI.color}}>
            <div className="user__profile">
              <div className="user__profile__picture">
                <div className="">
                  <img 
                src= 'https://guyrothblum.files.wordpress.com/2014/11/guy_rothblum_square.jpg'
                alt= 'profile picture'
              /></div>
              <span>Adefisayomi oluwole</span>
              </div>
              <div className="user__profile__settings">

                <div className="user__settings">
                  <h1>Clace_clothings_store</h1>
                  <Button
                  fluid
                  icon= 'setting' content= 'Edit profile' primary/>
                 
                </div>
                <div className="user__follower">
                  <span>7 Customer</span>
                  <span>7 follower</span>
                  <span>7 Affiliate</span>
                </div>
                <div className=""></div>

              </div>
            </div>
            <div className="user__gallery">
              <Gallery />
            </div>
            
            </div>
        </div>
        </>
    )
}

export default User