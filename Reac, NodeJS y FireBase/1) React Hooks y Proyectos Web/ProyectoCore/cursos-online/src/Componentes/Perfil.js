import React, { useEffect, useState } from "react";
import axios from 'axios';
function Perfil(props){
    /* Declara las variables y funciones que van a utilizar para obtener y guardar los datos. */
    const [paises, obtenerPaises] = useState([]);
    const [status, cambiarStatus] = useState(false);


    /* Function useEffect */
    useEffect( ()=>{
        
        axios.get('https://restcountries.com/v2/all')
        .then(resultado =>{
            obtenerPaises(resultado.data);
            cambiarStatus(true);
        })
        .catch(error=>{
            cambiarStatus(true);
        })

    },[])


    if(status){
        return(

            <table>
                <thead>
                    <td>Pais</td>
                    <td>Capital</td>
                    <td>Región</td>
                </thead>
                {paises.map((pais,indice)=>
                    <tr key={indice}>
                        <td>{pais.name}</td>
                        <td>{pais.capital}</td>
                        <td>{pais.region}</td>
                    </tr>
                )}
                <tr>
                    
                </tr>
            </table>
           /*  <ul>
                {paises.map((pais,indice)=>
                    <li key={indice}>{pais.name}</li>
                )}
            </ul> */
        );
    }else{
        return(<h1>Esta cargando los valores de la rest Service</h1>)
        
    }
}

export default Perfil;