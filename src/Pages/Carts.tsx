import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CartsDTO } from '../dto/CartsDTO';

export function Carts() {
    const [carts, setCarts] = useState<CartsDTO[]>([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/carts')
            .then((response) => {
                console.log('API response:', response.data); // Check the API response
                setCarts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    console.log('Carts:', carts); // Check the data in the state

    return (
        <div>
            <h1>Mockup Carts</h1>
            <div className="cart-list">
                {carts.map((cart) => (
                    <div key={cart.id} className="cart">
                        <p>{`Userid: ${cart.userId}, Date: ${cart.date}, Products:`}</p>
                        <ul>
                            {cart.products.map((product) => (
                                <li key={product.id}>
                                    {`ProductId: ${product.productId}, Quantity: ${product.quantity}`}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
