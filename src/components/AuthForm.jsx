function Footer() {
    return (
        <footer className="bg-blue-900 text-white p-6 mt-10">
            <div className="flex flex-col md:flex-row justify-between gap-4">
                <div>
                    <h3 className="font-bold">SOFTWARETICH</h3>
                    <p>Rue Dakar, IMM N°5, APP N°1, Rabat</p>
                    <p>Tibari@softwaretich.com</p>
                    <p>+212665-0707-75</p>
                </div>
                <div>
                    <h4 className="font-semibold">Links</h4>
                    <ul className="space-y-1">
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Career</li>
                    </ul>
                </div>
            </div>
            <p className="text-center mt-6 text-sm">© 2025 SOFTWARETICH. All rights reserved.</p>
        </footer>
    );
}

export default Footer;