import { IonButton, IonCard, IonCardContent, IonCardHeader } from '@ionic/react';

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
                        <li>Click on "Try again" button or the message shown to refresh the app manually</li>
                        <li>Logo in <span style={{ color: 'red' }}>red</span> means the server is down</li>
                        <li>Logo in <span style={{ color: '#61DBFB' }}>blue</span> means the server is up</li>
                        <li>Click down on "Tele-G-Bot" for credits</li>
                    </ul>
                    <IonButton size='small' color={'dark'} onClick={handleClose} fill="solid">Got it</IonButton>
                </IonCardContent>
            </IonCard>
        </div>
    );
};

export default Modal;
