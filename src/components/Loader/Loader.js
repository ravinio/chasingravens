import React from 'react'

const Loader = () => {
  return (
    <div className='loaderWrap'>
        <div className='lds-ellipsis'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Loader
