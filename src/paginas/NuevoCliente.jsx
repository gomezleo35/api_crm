import React from 'react'
import Formulario from '../Components/Formulario'
const NuevoCliente = () => {
  return (
    <>
        <h1 className='font-black text-4xl text-blue-900'>Nuevo cliente</h1>
        <p className='mt-3 font-bold text-2xl'>Llena los siguientes campos para registrar un cliente</p>
        <Formulario/>
    </>
  )
}

export default NuevoCliente