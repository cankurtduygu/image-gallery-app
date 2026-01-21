import React from 'react'

const Picture = ( { data } ) => {
    console.log(data)


  return (
    <div className='picture'>
    <div className='imageContainer'>
        <img src={data.src.large} alt={data.photographer} />
    </div>
        <p className='info'>Photo by: {data.photographer}</p>
    </div>
  )
}

export default Picture