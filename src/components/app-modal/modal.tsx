import { IonButton, IonCard, IonCardContent, IonCardHeader } from '@ionic/react';

import { ENDPOINT } from '../../config/config';

import './modal.css';

const Modal = ({ handleClose, show }: any) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
        <div className={showHideClassName}>
            <IonCard className="modal-main">
                <IonCardHeader class="ion-no-padding">
                    <h1>Instructions</h1>
                </IonCardHeader>
                <IonCardContent>
                    <ol className="instructions-list">
                        <li>Open Telegram</li>
                        <li>Find @ZenoyBot and start conversation</li>
                        <li>Type command: <b><i>/mensaje </i></b>&lt;your text&gt;</li>
                        <li>See magic!</li>
                    </ol>
                    <ul className="instructions-list">
                        <li>
                            Visit the
                            <a href={ENDPOINT} target="_blank" rel="noreferrer"> web version </a>
                            to chek if server is down and you don't trust my awesome implementations to auto reconnect to the server
                        </li>
                        <li>Click down on "Tele-G-Bot" for credits</li>
                    </ul>
                    <IonButton size='small' color={'dark'} onClick={handleClose} fill="solid">Got it</IonButton>
                </IonCardContent>
            </IonCard>
        </div>
    );
};

export default Modal;
