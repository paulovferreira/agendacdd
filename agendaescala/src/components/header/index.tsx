import '../../style/style.css';


function Header(){
    return(
        <div>
            <header className="header">
                <div className="header-content">
                    <h1>Controle de Agenda</h1>
                    <div className="header-buttons">
                    <button className="status-button">Status do Usuário</button>
                    <button className="logout-button">Sair</button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;