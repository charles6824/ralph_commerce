import React from 'react'

const Preloader = () => {
  return (
    <>
     <div id='preloader-active'>
        <div className='preloader d-flex align-items-center justify-content-center'>
          <div className='preloader-inner position-relative'>
            <div className='preloader-circle'></div>
            <div className='preloader-img pere-text'>
              <img src='/images/fav.png' alt='Hire a Chef logo' />
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Preloader
