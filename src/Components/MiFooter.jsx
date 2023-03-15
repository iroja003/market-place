import React from 'react';
import { FaCopyright } from 'react-icons/fa';
/*import { Container } from 'react-bootstrap';*/
/*
    <footer class="bg-dark text-light text-center p-2">
      <p>Olivia Ros 2019. Todos los derechos reservados</p>
    </footer>
      <Container className='footer-container text-center p-2'>
           
        </Container>
*/ 
const MiFooter = () => {
  return (
    <>
      <div  className='footer-container'>
         <FaCopyright/>2023 IR7- SuperMarket. Todos los Derechos Reservados
      </div>
    </>
  )
}

export default MiFooter