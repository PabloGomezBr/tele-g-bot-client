import { IonButton, IonItem, IonLabel, IonRow, IonSpinner } from '@ionic/react';
import React from 'react';
import { io, Socket } from 'socket.io-client';

import { API_ENDPOINT, ENDPOINT } from '../config/config';
import './Message.css';

class Message extends React.Component<{className: string}, { message: string; socket: Socket, isLoading: boolean, isServerUp: boolean }> {
    constructor(props: {className: string}) {
        super(props);
        this.state = {
            message: '',
            socket: io(ENDPOINT),
            isLoading: true,
            isServerUp: true
        };
    }

    async componentDidMount() {
        await this.fetchData();
        this.state.socket.on('message', (data) => {
            this.setState({ message: data.message });
        });

        return () => this.state.socket.close();
    }

    async fetchData() {
        this.setState({ isLoading: true });
        try {
            const response = await fetch(API_ENDPOINT);
            const json = await response.json();
            this.setState({ message: json.message });
            this.setState({ isServerUp: true });
        } catch (error) {
            this.setState({ isServerUp: false });
        }
        this.setState({ isLoading: false });
    }

    rederContent() {
        if (!this.state.isLoading) {
            if (this.state.isServerUp) {
                return (
                    <div>
                        {this.state.message !== '' ? (
                            <p>{this.state.message}</p>
                        ) : (
                            <p>
                                <IonButton className="try-btn" onClick={() => this.fetchData()}>Try again</IonButton>
                            </p>
                        )}
                    </div>
                );
            }
            return (
                <p>
                    <IonButton onClick={() => this.fetchData()} fill="outline">Try again</IonButton>
                </p>
            );
        }
        return (
            <p style={{ marginTop: '29px' }}>
                <IonSpinner name="crescent" />
            </p>
        );
    }

    render() {
        return (
            <div className={this.props.className}>
                {this.rederContent()}
                <a className="github-link" href="https://github.com/PabloGomezBr/tele-g-bot-server" target="_blank" rel="noreferrer">
                    <i>
                        &#128073; Tele-G-Bot &#128072;
                    </i>
                </a>
            </div>
        );
    }
}

export default Message;
