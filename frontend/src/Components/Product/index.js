/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import './Product.css';



const ListProd = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fectchData() {
            const url = await fetch("http://localhost:3333/product");
            setProducts(await url.json());
        }
        fectchData();
    }, [])

    let Highlight = (image) => {
        if(image.target.style.width === '120px')
        image.target.style = 'width:240px'
        else
        image.target.style = 'width:120px'
    }


    return (

        <>
        <section className="products-img">
            {
                products.map(prod => {
                    return (

                    <div key={prod.product} className="box_product bg-white" id={prod.category}>
                        <img src={prod.image} className="itens img-fluid" onClick={Highlight} />
                        <br />
                        <p className="description">{prod.description}</p>
                        <p className="description" style={{ textDecoration: "line-through" }}>R$ {prod.price}</p>
                        <p className="price text-danger">R$ {prod.finalprice}</p>
                        <hr />
                    </div>
     
                    )
                } ) 
            }
            </section>
        </>
    )
}

export default ListProd;