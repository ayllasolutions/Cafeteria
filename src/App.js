import React from 'react'
import logo from './logo.svg';
import './App.css';
import { Bodyapp} from './componentes/bodyapp'
import { Bodyappproductos} from './componentes/bodyappproductos'
import { Bodyappventas} from './componentes/bodyappventas'
import { Bodyappclientes} from './componentes/bodyappclientes'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

class App extends React.Component {

render(){
  return ( 
    <Router>
      <Routes>
        <Route path='/' 
            element={<Bodyapp/>} exact/>

        <Route 
            path='/Productos'
              element={<Bodyappproductos/>} exact/>

        <Route 
            path='/Clientes' 
              element={<Bodyappclientes />} exact/>

        <Route 
            path='/Ventas' 
              element={<Bodyappventas />} exact/>
      </Routes>
    </Router>
    
  );
}
}

export default App;
