import {products} from '../data/productos.js';
import '../css/Products.css';
import Slider from "react-slick";
import ProductCard from "./ProductCard.jsx";

function Products()
{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 1 } }
        ]
    };

    return(
        <div className="products-page">
            <header className="hero-section">
                <h1 className="hero-title">TechCore</h1>
                <p className="hero-subtitle">
                    Tu universo de tecnología y sonido. Desde el hardware más potente para gaming hasta el equipo de audio con la más alta fidelidad, en TechCore encontrarás la pieza que te falta.
                </p>
            </header>
            
            <div className="main-content-wrapper">
                <section className="carousel-container">
                    <h2 className="products-grid-title">Nuestros Productos Destacados</h2>
                    <Slider {...settings}>
                        {products.map((prod) => (<ProductCard key={prod.id} product={prod}/>))}
                    </Slider>
                </section>
                <section className="info-section">
                    <h2 className="info-title">¿Por qué elegir TechCore?</h2>
                    <p className="info-text">Ofrecemos solo productos de alta gama, con garantía de calidad y el mejor soporte postventa. Nuestro equipo de expertos está siempre disponible para asesorarte y asegurar que tomes la mejor decisión.</p>
                </section>
            </div>
        </div>
    );
}

export default Products;