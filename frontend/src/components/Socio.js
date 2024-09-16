import React, { useState, useEffect } from 'react';
import axios from  'axios';

function Socio( {numTarjeta} ) {

    const [socio, setSocio] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/socios/tarjeta/${numTarjeta}`);
                setSocio(response.data);
            } catch (error) {
                setError(error.response ? error.response.data : error.message);
            }
        };

        fetchUserData();
    }, [numTarjeta]);

    if (error) return <div>Error: {error}</div>;
    if (!socio) return <div>Cargando...</div>;

    return (
        <div>
            <h1>BIENVENIDO</h1>
            <p>Nombres: {socio.nombres}</p>
            <p>Nombres: {socio.cedula}</p>
            <h3>Círculo Militar</h3>
            <h3>¡Mucho más que un buen club!</h3>
        </div>
    );
};

export default Socio;