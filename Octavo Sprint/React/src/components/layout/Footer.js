import './footer.css'
import logo from "../../assets/images/Drink_House_SVG.svg";

function Footer() {
    return (
    <footer className='footer'>
        <div>
            <img src={logo} alt='logo' id='logo' />
        </div>
        <div className='info-container'>
            <h4>Contactanos</h4>
            <p>Telefono</p>
            <p>drinkhouse@gmail.com</p>
        </div>
        <div className='info-container'>
            <h4>Quienes somos?</h4>
            <p>Sobre nosotros</p>
            <p>Trabaja con nosotros</p>
        </div>
        <div className='info-container'>
            <h4>Como comprar?</h4>
            <p>Necesitas ayuda?</p>
            <p>Seguridad</p>
        </div>
        <div className='info-container'>
            <h4>Redes</h4>
            <p>Facebook</p>
            <p>Instagram</p>
        </div>
    </footer>
    )
}

export default Footer;