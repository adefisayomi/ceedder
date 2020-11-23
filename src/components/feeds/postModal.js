import { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'

export const postModal = () => {

    const [OpenModal, setOpenModal] = useState('')

    const toggleModal = () => {
        if(OpenModal === 'none') {
            setOpenModal('')
        }
        if(OpenModal === '') {
            setOpenModal('none')
        }
    }
    const closeModal = () => {
        setOpenModal('none')
    }

    return (
        <div className="postModal" style= {{display: OpenModal}}>
            <div className="postModal__underlay" onClick= {closeModal}>
                <div className= 'postModal__closeButton' onClick = {closeModal}>x</div>
            </div>
            <div className="postModal__main">
                <div className="postModal__image">
                    <img src="https://i2.wp.com/metro.co.uk/wp-content/uploads/2019/03/SEI_57105028.jpg?quality=90&strip=all&zoom=1&resize=644%2C428&ssl=1" alt="postModal image"/>
                </div>
                <div className="postModal__main__aside">
                    <div className= 'postModal__details'> 
                         <p><span>Solomon lane: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate provident repudiandae, beatae perspiciatis est atque modi itaque dolores soluta excepturi voluptatem reprehenderit laudantium ea sint vero rerum consectetur officiis laboriosam placeat. Deserunt, nihil consequatur? Sapiente reprehenderit dignissimos error voluptatibus laudantium! Doloremque cum labore a quos deleniti sit provident numquam perspiciatis.</p>
                         
                         <p><span>Solomon lane: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate provident repudiandae, beatae perspiciatis est atque modi itaque dolores soluta excepturi voluptatem reprehenderit laudantium ea sint vero rerum consectetur officiis laboriosam placeat. Deserunt, nihil consequatur? Sapiente reprehenderit dignissimos error voluptatibus laudantium! Doloremque cum labore a quos deleniti sit provident numquam perspiciatis.</p>
                         
                         <p><span>Solomon lane: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate provident repudiandae, beatae perspiciatis est atque modi itaque dolores soluta excepturi voluptatem reprehenderit laudantium ea sint vero rerum consectetur officiis laboriosam placeat. Deserunt, nihil consequatur? Sapiente reprehenderit dignissimos error voluptatibus laudantium! Doloremque cum labore a quos deleniti sit provident numquam perspiciatis.</p>
                         
                         <p><span>Solomon lane: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate provident repudiandae, beatae perspiciatis est atque modi itaque dolores soluta excepturi voluptatem reprehenderit laudantium ea sint vero rerum consectetur officiis laboriosam placeat. Deserunt, nihil consequatur? Sapiente reprehenderit dignissimos error voluptatibus laudantium! Doloremque cum labore a quos deleniti sit provident numquam perspiciatis.dolapo</p>
                         
                    </div>
                    <div className="postModal__comment">
                        <textarea placeholder= 'Post your comment...' />
                        <Button primary content= 'Post comment' fluid/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default postModal
