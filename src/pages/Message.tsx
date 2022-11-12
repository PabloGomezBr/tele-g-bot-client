import React from 'react';
import { io, Socket } from 'socket.io-client';
import { API_ENDPOINT, ENDPOINT } from '../config/config';
import { IonSpinner } from '@ionic/react';

class Message extends React.Component<unknown, {message: string, socket: Socket}>  {
    constructor(props: unknown) {
        super(props);
        this.state = {
            message: '',
            socket: io(ENDPOINT),
        };
    }

    async componentDidMount() {
        await this.fetchData();
        this.state.socket.on('message', (data) => {
            this.setState({message: data.message});
        });
        return () => this.state.socket.close();
    }

    async fetchData(){
        try {
            const response = await fetch(API_ENDPOINT);
            const json = await response.json();
            this.setState({message: json.message});
        } catch (error) {
            console.log('error', error);
        }
    }

    render(){
        return (
            <>
                <div>
                    {this.state.message !== '' ? <p>{this.state.message}</p> : <p><IonSpinner name="crescent"/></p>}
                </div>
                <a href="https://github.com/PabloGomezBr/tele-g-bot-server" target="_blank" rel="noreferrer" style={{ position: 'absolute', bottom: 0, color: 'yellow'}}>
                    <i style={{ position: 'relative', bottom: '5px', fontWeight: '900', 'fontSize': '15px'}}>
                        &#128073; Tele-G-Bot &#128072;
                    </i>
                </a>
            </>
        )
    }
}

export default Message;