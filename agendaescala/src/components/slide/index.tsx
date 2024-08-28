import '../../style/style.css';
import { FaHome, FaCalendarAlt, FaCog, FaQuestionCircle } from 'react-icons/fa';
import { ImCircleRight } from "react-icons/im";
import { Link } from 'react-router-dom';

function Slide () {

    return (
        <aside className="sidebar">
        <ul>
          <li>
            <ImCircleRight className="icon" />
            <span> Dashboard  <Link to="/"> Home </Link>  </span>
          </li>
          <li>
            <ImCircleRight className="icon" />
            <span>Agenda</span>
          </li>
          <li>
            <ImCircleRight className="icon" />
            <span>Configurações</span>
          </li>
          <li>
            <ImCircleRight className="icon" />
            <span>Ajuda</span>
          </li>
        </ul>
      </aside>
    );
    };

export default Slide;