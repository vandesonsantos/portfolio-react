import "./social-networks.css"
import "./responsive.css"

const SocialNetworks = () => {
    return (
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
    )
}

export default SocialNetworks