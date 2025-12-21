import './Footer.css'
import { Link } from 'react-router-dom'

import Ingeina from './../../assets/logo/Ingeina-bg-naranja.png'



const Footer = () => {

    // Función auxiliar para subir arriba al clicar
    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer__container">

                {/* 1. Branding (Izquierda en PC/Tablet, Arriba en Móvil) */}
                <div className="footer__brand">
                    <img
                        src={Ingeina}
                        alt="Ingeina logo"
                        className="footer__logo"
                    />
                    <h1 className="footer__title">Ingeina</h1>
                </div>

                {/* 2. Navegación (Derecha en PC/Tablet, Abajo en Móvil) */}
                <nav className="footer__nav">
                    <ul className="footer__list">
                        <li className="footer__item">
                            <Link className='footer__link' to="/" onClick={handleScrollTop}>
                                Home
                            </Link>
                        </li>
                        <li className="footer__item">
                            <Link className='footer__link' to="/projects" onClick={handleScrollTop}>
                                Projects
                            </Link>
                        </li>
                        <li className="footer__item">
                            <Link className='footer__link' to="/alumni" onClick={handleScrollTop}>
                                Alumni
                            </Link>
                        </li>
                        <li className="footer__item">
                            <Link className='footer__link' to="/about" onClick={handleScrollTop}>
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </footer>
    )
}

export default Footer;