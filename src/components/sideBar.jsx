import React, { useState } from 'react';
import AdminAdd from '../components/adminAdd';
import AdminEdit from '../components/adminEdit';
import AdminDelete from '../components/adminDelete';
import AdminList from '../components/adminList';
import AdminDefault from './adminDefault';


const SideBar = () => {
    const [selectedOption, setSelectedOption] = useState('product1');

    const renderComponent = () => {
        switch (selectedOption) {
            case 'Agregar':
                return <AdminAdd />;
            case 'Actualizar':
                return <AdminEdit />;
            case 'Eliminar':
                return <AdminDelete />;
            case 'Vista':
                return <AdminList />;
            default:
                return <AdminDefault />;
        }
    };

    return (
        <div className="flex gap-4">
            <div className="w-1/4 bg-gray-200 mr-4">
                <h2 className="text-lg font-bold mb-4">ADMINISTRADOR</h2>
                <ul>
                    <li className="mb-2" onClick={() => setSelectedOption('Agregar')}>Agregar</li>
                    <li className="mb-2" onClick={() => setSelectedOption('Actualizar')}>Actualizar</li>
                    <li className="mb-2" onClick={() => setSelectedOption('Eliminar')}>Eliminar</li>
                    <li className="mb-2" onClick={() => setSelectedOption('Vista')}>Vista</li>
                </ul>
            </div>
            <div className="w-3/4 bg-gray-100 pr-4">
                {renderComponent()}
            </div>
        </div>
    );
};

export default SideBar;
