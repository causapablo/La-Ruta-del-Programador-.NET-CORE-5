import React, {useState} from 'react'
import Perfil from './Componentes/Perfil';

function App() {
  const[nombre, cambiarNombre] = useState('Nameless')

  function eventoCajaTexto(e){
    cambiarNombre(e.target.value);
  }
  return (
    <div>
      <h1>Bienvenidos al curso de ASP.NET Core y React Hooks {nombre}</h1>
      <input name="nombre" type="text" value={nombre} onChange={eventoCajaTexto}></input>
      <p>{nombre}</p>

      <Perfil></Perfil>
      
    </div>
  );
}

export default App;
