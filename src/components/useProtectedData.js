import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProtectedComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getProtectedData = async () => {
        const token = localStorage.getItem('token');
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:5001/protected', {
                headers: { Authorization: token }
            });
            setData(response.data);
        } catch (error) {
            setError('Error accediendo a la ruta protegida');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProtectedData();
    }, []);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Datos Protegidos</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}