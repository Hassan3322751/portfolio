import React from 'react'
import images from '../Images/images'
import '../CSS/Common.css'

const SkewImg = ({image}) => {
  return (
    <React.Fragment>
        <div className='skewContainer '>
            <div className='skew'></div>
            <img src={image} className='skewImg'/>
            <div className='skew1'></div>
        </div>
    </React.Fragment>
  )
}

export default SkewImg