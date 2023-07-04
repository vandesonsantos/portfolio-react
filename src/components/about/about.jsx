import "./about.css"
import FotoPerfil from "../../image/foto-perfil.png"

const About = () => {
    return(
        <section className="sobre-mim section" id="sobre-mim">
            <div className="conteiner">
                
                <div className="display-flex">
                    <div className="section-title">
                        <h2>Sobre mim</h2>
                    </div>
                </div>
            
                <div className="display-flex">
                    <div className="img-sobre-mim">
                        <div className="img-box inner-shadow">
                            <img className="outer-shadow" src={FotoPerfil} alt="Foto Perfil" />
                        </div>
                    </div>

                    <div className="infor-sobre-mim">
                        <p><strong>Olá! Meu nome é Vandeson Santos e sou um desenvolvedor frontend</strong> apaixonado por criar interfaces de usuário dinâmicas e envolventes. Tenho experiência em HTML, CSS e JavaScript, além de estar sempre comprometido em aprender novas tecnologias para aprimorar minhas habilidades de desenvolvimento.</p>

                        <p>Eu estou constantemente me desafiando com novos projetos e participando de comunidades de programação, a fim de buscar feedback de outros desenvolvedores(as) e, ao mesmo tempo, ajudá-los com o meu conhecimento prévio.</p>

                        <p>Tenho habilidades em trabalhar de forma colaborativa em equipe e sempre busco maneiras de aprimorar minha eficácia como desenvolvedor(a) frontend.</p>

                        <div className="botoes">
                            <a className="botao outer-shadow" href="https://drive.google.com/file/d/1tzDvCqpHG6DFxp7_q2mN-NI4sSZuWXb0/view?usp=sharing" target="_blank" rel="noreferrer">Veja meu CV</a>
                        </div>
                    </div>
                </div>
            </div>        
        </section>
    )
}

export default About