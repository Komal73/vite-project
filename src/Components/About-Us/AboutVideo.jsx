import React from 'react'
import './AboutVideo.css'
const AboutVideo = () => {
  return (
   <>
      <div className='text-And-Video-Section'>

        <div className='text-part'>
          <h1>Let Food Be They Medicine Be They Food.</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates quos distinctio explicabo iste adipisci vel.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, doloremque.</p>
          <button>Read More</button>
        </div>

        <div className='videos-part'>

                          <iframe        
                            width="420"
                            height="315"
                            src="https://www.youtube.com/embed/eSIJddEieLI? 
                            autoplay=1&mute=1"
                            title="YouTube video player"
                            frameborder="0"
                          >
                            Your browser does not support HTML5 video.
                          </iframe>
        </div>

      </div>
   </>
  )
}

export default AboutVideo