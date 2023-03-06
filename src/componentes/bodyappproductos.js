import React from 'react';
import '../App.css';
import { Headerapp } from '../componentes/headerapp'
import Bodyappproductosbody from '../componentes/bodyappproductosbody'
import { Footerapp } from '../componentes/footerapp'

export class Bodyappproductos extends React.Component {
  constructor(props) {
    super(props);
}
state = {
    apiKey:''
}  
  render(){
    return (
      <div className="App">        
        <Headerapp/>
        <Bodyappproductosbody/>
        <Footerapp/>
      </div>
    );
  }
}