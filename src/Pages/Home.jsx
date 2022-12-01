import React from 'react';
import Navbar from '../Componentes/Navbar';
import firebase from '../Config/firebase'



function Home(){
    console.log(firebase)
    return(
        <>
                <div><h1>BUSCA TUS PRODUCTOS en MERCADOLIBRE</h1></div>
                <div className='barramenu'>
                <nav>
                    <Navbar />
                </nav>
                </div>
        </>
    );
}

export default Home;