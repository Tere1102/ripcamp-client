import './HomePage.css'

import idea from './../../assets/iconos/bombilla.png'
import mano from './../../assets/iconos/manos.png'
import ajustes from './../../assets/iconos/ajustes.png'
import perspectiveDeveloper from './../../assets/images/perspectiveDeveloper.png'

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

const HomePage = () => {

    const finalText = '"Welcome to Ingeina Bootcamp"';
    const [typedText, setTypedText] = useState("");

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setTypedText(finalText.slice(0, index + 1));
            index++;
            if (index === finalText.length) {
                clearInterval(interval);
            }
        }, 80);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='home'>
            
         
            <article className="terminal">
                <div className="terminal__content">
                    <pre>
                        <code className="terminal__code">
                            <span className="code-bracket">{"{"}</span>
                            <br />
                            <span className="code-function">print</span>
                            <span>(</span>
                            <span className="code-old">"Hola mundo"</span>
                            <br />
                            <span className="code-new">{typedText}</span>
                            <span>)</span>
                            <br />
                            <span className="code-bracket">{"}"}</span>
                        </code>
                    </pre>
                </div>

                <div className="terminal__image-container">
                    <img
                        src={perspectiveDeveloper}
                        className="terminal__img"
                        alt="Developer Perspective"
                    />
                </div>
            </article>

           
            <article className='carousel-section'>
                <Carousel data-bs-theme="light" interval={5000} className="custom-carousel">
                    
                    <Carousel.Item className="carousel-item-custom">
                        <div className="carousel-spacer"></div> {/* Espaciador para altura */}
                        <Carousel.Caption className="carousel-caption-custom">
                            <div className="caption-content">
                                <Link className="text-link" to="/projects">
                                    <h1>Projects</h1>
                                </Link>
                                <p>Explore technical requirements for web and data projects, gaining insights into the skills and tools needed to complete them successfully.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className="carousel-item-custom">
                        <div className="carousel-spacer"></div>
                        <Carousel.Caption className="carousel-caption-custom">
                            <div className="caption-content">
                                <Link className="text-link" to="/alumni">
                                    <h1>Alumni List</h1>
                                </Link>
                                <p>Discover alumni who completed the bootcamp and connect with them for support, guidance, and insights into their experiences.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </article>

            
            <article className="ecosystem">
                <h2 className="ecosystem__title">The Ingeina Ecosystem</h2>

                <div className="ecosystem__grid">
                    <div className="ecosystem__card">
                        <img src={idea} className="ecosystem__icon" alt="Continuous Innovation" />
                        <h3 className="ecosystem__card-title">Continuous Innovation</h3>
                        <p className="ecosystem__card-desc">
                            Up-to-date programs aligned with the latest technologies and industry best practices.
                        </p>
                    </div>

                    <div className="ecosystem__card">
                        <img src={mano} className="ecosystem__icon" alt="Professional Connections" />
                        <h3 className="ecosystem__card-title">Professional Connections</h3>
                        <p className="ecosystem__card-desc">
                            An active network of alumni and mentors supporting students throughout their learning journey.
                        </p>
                    </div>

                    <div className="ecosystem__card">
                        <img src={ajustes} className="ecosystem__icon" alt="Hands-on Learning" />
                        <h3 className="ecosystem__card-title">Hands-on Learning</h3>
                        <p className="ecosystem__card-desc">
                            A project-based methodology focused on real-world problem solving and practical experience.
                        </p>
                    </div>
                </div>
            </article>

        </div>
    )
}

export default HomePage