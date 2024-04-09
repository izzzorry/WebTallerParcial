import Encabezado from "./Encabezado";
import Recuadro from "./Recuadro";
import './Homeestilo.css';
import Footer from "./Footer";

export function Home() {
  const Categoria = ['Peliculas', 'Series'];
  return (
    <>
      <Encabezado />
      <div className="body">
      <Recuadro categoria={Categoria[0]}/>
      <Recuadro categoria={Categoria[1]}/>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
