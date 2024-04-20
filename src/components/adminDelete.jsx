import React, { useState } from 'react';

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'DELETE, OPTIONS'
}

const AdminDelete = () => {
    const [productId, setProductId] = useState('');

    const handleChange = (e) => {
        setProductId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = JSON.stringify({ id: productId });

        fetch(`http://146.190.59.47:3000/product/delete/${productId}`, {
            method: 'DELETE',
            headers: headers,
            mode: 'cors',
            body: data
        })
            .then(response => response.json())
            .then(data => {
                console.log('Product deleted:', data);
                // Aquí puedes agregar la lógica adicional después de eliminar el producto
            })
            .catch(error => {
                console.error('Error deleting product:', error);
                // Aquí puedes agregar la lógica para manejar el error
            });

        setProductId('');
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Eliminar Producto</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="id" className="block text-gray-700 font-bold mb-2">ID:</label>
                    <input
                        type="text"
                        id="id"
                        name="id"
                        value={productId}
                        onChange={handleChange}
                        className="border border-gray-400 p-2 w-full"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                    Eliminar Producto
                </button>
            </form>
        </div>
    );
};

export default AdminDelete;
