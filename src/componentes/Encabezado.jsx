
import './Encabezadoestilo.css';
import { Link } from 'react-router-dom';

function Encabezado() {
    return (
        <><header>
            <Link to="/" className="Logo"><img src="src\assets\Iin.svg" alt="Logo"></img><span>MovIsita</span>.com</Link>
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