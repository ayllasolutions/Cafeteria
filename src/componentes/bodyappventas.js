import React from 'react';
import '../App.css';
import { Headerapp } from '../componentes/headerapp'
import Bodyappventasbody from './bodyappventasbody'
import { Footerapp } from '../componentes/footerapp'

export class Bodyappventas extends React.Component {
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
        <Bodyappventasbody/>
        <Footerapp/>
      </div>
    );
  }
}