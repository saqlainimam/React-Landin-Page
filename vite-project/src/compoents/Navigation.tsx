const Navigation = () => {
    return (
        <nav className="container">
            <div className="logo">
                <img src="/imges/brand_logo.png" alt="logo" />
            </div>

            <ul>
                <li href="#">Menu</li>
                <li href="#">location</li>
                <li href="#">About</li>
                <li href="#">Cotact</li>
            </ul>

            <button>login</button>
        </nav>
    );
};

export default Navigation; 