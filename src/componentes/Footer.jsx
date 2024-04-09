import './Footerestilos.css';

function Footer(){
    return(
    <div className='footer'>
        <div className="Menu">
        <ul>
            <li><a href="#"></a>Inicio</li>
            <li><a href="#"></a>Terminos y Condiciones</li>
            <li><a href="#"></a>Politicas de Privacidad</li>
            <li><a href="#"></a>Declaración de Cobro</li>
            <li><a href="#"></a>Ayuda</li>
            <li><a href="#"></a>Administrar Cuenta</li>
        </ul>
        </div>
        <p>Copyright (c) 2024 MovIsita.com. Todos los derechos reservados.</p> 
       

        <div className="redes">
            <ul >
        <li><a href="#"><img src="src\assets\facebook-white.svg"></img></a></li>
        <li><a href="#"><img src="src\assets\twitter-white.svg"></img></a></li>
        <li><a href="#"><img src="src\assets\instagram-white.svg"></img></a></li>
         </ul>
         </div>
         <div className="aplicativo">
        <ul>
         <li><a href="#"><img src="src\assets\app-store.svg"></img></a></li>
         <li><a href="#"><img src="src\assets\play-store.svg"></img></a></li>
         <li><a href="#"><img src="src\assets\windows-store.svg"></img></a></li>
        </ul>
        </div>
        
        
            
    </div>
    
        

    
    )
  }
  export default Footer; 