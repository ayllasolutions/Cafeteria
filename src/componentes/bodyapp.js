import React from 'react';
import '../App.css';
import { Headerapp } from '../componentes/headerapp'
import { Bodyappbody} from './bodyappbody.js'
import { Footerapp } from '../componentes/footerapp'

export class Bodyapp extends React.Component {
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
        <Bodyappbody/>
        <Footerapp/>
      </div>
    );
  }
}