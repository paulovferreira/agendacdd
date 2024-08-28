import '../style/style.css';
import First from "../components/first";
import Header from "../components/header";
import Slide from "../components/slide";

function Missionario () {
    return(
        <div className="app-container">
        <Header />
        <div className="main-content">
          <Slide />
          <div className="content">
            Cadastro de Missionários
          </div>
        </div>
      </div>
    )
}

export default Missionario;