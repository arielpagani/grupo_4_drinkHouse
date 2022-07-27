import DataTableProductos from "../datatable";
import React, {useState, useEffect} from 'react';
require ("es6-promise").polyfill();
require ("isomorphic-fetch");

function ListaProductos () {
    const [data, setData] = useState ([]);
    const [q, setQ] = useState ("");
    const [searchColumns, setSearchColumns] = useState(["marca"]);

    useEffect (() =>{
        fetch("/views/administrador")
        .then((response) => response.json())
        .then(json => setData(json));
        
    }, [])  
    
    function search (rows) {
        // const columns = rows[0] && Object.keys(rows[0])
        console.log(searchColumns)
        if (searchColumns.length > 0 ){
            return rows.filter((row) => 
            searchColumns.some((column) => row[column].toString().toLowerCase().indexOf(q.toLowerCase())>-1))
        }
        return rows
    }

    const columns = data[0] && Object.keys(data[0])
    
return (

    <div>
        <div className="buscador"> Buscador
            <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
            {columns && 
                columns.map((column) => ( 
                    <label>
                        <input
                        name="checkbox-filtro"
                        type="checkbox"
                        checked={searchColumns.includes(column)} 
                        onChange={(e) => {
                            const checked = searchColumns.includes(column)
                            setSearchColumns((prev) =>
                            
                            checked
                            
                            ? prev.filter((sc) => sc !== column)
                            : [...prev, column]
                            );
                        }}
                        />
                        {column}
                        
                    </label>
                ))}
        </div>
        <DataTableProductos data={search(data)} />
    </div>
);
}

export default ListaProductos;