function ProductCard({product})
{
    return(
        <div className="card h-100 shadow-sm">
            <img src={product.img} alt={product.name} 
            className="card-im-top"/>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.desc}</p>
            </div>
        </div>
    );
}

export default ProductCard;