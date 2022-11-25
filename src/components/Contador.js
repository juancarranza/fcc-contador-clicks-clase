import React from "react";
import '../styles/Contador.css';

class Contador extends React.Component{
  render(){
    return(
      <div className="contador">
        { this.props.contadorClicks }
      </div>    
    );
  }
}

/*
function Contador(props){
  return(
    <div className="contador">
      { props.contadorClicks }
    </div>    
  );
}*/

export default Contador;