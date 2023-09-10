import React from 'react'
import {images} from "../../constants"
import "./AboutUsStyle.css"

export const AboutUs = () => {
  return (<>
  <div className='app--aboutus app__bg flex__center section__padding' id='about'>
    <div className="app--aboutus-overlay flex__center">
        <img src={images.G} alt='g letter'/>
    </div>

    <div className="app--aboutus-content flex__center">
        {/* about us */}
        <div className="app--aboutus-content-about">
            <h1 className='headtext__cormorant '>About Us</h1>
            <img  src={images.spoon} alt='about-spoon' className='spoon-img'/>
            <p className='p__opensans'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quis pharetra adipiscing ultrices vulputate posuere tristique. 
            In sed odio nec aliquet eu proin mauris et.Know More
            </p>
            <button type='button' className='custom__button '>Know More</button>
        </div>

        {/* Knife */}

        <div className='app--aboutus-content-knife flex__center'>
            <img src={images.knife} alt='about-knife'/>
        </div>

        {/* history */}
        <div className="app--aboutus-content-history">
            <h1 className='headtext__cormorant '>Our History</h1>
            <img  src={images.spoon} alt='about-spoon' className='spoon-img'/>
            <p className='p__opensans'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quis pharetra adipiscing ultrices vulputate posuere tristique. 
            In sed odio nec aliquet eu proin mauris et.Know More
            </p>
            <button type='button' className='custom__button '>Know More</button>
        </div>

    </div>
    </div>

  
  </>
  )
}

export default AboutUs
