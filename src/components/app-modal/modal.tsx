import { IonButton, IonCard, IonCardContent, IonCardHeader } from '@ionic/react';

import { TELEGRAM_ANDROID_LINK } from '../../config/config';
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
                        <li>Open <a href={TELEGRAM_ANDROID_LINK} target="_blank" rel="noreferrer">Telegram</a></li>
                        <li>Find @ZenoyBot and start conversation</li>
                        <li>Type command: <b><i>/message </i></b>&lt;your text&gt;</li>
                        <li>See magic!</li>
                    </ol>
                    <IonButton size='small' color={'dark'} onClick={handleClose} fill="solid">Got it</IonButton>
                </IonCardContent>
            </IonCard>
        </div>
    );
};

export default Modal;
