import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [message, setMessage] = useState([]);

    useEffect(() => {
        let url: string;
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
            url = 'http://localhost:3001/api';
        } else {
            url = 'https://tele-g-bot.up.railway.app/api';
        }

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                console.log('raw response: ', response);
                const json = await response.json();
                console.log(json);
                setMessage(json.message);
            } catch (error) {
                console.log('error', error);
            }
        };

        fetchData();
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
