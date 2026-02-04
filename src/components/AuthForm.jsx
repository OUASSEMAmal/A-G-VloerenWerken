import React, { useState } from "react";
import {
    Phone,
    Mail,
    MapPin,
    CheckCircle,
    Hammer,
    Home,
    Droplets,
    Palette,
    Instagram,
    Facebook,
} from "lucide-react";

import "./AuthForm.css";

function AuthForm() {
    const services = [
        {
            icon: <Palette />,
            title: "Vloeren",
            description: "Keramische tegels, marmer, natuursteen en laminaat",
            images: ["/logo/ARD.jpg", "/logo/ARD1.jpg", "/logo/ARD2.jpg"],
        },
        {
            icon: <Home />,
            title: "Terrassen & Klinkers",
            description: "Tuinpaden en opritten van hoogwaardige materialen",
            images: ["/logo/ARRD.jpg", "/logo/ARRD1.jpg", "/logo/ARD3.jpg", "/logo/ARD4.jpg"],
        },
        {
            icon: <Droplets />,
            title: "Badkamerrenovatie",
            description: "Volledige renovatie van A tot Z",
            images: ["/logo/DR1.jpg", "/logo/DR2.jpg", "/logo/DR3.jpg" ,"/logo/DR4.jpg"],
        },
        {
            icon: <Hammer />,
            title: "Gevels & Bouwwerken",
            description: "Natuursteen gevels en diverse afwerkingswerken",
            images: ["/logo/AZ6.jpg", "/logo/AZ2.jpg", "/logo/AZ3.jpg", "/logo/AZ4.jpg"],
        },
    ];

    const qualities = [
        "Meer dan 15 jaar ervaring",
        "Actief in heel België",
        "Ervaren en gemotiveerd team",
        "Oog voor detail en kwaliteit",
        "Stiptheid en vakmanschap",
        "100% klanttevredenheid",
    ];

    // --- Carousel state: 1 index per service ---
    const [activeImg, setActiveImg] = useState(Array(services.length).fill(0));

    const nextImg = (serviceIndex) => {
        setActiveImg((prev) => {
            const copy = [...prev];
            const len = services[serviceIndex].images.length;
            copy[serviceIndex] = (copy[serviceIndex] + 1) % len;
            return copy;
        });
    };

    const prevImg = (serviceIndex) => {
        setActiveImg((prev) => {
            const copy = [...prev];
            const len = services[serviceIndex].images.length;
            copy[serviceIndex] = (copy[serviceIndex] - 1 + len) % len;
            return copy;
        });
    };

    const goToImg = (serviceIndex, imgIndex) => {
        setActiveImg((prev) => {
            const copy = [...prev];
            copy[serviceIndex] = imgIndex;
            return copy;
        });
    };

    return (
        <div className="app">
            {/* ================= NAVBAR ================= */}
            <nav className="navbar">
                <div className="nav-left">
                    <img src="/logo/logo1.jpg" alt="A&G Vloeren Werken" className="logo" />
                    <div className="brand">
                        <h1>A&G Vloeren Werken</h1>
                        <span>Ervaring, kwaliteit & betrouwbaarheid</span>
                    </div>
                </div>

                <div className="nav-actions">
                    <a href="#contact" className="call-btn">
                        <Phone size={18} /> Contact
                    </a>

                    <a
                        href="https://www.instagram.com/ammaralmuhadas?igsh=MTl5NGZzYmFvOXExZw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-nav"
                        aria-label="Instagram"
                    >
                        <Instagram size={20} />
                    </a>

                    <a
                        href="https://www.facebook.com/share/18zCM4PyoF/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-nav"
                        aria-label="Facebook"
                    >
                        <Facebook size={20} />
                    </a>
                </div>
            </nav>

            {/* ================= HERO ================= */}
            <header className="hero">
                <div className="hero-content">
                    <h2>Uw partner in vloer- en bouwwerken</h2>
                    <p>
                        Professionele oplossingen met duurzame materialen en erkend vakmanschap in heel België.
                        Professionele vloerwerken, badkamerrenovatie, terrassen & gevelwerken met duurzame materialen in heel België.
                    </p>

                    <div className="hero-actions">
                        <a href="#contact" className="btn primary">
                            Offerte aanvragen
                        </a>
                        <a href="#diensten" className="btn outline">
                            Onze diensten
                        </a>
                    </div>
                </div>
            </header>

            {/* ================= QUALITIES ================= */}
            <section className="qualities">
                {qualities.map((q, i) => (
                    <div key={i} className="quality">
                        <CheckCircle size={20} />
                        <span>{q}</span>
                    </div>
                ))}
            </section>

            {/* ================= SERVICES ================= */}
            <section id="diensten" className="services">
                <div className="section-header">
                    <h2>Onze Diensten</h2>
                    <p>Hoogwaardige oplossingen op maat van uw project</p>
                </div>

                <div className="service-grid">
                    {services.map((service, i) => (
                        <div key={i} className="service-card">
                            {/* CAROUSEL */}
                            <div className="service-images">
                                <button
                                    type="button"
                                    className="img-nav left"
                                    onClick={() => prevImg(i)}
                                    aria-label="Vorige afbeelding"
                                >
                                    ‹
                                </button>

                                <img
                                    className="service-main-img"
                                    src={service.images[activeImg[i]]}
                                    alt={`${service.title} ${activeImg[i] + 1}`}
                                />

                                <button
                                    type="button"
                                    className="img-nav right"
                                    onClick={() => nextImg(i)}
                                    aria-label="Volgende afbeelding"
                                >
                                    ›
                                </button>

                                <div className="img-dots" aria-label="Afbeeldingen">
                                    {service.images.map((_, idx) => (
                                        <span
                                            key={idx}
                                            className={`dot ${idx === activeImg[i] ? "active" : ""}`}
                                            onClick={() => goToImg(i, idx)}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="service-content">
                                <div className="service-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= CONTACT ================= */}
            <section id="contact" className="contact">
                <div className="section-header">
                    <h2>Contacteer Ons</h2>
                    <p>Wij beantwoorden uw aanvraag binnen 24 uur</p>
                </div>

                <div className="contact-grid">
                    <a href="tel:+32476831552" className="contact-card">
                        <Phone /> 0476 83 15 52
                    </a>

                    <a href="mailto:info@agvloerder.be" className="contact-card">
                        <Mail /> info@agvloerder.be
                    </a>

                    <div className="contact-card">
                        <MapPin /> Donystraat 89
                    </div>
                </div>
            </section>

            {/* ================= FOOTER ================= */}
            <footer className="footer">
                <p>© 2024 A&G Vloeren Werken — Tous droits réservés</p>
            </footer>
        </div>
    );
}

export default AuthForm;









