import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom"
import { getIDProductos } from '../Servicios/conexion';

function Detalle(){
    const {id} = useParams
    const [mProducto, setProducto] = useState({})
    const [isLoading, setIsloading] = useState(true)

    useEffect (() =>{
        const result = async ()=>{
            try{
                const responseData = await getIDProductos(id)
                if (responseData.data)
                {
                    setProducto(responseData.data)
                }
                console.log (responseData.data)
                setIsloading(false)
            }catch(e){
                console.log(e)
            }
        }
        result()
    }, [id])

    if(isLoading){
        return( <div>CARGANDO ...</div>)
    }
    else
    {
        return(
            <>
                <div><h2>DETALLE PRODUCTO</h2></div>
                <div className='marcoProducto'>
                    <h3>{mProducto.title}</h3>
                    <h3>{mProducto.original_price}</h3>
                    <div><img src={mProducto.thumbnail}></img></div>
                </div>
            </>
        );
   
    }
}

export default Detalle
