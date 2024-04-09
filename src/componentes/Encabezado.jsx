
import './Encabezadoestilo.css';

function Encabezado(){
    return(
    <><header>
            <a href="index.html" className="Logo"><img src="src\assets\Iin.svg" alt="Logo"></img><span>MovIsita</span>.com</a>
            <div className="Botones">
                <button className="login">Log in</button>
                <button className="suscripcion">Empieza tu suscripciósn</button>
            </div>
            
        </header>
        <nav className='NavAbajo'><h1>Últimas Tendencias</h1></nav>
        </>
    
    )
  }
  export default Encabezado; 