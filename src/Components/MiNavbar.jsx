import React from 'react';
import { NavLink } from 'react-router-dom';
/**/
import { FaHome, FaInfoCircle, FaShoppingCart, FaUser, FaUserPlus, FaSistrix } from 'react-icons/fa';
/* 
 <a class="navbar-brand" href="#">Navbar</a>
*/

const MiNavbar = () => {
  
   return (
   <>
      <header className="cabecera">
        <nav className="cabecera-nav">
               <h1>Logo</h1>
              <ul className="cabecera-ul">
                    <li className="cabecera-li">
                      <NavLink to='/'><FaHome /> Home</NavLink> 
                    </li>
                    <li className="cabecera-li"> 
                    <NavLink to='/Productos'> <FaSistrix/> Search</NavLink> 
                    </li>
                    <li className="cabecera-li"> 
                    <NavLink to='/milogin'> <FaUser /> Login</NavLink> 
                    </li>
                    <li className="cabecera-li">
                      <NavLink to='/regcuenta'><FaUserPlus /> Registrarse</NavLink> 
                    </li>
                    <li className="cabecera-li">
                      <NavLink to='/acercade'> <FaInfoCircle /> Acerca de</NavLink> 
                    </li>
                    <li className="cabecera-li">
                      <NavLink to='/carro'> <FaShoppingCart /> Carro </NavLink> 
                    </li>
               </ul>
          </nav>
      </header>
   </>
  )
}

export default MiNavbar