import { useState } from 'react'
import Croppie from 'croppie'

const ImageUploader = () => {

    //const [preview, setPreview] = useState(null)
    const validImageTypes = ['image/jpeg', 'image/png']

    const [image, setImage] = useState(null)
    const [preview, setPreview] = useState(null)

    
    const getImage = async (e) => {
        const img = e.target.files[0]
        if(img && validImageTypes.includes(img.type)) {
            const file = await URL.createObjectURL(img)
            setPreview(file)
            const croppDiv = document.getElementById('preview')
            const crop =  new Croppie(croppDiv, { 
                            viewport: {
                                width: 500,
                                height: 500
                            }
                        })
                    crop.bind ({
                        url: preview,
                        points: [77,469,280,739]
                    })
            
            
        }else{ console.log(img.type + ' is not a valid image type') }
        
    }

    return (
        <div className="imageuploader">
                <input type="file" className='imageuploader' onChange= {getImage}/>
            <div id="preview" className= 'previewdiv'></div>
        </div>
    )
}

export default ImageUploader
