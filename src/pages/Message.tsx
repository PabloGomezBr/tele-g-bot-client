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

    componentDidMount() {
        this.state.socket.on('message', (data) => {
            console.log('SOCKET: ', data)
            this.setState({message: data.message});
        });
        this.fetchData();
        return () => this.state.socket.close();
    }

    fetchData = async () => {
        try {
            const response = await fetch(API_ENDPOINT);
            const json = await response.json();
            this.setState({message: json.message});
        } catch (error) {
            console.log('error', error);
        }
    };

    render(){
        return (
            <>
                <div>
                    {this.state.message ? <p>{this.state.message}</p> : <IonSpinner name="crescent"/>}
                </div>
            </>
        )
    }
}

export default Message;