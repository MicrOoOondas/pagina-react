import ProductCard from "./ProductCard.jsx";
import {products} from '../data/productos.js';

function Products()
{
    return(
        <section id="productos" className="section">
            <div className="container">
                <div className="row g-4">
                    {products.map(
                        (prod) => (
                            <div className="col-sm-6 col-md-4 col-lg-3" key={prod.id}>
                                <ProductCard product={prod}/>    
                            </div>
                        )
                    )

                    }
                </div>
            </div>
        </section>
    );
}

export default Products;