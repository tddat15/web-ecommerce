import './styles.css';

export default function HeroSection() {
    return (
        <section className="hero-section">
            <aside className="sidebar">
                <ul>
                    <li>Woman's Fashion</li>
                    <li>Men's Fashion</li>
                    <li>Electronics</li>
                    <li>Home & Lifestyle</li>
                    <li>Medicine</li>
                    <li>Sports & Outdoor</li>
                    <li>Baby's & Toys</li>
                    <li>Groceries & Pets</li>
                    <li>Health & Beauty</li>
                </ul>
            </aside>

            <div className="banner">
                <img src="/banner.png" alt="banner"/>
            </div>
        </section>
    )
};