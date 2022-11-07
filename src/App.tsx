import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { io } from 'socket.io-client';
import { API_ENDPOINT, ENDPOINT } from './config/config';

function App() {
    const socket = io(ENDPOINT);
    const [message, setMessage] = useState([]);

    useEffect(() => {
        socket.on('message', (data) => {
            console.log('SOCKET: ', data)
            setMessage(data.message);
        });

        const fetchData = async () => {
            try {
                const response = await fetch(API_ENDPOINT);
                console.log('raw response: ', response);
                const json = await response.json();
                setMessage(json.message);
            } catch (error) {
                console.log('error', error);
            }
        };

        fetchData();
        return () => {
            socket.off('message')
        }
    }, []);

    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>{message}</p>
            </header>
        </div>
    );
}

export default App;
