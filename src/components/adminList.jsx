import React, { useState, useEffect } from 'react';

const Admin = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://146.190.59.47:3000/product/list')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Agregar Producto</h1>
            {/* Resto del código */}
            <h2 className="text-xl font-bold mb-2">Lista de Productos</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name}      / stock:{product.stock} / price: {product.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default Admin;
