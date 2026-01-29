import {
    Phone,
    Mail,
    MapPin,
    CheckCircle,
    Hammer,
    Home,
    Droplets,
    Palette
} from "lucide-react";


import "./AuthForm.css";

function AuthForm() {


    const services = [
        {
            icon: <Palette />,
            title: "Vloeren",
            description: "Keramische tegels, marmer, natuursteen en laminaat",
            image: "/logo/ARD.jpg"
        },
        {
            icon: <Home />,
            title: "Terrassen & Klinkers",
            description: "Tuinpaden en opritten van hoogwaardige materialen",
            image: "/logo/ARRD.jpg"
        },
        {
            icon: <Droplets />,
            title: "Badkamerrenovatie",
            description: "Volledige renovatie van A tot Z",
            image: "/logo/DR1.jpg"
        },
        {
            icon: <Hammer />,
            title: "Gevels & Bouwwerken",
            description: "Natuursteen gevels en diverse afwerkingswerken",
            image: "/logo/AZ2.jpg"
        }
    ];

    const qualities = [
        "Meer dan 15 jaar ervaring",
        "Actief in heel België",
        "Ervaren en gemotiveerd team",
        "Oog voor detail en kwaliteit",
        "Stiptheid en vakmanschap",
        "100% klanttevredenheid"
    ];

    return (
        <div className="app">
            {/* NAVBAR */}
            <nav className="navbar">
                <div className="nav-left">
                    <img src="/logo/logo1.jpg" alt="Logo" className="logo" />
                    <div className="brand">
                        <h1>A&G Vloeren Werken</h1>
                        <span>Ervaring, kwaliteit & betrouwbaarheid</span>
                    </div>
                </div>

                <a href="#contact" className="call-btn">
                    <Phone size={18} /> Contact
                </a>
            </nav>

            {/* HERO */}
            <header className="hero">
                <div className="hero-content">
                    <h2>Uw partner in vloer- en bouwwerken</h2>
                    <p>
                        Professionele oplossingen met duurzame materialen et
                        vakmanschap reconnu in heel België.
                    </p>

                    <div className="hero-actions">
                        <a href="#contact" className="btn primary">Offerte aanvragen</a>
                        <a href="#diensten" className="btn outline">Onze diensten</a>
                    </div>
                </div>
            </header>

            {/* QUALITIES */}
            <section className="qualities">
                {qualities.map((q, i) => (
                    <div key={i} className="quality">
                        <CheckCircle size={20} />
                        <span>{q}</span>
                    </div>
                ))}
            </section>

            {/* SERVICES */}
            <section id="diensten" className="services">
                <div className="section-header">
                    <h2>Onze Diensten</h2>
                    <p>Hoogwaardige oplossingen op maat van uw project</p>
                </div>

                <div className="service-grid">
                    {services.map((s, i) => (
                        <div key={i} className="service-card">
                            <img src={s.image} alt={s.title} />
                            <div className="service-content">
                                <div className="service-icon">{s.icon}</div>
                                <h3>{s.title}</h3>
                                <p>{s.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CONTACT */}
            {/* CONTACT */}
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


            {/* FOOTER */}
            <footer className="footer">
                <p>© 2024 A&G Vloeren Werken — Tous droits réservés</p>
            </footer>
        </div>
    );
}

export default AuthForm;






