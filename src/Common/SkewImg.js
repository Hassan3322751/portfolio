import React from 'react'
import '../CSS/Common.css'
import LazyLoad from 'react-lazy-load';
import '../CSS/Responsive.css'

const SkewImg = ({image}) => {
  return (
    <React.Fragment>
      <LazyLoad>
        <div className='skewContainer '>
            <div className='skew'></div>
              <img src={image} className='skewImg'/>
            <div className='skew1'></div>
        </div>
      </LazyLoad>
    </React.Fragment>
  )
}

export default SkewImg