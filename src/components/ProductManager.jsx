import { useState,useEffect } from "react";

function ProductManager(){
    const [products, setProducts] =useState([]);
    const [formData,setFormData] =useState({
        id:"",
        name:"",
        description:"",
        price:"",
    });
    const [isEditing, setIsEditing] = useState(false);
    const API_URL = "http://localhost:8090/api/products";
    useEffect(
        () => {
            fetchProducts()
        },[]
    );

    const fetchProducts = async () => {
        try{
            const response = await fetch(API_URL);
            const data = await response.json();
            setProducts(data);
        }catch(error)
        {
            console.error("Error al cargar los productos: ", error);
        }
    };

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({...formData,[name]:value});
    };

    const handleCreate = async () => {
        try{
            const response = await fetch(API_URL,{
                method:"POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(
                    {
                        name: formData.name,
                        description:formData.description,
                        price: parseFloat(formData.price),
                    }
                ),
            });
            if(response.ok){
                alert('Producto alamcenado correctamente');
                setFormData({
                    id:"",
                    name:"",
                    description:"",
                    price:"",
                });
                fetchProducts();
            }
        }catch(error)
        {
            console.error("Ups!! ocurrió un error al grabar producto: ",error);
        }
    };

    const handleEdit = (product) => {
        setFormData(product);
        setIsEditing(true);
    }

    const handleUpdate = async () => {
        try{
            const response = await fetch(`${API_URL}/${formData.id}`,{
                method:"PUT",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(
                    {
                        name: formData.name,
                        description:formData.description,
                        price: parseFloat(formData.price),
                    }
                ),
            });
            if(response.ok){
                alert('Producto modificado correctamente');
                setIsEditing(false);
                setFormData({
                    id:"",
                    name:"",
                    description:"",
                    price:"",
                });
                fetchProducts();
            }
        }catch(error)
        {
            console.error("Ups!! ocurrió un error al modificar producto: ",error);
        }
    };

    const handleDelete = async (id) => {
        if(!window.confirm("Está seguro de eliminar el producto??")) return;
        try{
            const response = await fetch(`${API_URL}/${id}`,{
                method:"DELETE",
            });
            if(response.ok){
                alert('Producto eliminado correctamente');
                fetchProducts();
            }
        }catch(error)
        {
            console.error("Ups!! ocurrió un error al eliminar producto: ",error);
        }
    };

    return(
        <div className="container mt-4">
            <h2 className="text-center  mb-4">Mantenedor de Productos</h2>

            <div className="card p-3 mb-4">
                <h5>{isEditing? "Editar Producto":"Nuevo Producto"}</h5>
                <div className="row">
                    <div className="col-md-4">
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" 
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Ej: Notebook Lenovo"
                        />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="description">Descripcion:</label>
                        <input type="text" 
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Ej: Ryzen 9, 32GB RAM, 2TB SSD"
                        />
                    </div>

                    
                    <div className="col-md-4">
                        <label htmlFor="price">Descripcion:</label>
                        <input type="number" 
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="form-control"
                           
                        />
                    </div>
                </div>
                <div className="mt-3 text-end">
                    {isEditing?
                        ( <button onClick={handleUpdate} className="btn btn-warning me-2">Actualizar</button> ):
                        (<button onClick={handleCreate} className="btn btn-primary me-2">Crear</button>)
                    }
                    <button onClick={() => { setIsEditing(false);
                                setFormData({
                    id:"",
                    name:"",
                    description:"",
                    price:"",
                });}}
                className="btn btn-secondary">Limpiar</button>
                </div>
            </div>

            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((p) => 
                        (<tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.description}</td>
                            <td>{p.price}</td>
                            <td>
                                <button onClick={() => handleEdit(p)}
                                    className="btn btn-sm btn-warning me-2">Editar</button>
                                <button
                                    onClick={() => handleDelete(p.id)}
                                    className="btn btn-sm btn-danger">
                                    Eliminar
                                </button>
                            </td>
                        </tr>)
                    )}
                </tbody>
            </table>
        </div>
    );


}

export default ProductManager;