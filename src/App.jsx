import "./components/social-networks/header.css"
import "./components/social-networks/home.css"
import SocialNetworks from "./components/social-networks/social-networks"

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

                    <SocialNetworks />
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
