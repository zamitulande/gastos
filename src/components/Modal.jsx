import cerrarBTN from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal}) => {

    const ocultaModal =()=>{
       
       setAnimarModal(false)

       setTimeout(()=>{
        setModal(false)
       },500)
    }
    return (
        <div className='modal'>
           <div className='cerrar-modal'>
                <img src={cerrarBTN} 
                     alt="cerrar modal"
                     onClick={ocultaModal} />
           </div>
           <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
                    <legend>Nuevo Gasto</legend>
                    
                    <div className='campo'>
                        <label htmlFor="nombre">Nombre Gasto</label>

                        <input 
                            id='nombre'
                            type="text" 
                            placeholder='Añade el gasto'
                            />                      
                    </div>
                    <div className='campo'>
                        <label htmlFor="cantidad">Cantidad</label>

                        <input 
                            id='cantidad'
                            type="number" 
                            placeholder='Añade la canitdad del gasto: ej. 200'
                            />                      
                    </div>
                    <div className='campo'>
                        <label htmlFor="categoria">Categoria</label>

                        <select 
                            id='categoria'
                        >   
                        <option value="">--Selecciones--</option>
                        <option value="ahorro">Ahorro-</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos</option>
                        <option value="salud">Salud</option>
                        <option value="subcripciones">subcripciones</option>
                        </select>                  
                    </div>
                    <input type="submit" value='añadir gasto'/>
           </form>
        </div>
    )
}

export default Modal
