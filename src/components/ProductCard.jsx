function ProductCard({product})
{
    return(
        <div className="product-card">
            <img src={product.img} alt={product.name} 
            className="product-image"/>
            <div className="product-card-body">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-description">{product.desc}</p>
                <button className="add-to-cart-btn">Agregar al Carro</button>
            </div>
        </div>
    );
}

export default ProductCard;