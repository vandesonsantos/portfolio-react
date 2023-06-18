import "./header.css"

const Header = () => {
    return (
        <header className="header">
            <div className="conteiner">
                <div className="display-flex justify-content-between alinhar-itens-no-centro">
                    <a href="#">
                        <h1 className="logo">{"< />"}</h1>
                    </a>
                    
                    <nav>
                        <input id="menu-hamburguer" type="checkbox" />
                        <label htmlFor="menu-hamburguer">
                            <div className="menu">
                                <span className="hamburguer"></span>
                            </div>
                        </label>

                        <ul>
                            <li><a href="#sobre-mim">Sobre mim</a></li>
                            <li><a href="#habilidades">Habilidades</a></li>
                            <li><a href="#projetos">Meus projetos</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header