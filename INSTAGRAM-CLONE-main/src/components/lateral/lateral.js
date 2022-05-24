import './lateral.css';
import Open from './Foto1.png'
import Foto2 from './Foto2.png'
import Foto3 from './Foto3.png'
import Foto4 from './Foto4.png'
import Foto5 from './Foto5.png'

function Lateral(){
    return(
       <div className='perfil'>
           <div className='barra1'>
            <img src={Open} />
            <h3>bryan_belum</h3>
            <button><h4>Mudar</h4></button>
           </div>
           <div className='barra2'>
               <span>Sugestões para ti</span>
               <button><h4>Ver todas</h4></button>
           </div>
           <div className='barra3'>
            <img src={Foto2} />
            <h3>madu_serafim</h3>
            <button><h4>Seguir</h4></button>
           </div>
           <div className='barra3'>
            <img src={Foto3} />
            <h3>clebs_henrique</h3>
            <button><h4>Seguir</h4></button>
           </div>
           <div className='barra3'>
            <img src={Foto4} />
            <h3>brito_matheus</h3>
            <button><h4>Seguir</h4></button>
           </div>
           <div className='barra3'>
            <img src={Foto5} />
            <h3>pereira_dani</h3>
            <button><h4>Seguir</h4></button>
           </div>
       </div>
    )
}
export default Lateral