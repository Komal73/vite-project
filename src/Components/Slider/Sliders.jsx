import React from 'react'
import './Sliders.css'
import Slider from 'react-slick'
const Sliders = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='main-slider'>
           <Slider {...settings}/>
              <div className='slider-img'>
                <img src="banner2.jpg"  style={{height:'80vh' , width:'100%'}} />
              </div>
              <div className='slider-img'>
                <img src="banner3.jpg"/>
             </div>
             {/* <div className='slider-img'>
                 <img src="banner4.jpg"  />
             </div> */}
             {/* <div className='slider-img'>
                <img src="banner5.jpg" />
              </div> */}
              {/* <div className='slider-img'>
                <img src="banner6.jpg"/>
              </div> */}
     </div>
  )
}

export default Sliders