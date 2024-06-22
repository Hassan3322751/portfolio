import React from 'react'
import images from '../Images/images'
import '../CSS/Common.css'

const SkewImg = () => {
  return (
    <>
        <div className='imgContainer '>
            {/* <img src={images.skewOutline} style={{top: '100px'}}/> */}
            <img src={images.skewImg} className='skewImg'/>
            {/* <img src={images.filledSkew} /> */}
        </div>
    </>
  )
}

export default SkewImg