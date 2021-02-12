import React, { useState, useEffect } from 'react';


const OrderList = () => {
    const [requests, setPed] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const url = await fetch("http://localhost/project-nodejs/frontend/src/backend/ApiPedidos.php");
            setPed(await url.json());
        }
        fetchData();
    }, [])


    return (
        <> {
            requests.map(ped => {
                return (
                    <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Numero Pedido</th>
                                    <th scope="col">Id Cliente</th>
                                    <th scope="col">Id Produto</th>
                                    <th scope="col">Nome Produto</th>
                                    <th scope="col">Valor Unitário</th>
                                    <th scope="col">Quant</th>
                                    <th scope="col">Valor Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr> 
                                        <th scope="row">{ped.id_request}</th>
                                        <td>{ped.id_client} </td>
                                        <td>{ped.id_product} </td>
                                        <td>{ped.description} </td>
                                        <td>{ped.price} </td>
                                        <td>{ped.quantity} </td>
                                        <td>{ped.finalprice} </td>
                                    </tr>
                            </tbody>
                        </table>
                )
            })
        }
        </>
    )
}

export default OrderList;