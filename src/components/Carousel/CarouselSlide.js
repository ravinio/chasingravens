import React from "react"

const CarouselSlide = (props) => {
    const { slideTitle, slideDescription, slideBg } = props
  return (
    <div className="slideWrap" style={{ backgroundImage: `url(${slideBg})`}}>
        <div className="textWrap">
            <h2>{slideTitle}</h2>
            <p>{slideDescription}</p>
            <a href="/blogs" className="btn">Read More</a>
        </div>
    </div> 
  )
}

export default CarouselSlide
