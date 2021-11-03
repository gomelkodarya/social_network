import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MessagesPagePropsType} from "../../App";

export type DialogsPropsType = {
    updateNewMessageText: (message: string) => void
    sendNewMessage: () => void
    dialogsPage: MessagesPagePropsType
}

export const Dialogs = (props: DialogsPropsType) => {
    let state = props.dialogsPage

    const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = state.messages.map(m => <Message message={m.message} />)
    const newMessageText = state.newMessageText
    const onSendMessageClick = () => {props.sendNewMessage()}
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let message = e.currentTarget.value
        props.updateNewMessageText(message)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageText}
                            placeholder={'Enter your message'}
                            onChange={onNewMessageChange}>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}