import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import '../App.css';

function Bodyappproductosbody(props){
    const [nombre, setNombre] = useState();
    const [precio, setPrecio] = useState(0);
    const [codigo, setCodigo] = useState();
    const [tituloAlert, setTituloAlert] = useState('')
    const [textoAlert, setTextoAlert] = useState('')
    const [claseAlert, setClaseAlert] = useState('')
    const [alert, setAlert] = useState(false);
    const [show, setShow] = useState(false);

    const navigate = useNavigate();
    let statuscall = '' 

    const changeHandlerNombre = async (e) =>{
        setNombre(e.target.value)
    }

    const changeHandlerPrecio = async (e) =>{
        setPrecio(e.target.value)
    }
    
    const changeHandlerCodigo = async (e) =>{
        setCodigo(e.target.value)
    }

    const creaProducto = async (e) =>{
        const data = {   
            nombre:nombre,
            precio:precio,
            codigo:codigo
        }

        const crearVenta = await Axios.post("http://localhost:3002/producto/crear", data, {
            timeout: 30000,
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods': 'GET, POST',
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        }).then(res => statuscall = res).catch(err => statuscall = err.response)
        if(statuscall.status == 200)
        {
            setTituloAlert('Crear Producto')
            setTextoAlert('Producto creado')
            setClaseAlert('success')
            setAlert(true)
            setTimeout(() =>{
                setAlert(false)
            }, 3000)
        }else{
            setTituloAlert('Crear Venta')
            setTextoAlert('Error al crear la venta: ' + statuscall)
            setClaseAlert('danger')
            setAlert(true)
            setTimeout(() =>{
                setAlert(false)
            }, 3000)            
        }        
    }


    useEffect(() => {
    }, []);    

    return (
        <div className='sshbodyapp'>
            <div className='sshbodyappContainer'>   
                <div className='row'>
                    <Alert variant={claseAlert} onClose={() => setAlert(false)} dismissible fade show>
                        <Alert.Heading>{tituloAlert}</Alert.Heading>
                            <p>
                                {textoAlert}
                            </p>
                    </Alert>                
                </div>                 
                <div className='row'>
                    <h1>Poductos</h1>
                </div>
                <div className='row'>
                    <h2>Ingresar producto</h2>
                </div>
                <div className='row'>
                    <div className='col col-lg-4'>
                        Nombre:
                    </div>
               
                    <div className='col col-lg-8'>
                        <input value={nombre} onChange={changeHandlerNombre} className='safiltercontrols' type='text'></input>
                    </div>
                </div>

                <div className='row'>
                    <div className='col col-lg-4'>
                        Precio:
                    </div>
                    <div className='col col-lg-8'>
                        <input value={precio} onChange={changeHandlerPrecio} className='safiltercontrols' type='text'></input>
                    </div>
                </div>

                <div className='row'>
                    <div className='col col-lg-4'>
                        Codigo:
                    </div>
                    <div className='col col-lg-8'>
                        <input value={codigo} onChange={changeHandlerCodigo} className='safiltercontrols' type='text'></input>
                    </div>
                </div>

                <div className='row'>                
                    <div className='col col-lg-4'>
                    </div>
                    <div className='col col-lg-8'>
                        <button onClick={creaProducto} className='safiltercontrols'>Guardar</button>
                    </div>                                                            
                </div>
                
            </div>
        </div>            
    )

}
export default Bodyappproductosbody