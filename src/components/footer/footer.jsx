import "./footer.css"
import SocialNetworks from "../social-networks/social-networks"

const Footer = () => {
    return (
        <section className="footer">
        <div className="conteiner">
            <h2>Me envie uma mensagem!</h2>

            <SocialNetworks />
        </div>
    </section>
    )
}

export default Footer