import { useState } from 'react'
import { Card, Icon, Image, Divider, Form, Container, Header, Button,Popup, Input  } from 'semantic-ui-react'
import {ThemeValue} from '../contexts/theme/ThemeState'

const Post = ({ username, image ,product ,post, openSinglePost }) => {
    const {UI} = ThemeValue()

    return (
        <div className="post" style= {{backgroundColor: UI.bgColor, color: UI.color}}>
            <div className= 'post__header'>
                <div className="profilePicture">
                    <img
                    src= {image}
                    alt= 'profile picture'
                />
                </div>
                
                <span className= 'post__username'>{username}
                    <Icon link name= 'ellipsis horizontal' />
                            </span>
            </div>
                        <div className="post__product">
                            <img 
                            src= {product}
                        />
                        </div>
                        
                        <div className = 'post__action__buttons'>
                            <span className = 'post__comment'>
                                <Icon name= 'like' size= 'large' link/>
                                <Icon name= 'share' size= 'large' link/>
                                <Icon name= 'send' size= 'large' link/>
                            </span>
                            
                            <span className = 'post__buy'>
                                <Popup
                                    on='click'
                                    position= 'top right'
                                    pinned
                                    flowing
                                    hideOnScroll
                                    trigger={<Icon name= 'cart' size= 'large' color= 'blue' link/>}
                                    >
                                    <Popup
                                            on='click'
                                            position= 'top center'
                                            basic
                                            flowing
                                            hideOnScroll
                                            trigger={<Button content= 'Sell' primary/>}
                                            >
                                                   <p>
                                                       <Image avater src= 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' size= 'mini' circular/>
                                                       This product requires an approval to sell
                                                    </p>
                                                   <span className= 'post__popup__sell'>
                                                   <Button content= 'Send request? ' primary/>
                                                   <Button content= 'Cancel request' negative/>
                                                </span> 
                                        </Popup>
                                        <Popup
                                            on='click'
                                            position= 'top right'
                                            pinned
                                            hideOnScroll
                                            trigger={<Button content= 'Buy' color= 'black'/>}
                                            >
                                                <Button content= 'Add to cart' primary/>
                                                <Button content= 'Buy now' primary/>
                                        </Popup>
                                    
                                </Popup>
                                
                            </span>
                            
                        </div>
                        <div className= 'post__commentFeeds'>
                            <p><span>{username}:</span> {post}</p>
                        </div>
                    <div className= 'post__commentForm'>
                        <textarea placeholder= 'Post your comment...' />
                        <Icon 
                            name= 'paper plane'
                            color= 'blue'
                            circular
                            inverted
                            link
                        />
                    </div>
                </div>
    )
}

export default Post