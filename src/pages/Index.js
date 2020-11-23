import HeaderSection from '../components/HeaderSection'
import Post from '../components/feeds/Post'
import PostModal from '../components/feeds/postModal'
import { useState } from 'react'
import Nav from '../components/Nav'
import {homePost} from '../components/testfiles/TestData'
import {ThemeValue} from '../components/contexts/theme/ThemeState'

const Index = () => {
    const {UI} = ThemeValue()

    const [openPost, setOpenPost] = useState(false)

    return (
        <>
        <HeaderSection title= ' Home ' />
        <Nav/>
        <div className="homepage" style= {{backgroundColor: UI.bgColor}}>
            {homePost.map(post => (
                <Post username= {post.username} image= {post.image} product= {post.product} post= {post.post} openSinglePost= {setOpenPost}/>
            ))}
             {/* <PostModal openPost= {openPost} setOpenPost= {setOpenPost}/> */}
        </div>
        </>
    )
}

export default Index