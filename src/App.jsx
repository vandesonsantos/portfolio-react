import "./components/header/header.css"
import "./components/header/home.css"

function App() {
  return (
    <>
      <section className="home">
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

        <div className="conteiner">
            <div className="display-flex full-screen .alinhar-itens-no-centro">
                <div className="text-home">
                    <h1>Vandeson Santos</h1>
                    <h2>Desenvolvedor Frontend</h2>

                    <div className="rede-sociais">
                        <a className="outer-shadow" href="https://www.linkedin.com/in/vandeson-santos/" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a className="outer-shadow" href="https://web.whatsapp.com/send?phone=5598981353098" target="_blank" rel="noreferrer">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <a className="outer-shadow" href="https://github.com/vandesonsantos" target="_blank" rel="noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a className="outer-shadow" href="https://www.instagram.com/vandeson_santos._/" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                <div className="img-home">
                    <div className="img-box inner-shadow">
                        <img className="outer-shadow" src="src/image/foto-perfil.png" alt="foto do perfil" />
                    </div>
                </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default App
