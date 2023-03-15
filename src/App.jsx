import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Productos from './Pages/Productos';
import Productodet from './Pages/Productodet';
import MiNavbar  from './Components/MiNavbar';
import MiFooter  from './Components/miFooter';
import MiLogin   from './Pages/miLogin';
import NotFound  from './Pages/NotFound';
import RegCuenta from './Pages/RegCuenta';
import Acercade  from './Pages/Acercade';
import Carro     from './Pages/Carro'; 

const App = () => {
  return (
    <>    
          <MiNavbar />
          <Routes>
              <Route path='/'                element={<Home />} />
              <Route path='/milogin'         element={<MiLogin />}/>
              <Route path='/regcuenta'       element={<RegCuenta/>}/>
              <Route path='/acercade'        element={<Acercade />}/>
              <Route path='/productos'       element={<Productos />} />
              <Route path='/productodet/:id' element={<Productodet />} />
              <Route path='/carro'           element={<Carro />}/>
              <Route path='*'                element={<NotFound />}/>
          </Routes>
          <MiFooter />
    </>
  )
}

export default App