import React, {useEffect, useState} from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import '../App.css';
function Bodyappclientesbody(props){
    const [nombre, setNombre] = useState();
    const [apellido, setApellido] = useState();
    const [rut, setRut] = useState();
    const [tituloAlert, setTituloAlert] = useState('')
    const [textoAlert, setTextoAlert] = useState('')
    const [claseAlert, setClaseAlert] = useState('')
    const [alert, setAlert] = useState(false);
    const [show, setShow] = useState(false);

    let statuscall = '' 
    const navigate = useNavigate();

    const changeHandlerNombre = async (e) =>{
        setNombre(e.target.value)
    }

    const changeHandlerApellido = async (e) =>{
        setApellido(e.target.value)
    }    

    const changeHandlerRut = async (e) =>{
        setRut(e.target.value)
    }

    const creaCliente = async (e) =>{
        const data = {   
            nombre:nombre,
            apellido:apellido,
            rut:rut
        }

        const crearVenta = await Axios.post("http://localhost:3002/cliente/crear", data, {
            timeout: 30000,
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods': 'GET, POST',
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        }).then(res => statuscall = res).catch(err => statuscall = err.response)
        if(statuscall.status == 200)
        {
            setTituloAlert('Crear Cliente')
            setTextoAlert('Cliente creado')
            setClaseAlert('success')
            setAlert(true)
            setTimeout(() =>{
                setAlert(false)
            }, 3000)
        }else{
            setTituloAlert('Crear Cliente')
            setTextoAlert('Error al crear cliente: ' + statuscall)
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
                    <h1>Clientes</h1>
                </div>
                <div className='row'>
                    <h2>Ingresar cliente</h2>
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
                        Apellido:
                    </div>
                    <div className='col col-lg-8'>
                        <input value={apellido} onChange={changeHandlerApellido} className='safiltercontrols' type='text'></input>
                    </div>
                </div>

                <div className='row'>
                    <div className='col col-lg-4'>
                        Rut:
                    </div>
                    <div className='col col-lg-8'>
                        <input value={rut} onChange={changeHandlerRut} className='safiltercontrols' type='text'></input>
                    </div>
                </div>

                <div className='row'>                
                    <div className='col col-lg-4'>
                    </div>
                    <div className='col col-lg-8'>
                        <button onClick={creaCliente} className='safiltercontrols'>Guardar</button>
                    </div>                                                            
                </div>
                
            </div>
        </div>              
    )

}
export default Bodyappclientesbody