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
        this.state.socket.on('connect', () => {
            this.fetchData();
            this.setState({ isServerUp: true });
            document.getElementsByClassName('App-logo')[0].classList.remove('error-logo');
        });

        this.state.socket.on('connect_error', () => {
            this.setState({ isServerUp: false });
            document.getElementsByClassName('App-logo')[0].classList.add('error-logo');
        });

        this.state.socket.on('message', (data) => {
            this.setState({ message: data.message });
        });
        await this.fetchData();
        return () => this.state.socket.close();
    }

    async fetchData() {
        this.setState({ isLoading: true });
        setTimeout(async () => {
            try {
                const response = await fetch(API_ENDPOINT);
                const json = await response.json();
                this.setState({ message: json.message });
                this.setState({ isServerUp: true });
                document.getElementsByClassName('App-logo')[0].classList.remove('error-logo');
            } catch (error) {
                this.setState({ isServerUp: false });
                document.getElementsByClassName('App-logo')[0].classList.add('error-logo');
            }
            this.setState({ isLoading: false });
        }, 800);
    }

    rederContent() {
        if (!this.state.isLoading) {
            if (this.state.isServerUp) {
                return (
                    <div>
                        {this.state.message !== '' ? (
                            <p>
                                {this.state.message}
                            </p>
                        ) : (
                            <p className='reconecting'>
                                Reconecting...
                            </p>
                        )}
                    </div>
                );
            }
            return (
                <p className='reconecting'>
                    Reconecting...
                </p>
            );
        }
        return (
            <p style={{ marginTop: '9.7px' }}>
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
