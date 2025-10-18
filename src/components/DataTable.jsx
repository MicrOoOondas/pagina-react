import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver'

function DataTable() {
    const rows = [
        { id: 1, nombre: "Producto A", precio: 1200, stock: 20 },
        { id: 2, nombre: "Producto B", precio: 1900, stock: 15 },
        { id: 3, nombre: "Producto C", precio: 3000, stock: 8 },
    ];

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(rows);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook,worksheet,"Productos");
        const excelBuffer = XLSX.write(workbook,{bookType: "xlsx",type:"array"});
        const data = new Blob([excelBuffer],{type:"application/octet-stream"});
        saveAs(data,"productos.xlsx");
    };

    return(
        <section className='section'>
            <div className="container">
                <h2 className="mb-4">Tabla de Productos</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row) => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.nombre}</td>
                            <td>{row.precio}</td>
                            <td>{row.stock}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <button className='btn btn-success' onClick={exportToExcel}>Exportar a Excel</button>
            </div>
        </section>
    );
}
    export default DataTable;

