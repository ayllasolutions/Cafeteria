import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'



//Estilos
import '../App.css';
import { ArrowRightSquareFill } from 'react-bootstrap-icons';
import { ArrowRightCircleFill } from 'react-bootstrap-icons';

//Multimedia


//Componentes

export class Headerapp extends React.Component {
    render() {
        return (
            <div className='sshheaderapp'>
                <div className='sshheaderContainer'>
                    <div className='sshheaderImg'>
                        
                    </div>
                    <div className='sshheaderDesc'>
                        <div className='sshheaderDescTit'>
                            <h1>Sistema de cafeteria</h1>
                        </div>
                        <div className='sshheaderDescItems'>
                            <ul>
                                <li><ArrowRightCircleFill/>
                                        <Link to={'/'}>
                                            <span className='badge bg-secundary'>Home</span>
                                        </Link>
                                </li>
                                <li><ArrowRightCircleFill/>
                                        <Link to={'/Productos'}>
                                            <span className='badge bg-secundary'>Productos</span>
                                        </Link>
                                </li>
                                <li><ArrowRightCircleFill/>
                                        <Link to={'/Clientes'}>
                                            <span className='badge bg-secundary'>Clientes</span>
                                        </Link>
                                </li>
                                <li><ArrowRightCircleFill/>
                                        <Link to={'/Ventas'}>
                                            <span className='badge bg-secundary'>Ventas</span>
                                        </Link>
                                </li>
                            </ul>

                        </div>
                    </div>   
                </div>
            </div>
        );
    }
}