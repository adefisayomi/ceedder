import { Fragment } from 'react'
import {TestData} from '../testfiles/TestData'

const Gallery = () => {

  return (
    <div className= 'gallery' >
      {TestData.map(tile => (
        <Fragment>
        <div className="gallery__tile">
          <img src= {tile.image} key= {tile.author} alt= {tile.author} />
        </div>
        </Fragment>
      ))}
    </div>
  );
}

export default Gallery
