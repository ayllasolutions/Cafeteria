import React from 'react';
import '../App.css';
import { Headerapp } from '../componentes/headerapp'
import Bodyappclientesbody from './bodyappclientesbody'
import { Footerapp } from '../componentes/footerapp'

export class Bodyappclientes extends React.Component {
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
        <Bodyappclientesbody/>
        <Footerapp/>
      </div>
    );
  }
}