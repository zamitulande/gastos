import { useState } from 'react'
import Mensaje from './Mensaje'

import cerrarBTN from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto}) => {
    
    const[mensaje, setMensaje]=useState('')

    const [nombre, setNombre]= useState ('')
    const [cantidad, setCantidad]= useState(0)
    const [categoria, setCategoria]= useState('')

    const ocultaModal =()=>{
       
       setAnimarModal(false)

       setTimeout(()=>{
        setModal(false)
       },500)

      }
      const handleSubmit=e=>{
        e.preventDefault();
        if([nombre, cantidad, categoria].includes('')){
            setMensaje('Todos los campos son obligatorios')

            setTimeout(()=>{
                setMensaje('')
            },2000)
            return
        }

        guardarGasto({nombre, cantidad, categoria})
    }
    return (
        <div className='modal'>
           <div className='cerrar-modal'>
                <img src={cerrarBTN} 
                     alt="cerrar modal"
                     onClick={ocultaModal} />
           </div>
           <form 
                onSubmit={handleSubmit}
           className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
                    <legend>Nuevo Gasto</legend>
                    {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
                    
                    <div className='campo'>
                        <label htmlFor="nombre">Nombre Gasto</label>

                        <input 
                            id='nombre'
                            type="text" 
                            placeholder='Añade el gasto'
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                            />                      
                    </div>
                    <div className='campo'>
                        <label htmlFor="cantidad">Cantidad</label>

                        <input 
                            id='cantidad'
                            type="number" 
                            placeholder='Añade la canitdad del gasto: ej. 200'
                            value={cantidad}
                            onChange={e => setCantidad(Number (e.target.value))}
                            />                      
                    </div>
                    <div className='campo'>
                        <label htmlFor="categoria">Categoria</label>

                        <select 
                            id='categoria'
                            value={categoria}
                            onChange={e => setCategoria(e.target.value)}
                        >   
                        <option value="">--Selecciones--</option>
                        <option value="ahorro">Ahorro-</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos</option>
                        <option value="salud">Salud</option>
                        <option value="subcripciones">subcripciones</option>
                        <option value="ocio">Ocio</option>
                        </select>                  
                    </div>
                    <input type="submit" value='añadir gasto'/>
           </form>
        </div>
    )
}

export default Modal
