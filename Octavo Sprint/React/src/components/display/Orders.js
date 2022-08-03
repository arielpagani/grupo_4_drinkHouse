import { useEffect, useState } from "react";

function Orders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/ordenes')
            .then(response => response.json())
            .then(data => {
                setOrders(data)
            })
    }, [])


    return (
        <div>
            <h2>Total de ventas: {orders.length}</h2>
        </div> 
    )
}
export default Orders;