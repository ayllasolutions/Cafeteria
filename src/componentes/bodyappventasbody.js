import React, {useEffect, useState} from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import '../App.css';

function Bodyappventasbody(props){
    const [venta, setVenta] = useState([]);
    const [ventadb, setVentadb] = useState([]);
    const [cliente, setCliente] = useState([]);
    const [producto, setProducto] = useState([]);
    const [productoid, setProductoId] = useState();
    const [nombre, setNombre] = useState();
    const [precio, setPrecio] = useState(0);
    const [cantidad, setCantidad] = useState(0);
    const [total, setTotal] = useState(0);
    const [idcliente, setIdCliente] = useState();
    
    const [tituloAlertActivate, setTituloAlertActivate] = useState('')
    const [textoAlertActivate, setTextoAlertActivate] = useState('')
    const [claseAlertActivate, setClaseAlertActivate] = useState('')
    const [alertActivate, setAlertActivate] = useState(false);
    const [showactivar, setShowactivar] = useState(false);
    const [show, setShow] = useState(false);
       

    const navigate = useNavigate();

    let statuscall = '' 
    let nkey = 0

    const dataCliente = cliente.map((item, i) => 
        <option key={i} value={item.id}>{item.nombre}</option>);

    const dataProducto = producto.map((item, i) => 
        <option key={i} nombre={item.nombre} precio={item.precio} value={item.id}>{item.nombre}</option>);

    const clickHandler =  () =>{
        if(cantidad>0)
        {
            let subtotal = precio * cantidad
            let ventaAux = []
            ventaAux.push(venta)
            let line = <div className='row cltkLineGrilla'><div className='col col-xl-3 col-lg-3 col-md-3 col-sm-3'>{nombre}</div><div className='col col-xl-2 col-lg-2 col-md-2 col-sm-2'>{precio}</div><div className='col col-xl-2 col-lg-2 col-md-2 col-sm-2'>{cantidad}</div><div className='col col-xl-2 col-lg-2 col-md-2 col-sm-2'>{subtotal}</div><div className='col col-xl-3 col-lg-3 col-md-3 col-sm-3'><button onClick={() => clickHandlerEliminaProducto()}>Eliminar</button></div></div>        
            ventaAux.push(line)
            setVenta(ventaAux)

            let ventaDBAux = ventadb
            let lineDB = {"nombre":nombre, "producto_id": productoid, "precio":precio, "cantidad":cantidad, "subtotal":subtotal}
            ventaDBAux.push(lineDB)
            setVentadb(ventaDBAux)
            console.log(ventadb)

            setTotal(total + subtotal)
            setCantidad(0)
        }
    }

    const clickHandlerEliminaProducto = () =>{
        
        console.log(venta)
        //for(let item of venta)
        //{
          //  console.log(item)
        //}
        //let ventaAux = []
        //ventaAux = venta.find(element => element.nombre !== nombre)
        //console.log(ventaAux)
    }
    
    const changeHandlerCantidad = async (e) =>{
        setCantidad(e.target.value)
    }

    const changedHandlerProducto = async (e) =>{

        let item = producto.find(element => element.id == e.target.value)
        setNombre(item.nombre)
        setPrecio(item.precio)
        setProductoId(item.id)
        
    }

    const changedHandlerCliente = async (e) =>{
        setIdCliente(e.target.value)
    }

    const createVenta = async () =>{
        const data = {   
            cliente:idcliente,
            total:total ,
            detalle:ventadb
        }

        const crearVenta = await Axios.post("http://localhost:3002/venta", data, {
            timeout: 30000,
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods': 'GET, POST',
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        }).then(res => statuscall = res).catch(err => statuscall = err.response)
        if(statuscall.status == 200)
        {
            setTituloAlertActivate('Crear Venta')
            setTextoAlertActivate('Venta creada')
            setClaseAlertActivate('success')
            setVenta([])
            setVentadb([])
            setTotal(0)
            setCantidad(0)
            setAlertActivate(true)
            setTimeout(() =>{
                setShowactivar(false)
                setAlertActivate(false)
            }, 3000)
        }else{
            setTituloAlertActivate('Crear Venta')
            setTextoAlertActivate('Error al crear la venta')
            setClaseAlertActivate('danger')
            setVenta([])
            setVentadb([])
            setTotal(0)
            setCantidad(0)
            setAlertActivate(true)
            setTimeout(() =>{
                setShowactivar(false)
                setAlertActivate(false)
            }, 3000)            
        }
    }

    useEffect(() => {       
        Axios.get("http://localhost:3002/data", { 
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods': 'GET, POST',
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        }).then((response) => {
            setCliente(response.data.cliente);
            setProducto(response.data.producto);
        }).catch(error => {
           return error     
        });
    }, []);    

    return (
        <div className='sshbodyapp'>
            <div className='sshbodyappContainer'>
                <div className='row'>
                    <Alert variant={claseAlertActivate} onClose={() => setAlertActivate(false)} dismissible fade show>
                        <Alert.Heading>{tituloAlertActivate}</Alert.Heading>
                            <p>
                                {textoAlertActivate}
                            </p>
                            <hr></hr>
                            <p class="mb-0"><button className='btn btn-adminsaprivateRegular' onClick={() => setAlertActivate(false)}>Aceptar</button></p>    
                    </Alert>                
                </div>        
                <div className='row'>
                    <h1>Ventas</h1>
                </div>
                <div className='row'>
                    <h2>Vender</h2>
                </div>
                <div className='row'>
                    <div className='col col-lg-4'>
                        Seleccion Cliente:
                    </div>
               
                    <div className='col col-lg-8'>
                        <select className='safiltercontrols' onChange={changedHandlerCliente}>
                           <option value='0'>Seleccione Cliente</option> 
                           {dataCliente}
                        </select>
                    </div>
                </div>

                <div className='row'>
                    <div className='col col-lg-4'>
                        Seleccione Producto:
                    </div>
                    <div className='col col-lg-8 adminsaprivateRegular'>
                        <select className='safiltercontrols' onChange={changedHandlerProducto}>
                            <option value='0'>Seleccione Producto</option> 
                            {dataProducto}
                        </select>
                    </div>
                </div>

                <div className='row'>
                    <div className='col col-lg-4'>
                        Nombre:
                    </div>
                    <div className='col col-lg-8'>
                        <input className='safiltercontrols' type='text' value={nombre} disabled='true'></input>
                    </div>
                </div>

                <div className='row'>                
                    <div className='col col-lg-4'>
                        Precio:
                    </div>
                    <div className='col col-lg-8'>
                    <input type='text' className='safiltercontrols' value={precio} disabled='true'></input>
                    </div>                                                            
                </div>

                <div className='row'>                
                    <div className='col col-lg-4'>
                        Seleccione Cantidad
                    </div>
                    <div className='col col-lg-8'>
                        <input className='safiltercontrols' type='number' value={cantidad} onChange={changeHandlerCantidad} min='0' max='1000'></input>
                    </div>                                                            
                </div>

                <div className='row'>                
                    <div className='col col-lg-4'>
                        Agregar a la venta
                    </div>
                    <div className='col col-lg-8'>
                        <button className='safiltercontrols' onClick={clickHandler}>Agregar</button>
                    </div>                                                            
                </div>

                <div className='row sabackComponent'>
                        <div className='row saTitulosGrid'>
                            <div className='col col-xl-3 col-lg-3 col-md-3 col-sm-3'>Nombre</div>
                            <div className='col col-xl-2 col-lg-2 col-md-2 col-sm-2'>Precio</div>
                            <div className='col col-xl-2 col-lg-2 col-md-2 col-sm-2'>Cantidad</div>
                            <div className='col col-xl-2 col-lg-2 col-md-2 col-sm-2'>Subtotal</div>
                            <div className='col col-xl-3 col-lg-3 col-md-3 col-sm-3'>Control</div>
                        </div> 
                        <div className='row saContainerGrid'>               
                            {venta}
                        </div>
                </div>
                <div className='row sabackComponent'>
                    <h3>Total : {total}</h3> 
                </div>
                <div className='row sabackComponent'>
                    <button onClick={createVenta} className='btn btn-adminsaprivateRegular'>Crear Venta</button>
                </div>
                
            </div>
        </div>                   
    )

}
export default Bodyappventasbody