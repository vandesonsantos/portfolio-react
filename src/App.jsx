import "./components/social-networks/home.css"
import Header from "./components/header/header"
import SocialNetworks from "./components/social-networks/social-networks"

function App() {
  return (
    <>
      <section className="home">
        <Header />

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
