import React, {useState, useEffect} from 'react';
import { getAllProductos } from '../Servicios/conexion';
import Articulo from '../Componentes/Articulo';
import Precio from '../Componentes/Precio';
import Logo from '../Componentes/Logo';
import { Link } from 'react-router-dom';


function ListProducto(){
    const [productos, setProductos] = useState([])
    const [isLoading, setIsloading] = useState(true)
    let [mID, setmID] = useState(0)

    useEffect (() =>{
        const result = async ()=>{
            try{
                const responseData = await getAllProductos()
                setProductos(responseData.results)
                setIsloading(false)
            }catch(e){
                console.log(e)
            }
        }
        result()
    }, [])

    const mostrarProd = ()=>
    {
           setmID(mID+1)
    }

    if(isLoading){
        return( <div>loading ...</div>)
    }
    else
    {
        return(
            <>
                <div><h2>Electrónicos - Tablets - Ipad</h2></div>
                <div className='marcoProducto'>
                    <Logo imagen={productos[mID].thumbnail}/>
                    <Articulo descripcion={productos[mID].title}/>
                    <Precio precio={productos[mID].currency_id+" "+productos[mID].price}/>
                    <button className='boton_personalizado'><Link to={`/Detalle/${productos[mID].id}`}>QUIERO SABER MAS</Link></button>
                </div>
                <div><button onClick={mostrarProd}>Siguiente Producto</button></div>
            </>
        );
   
    }
}

export default ListProducto