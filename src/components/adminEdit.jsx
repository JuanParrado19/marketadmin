import React, { useState } from 'react';
const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS'
}
const Admin = () => {
    const [product, setProduct] = useState({
        id: '',
        name: '',
        price: '',
        description: '',
        stock: '',
        image: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: name === 'stock' || name === 'price' ? value.toString() : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = JSON.stringify(product);
        // Aquí puedes agregar la lógica para guardar el producto en la base de datos
        fetch(`http://146.190.59.47:3000/product/update/${product.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors',
            body: data
        })
            .then(response => response.json())
            .then(data => {
            console.log('Product updated:', data);
            alert('Update successful!'); // Add this line to display a modal-like alert
            // Aquí puedes agregar la lógica adicional después de agregar el producto
            })
            .catch(error => {
            console.error('Error adding product:', error);
            // Aquí puedes agregar la lógica para manejar el error
            });
        console.log(data);
        setProduct({
            id: '',
            name: '',
            price: '',
            description: '',
            stock: '',
            image: ''
        });
    };

    return (
        
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Actualizar Producto</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="id" className="block text-gray-700 font-bold mb-2">ID:</label>
                    <input
                        type="text"
                        id="id"
                        name="id"
                        value={product.id}
                        onChange={handleChange}
                        className="border border-gray-400 p-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        className="border border-gray-400 p-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Precio:</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        className="border border-gray-400 p-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Descripción:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        className="border border-gray-400 p-2 w-full"
                        required
                    />
                    <div className="mb-4">
                        <label htmlFor="stock" className="block text-gray-700 font-bold mb-2">Stock:</label>
                        <input
                            type="text"
                            id="stock"
                            name="stock"
                            value={product.stock}
                            onChange={handleChange}
                            className="border border-gray-400 p-2 w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-gray-700 font-bold mb-2">Imagen:</label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            value={product.image}
                            onChange={handleChange}
                            className="border border-gray-400 p-2 w-full"
                            required
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Actualizar Producto
                </button>
            </form>
        </div>
    );
};

export default Admin;
