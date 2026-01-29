function Navbar() {
    return (
        <nav className="bg-white shadow p-4 flex justify-between items-center">
            <div className="text-xl font-bold text-blue-800">SOFTWARETICH</div>
            <ul className="flex gap-6 text-gray-700">
                <li>Home</li>
                <li>Products</li>
                <li>Partners</li>
                <li>Career</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;