//import logo from './logo.svg';
import './App.css';
import logoFreeCodeCamp from './img/freecodecamp-logo.png';
import Boton from './components/Boton';
import Contador from './components/Contador';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      contadorClicks:0
    };
  }

  manejarClick(){
    this.setState(({ contadorClicks }) => ({ contador: contadorClicks+1 }));
  }

  reiniciarContador(){
    this.setState({contador: 0})
  }

  render(){
    return (
      <div className="App">
        <div className="fcc-logo-container">
          <img 
            className="fcc-logo"
            src={logoFreeCodeCamp}
            alt="Logo FreeCodeCamp"
          />
        </div>
        <div className='main-container'>
          <Contador 
            contadorClicks={this.props.contadorClicks }
          />
          <Boton
            texto="Click"
            esBotonClick={ true }
            manejarClick={this.props.manejarClick}
          />
          <Boton
            texto="Reiniciar"
            esBotonClick={ false }
            manejarClick={this.props.reiniciarContador}
          /> 
        </div>
      </div>
    );
  }
  
}
/*
function App() {
  //contadorClicks -> es la variable que usaremos como estado
  //setContadorClicks -> es la funcion que nos va a permitir actualizar/modificar el estado
  //useState (0) 0->es el valor inicial que va a tener nuestro estado
  const [contadorClicks, setContadorClicks] = useState(0);

  const manejarClick = () =>{
    setContadorClicks(contadorClicks + 1);
  };

  const reiniciarContador = () =>{
    setContadorClicks(0);
  };

  return (
    <div className="App">
      <div className="fcc-logo-container">
        <img 
          className="fcc-logo"
          src={logoFreeCodeCamp}
          alt="Logo FreeCodeCamp"
        />
      </div>
      <div className='main-container'>
        <Contador 
          contadorClicks={ contadorClicks }
        />
        <Boton
          texto="Click"
          esBotonClick={ true }
          manejarClick={manejarClick}
        />
        <Boton
          texto="Reiniciar"
          esBotonClick={ false }
          manejarClick={reiniciarContador}
        /> 
      </div>
    </div>
  );
}
*/
export default App;
