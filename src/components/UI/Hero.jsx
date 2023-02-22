import React from 'react'
import "../../styles/hero.css"

import heroDarkImg from '../../images/hero-img1.png'


const Hero = ({theme}) => {
  return (
    <section className='hero__section'>
        <div className='container'>
            <div className='hero__wrapper'>
                <div className='hero__content'>
                    <div>
                        <h2>IT SOLUTIONS </h2>
                        <h2> CLOUD SOLUTIONS</h2>
                        <h2> CYBERSECURITY</h2>
                        <h3 className='highlight'>Our team of certified professionals has a wealth of experience in the IT industry </h3>
                    </div>
                    <p className='description'> </p>
                    
                </div>
                <div className='hero__img'>
                    <img src={heroDarkImg} alt="hero-img" />
                </div>
            </div>
        </div>
    </section>
  );
}

export default Hero
