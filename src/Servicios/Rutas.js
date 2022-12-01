import { Route, Routes } from "react-router-dom"

import Home from '../Pages/Home';
import ListProductos from '../Pages/ListProducto';
import Registro from '../Pages/Registro';
import Acceso from '../Pages/Acceso';
import Detalle from '../Pages/Detalle';

function Rutas(){
    return(
        <Routes>
          <Route exact path='/Productos' element={<ListProductos />} />
          <Route exact path='/Registro' element={<Registro />} />
          <Route exact path='/Acceso' element={<Acceso />} />
          <Route exact path='/Detalle/:id' element={<Detalle />} />
        </Routes>
    )
}

export default Rutas