import React from "react";

function DataTableProductos({data}){
    const columns = data[0] && Object.keys(data[0])
    
    return (
        <table cellPadding={0} cellSpacing={0}>
            
            <thead>
                <tr className="contenedorCampos">{data[0] && columns.map((heading) => <tr className="campos">{heading}</tr>)}</tr>
            </thead>
        <tbody>
            {data.map((row => <tr className="contenedorDatos">
                {
                    columns.map((column => 
                        {if (column === "imagen_producto"){
                            return <td className="contenedor-imagen-producto-listado"> <img className="imagen-producto-listado" src={`../assets${row[column]}`} alt={`../assets${row[column]}`} /> </td>
                        }else{
                            return <td className="datos">{row[column]}</td>
                        }
                        
                    }
                    
                ))}
            </tr>
            ))}
        </tbody>
    </table>
    );
}

export default DataTableProductos