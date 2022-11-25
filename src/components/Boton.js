import React from 'react';
import '../styles/Boton.css';

class Boton extends React.Component{
  render(){
    return (
      <button
        className={ this.props.esBotonClick ? "btn-click" : "btn-reiniciar" }
        onClick={ this.props.manejarClick }
      >
        {this.props.texto}
      </button>
    );
  }
}
/*
const Boton = ({ texto, esBotonClick, manejarClick }) => {
  return (
      <button
        className={ this.props.esBotonClick ? "btn-click" : "btn-reiniciar" }
        onClick={ this.props.manejarClick }
      >
        {this.props.texto}
      </button>
    );  
};*/

export default Boton;