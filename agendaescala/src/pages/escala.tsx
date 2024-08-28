import '../style/style.css';
import First from "../components/first";
import Header from "../components/header";
import Slide from "../components/slide";

function Escala () {
    return(
        <div className="app-container">
        <Header />
        <div className="main-content">
          <Slide />
          <div className="content">
            Cadastro de Escalas
          </div>
        </div>
      </div>
    )
}

export default Escala;