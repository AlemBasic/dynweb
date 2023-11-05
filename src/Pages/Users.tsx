import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {UserDTO} from "../dto/UserDTO";

export function Users() {
    const [users, setUsers] = useState<UserDTO[]>([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/users')
            .then((response) => {
                console.log('API response:', response.data); // Check the API response
                setUsers(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    console.log('Users:', users); // Check the data in the state

    return (
        <div>
            <h1>Mockup Users</h1>
            <div className="users-list">
                {users.map((user) => (
                    <div key={user.id} className="user">
                        <p>{`Userid: ${user.id}, Email: ${user.email},Name: ${user.name.firstname}, 
                        ${user.name.lastname}`}</p>
                        {/*<ul>*/}
                        {/*    {user.address.map((addressDTO) => (*/}
                        {/*        <li key={address.id}>*/}
                        {/*            {`ProductId: ${product.productId}, Quantity: ${product.quantity}`}*/}
                        {/*        </li>*/}
                        {/*    ))}*/}
                        {/*</ul>*/}
                    </div>
                ))}
            </div>
        </div>
    );
}

