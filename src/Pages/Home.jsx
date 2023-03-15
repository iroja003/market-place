import React from 'react'
import img_fondo from '../assets/img/hero_01.jpg';
const Home = () => {
  return (
    <>
       <section className='secction-hero'>
          <div className='hero-image'>
              <div className='hero-text'>
                  <p>parrafo</p>
              </div>  
          </div>
        </section>
        <section className='section-carrusel'>
            <img src={img_fondo} alt='imagen de fondo'  />
        </section>
    </>
  )
}

export default Home