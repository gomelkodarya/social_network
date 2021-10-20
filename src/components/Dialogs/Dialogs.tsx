import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MessagesPagePropsType} from "../../App";
import {
    ActionsPropsTypes,
} from "../../redux/state";
import {
    sendNewMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../redux/dialogsReducer";

export type DialogsPropsType = {
    state: MessagesPagePropsType
    dispatch: (action: ActionsPropsTypes) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = props.state.messages.map(m => <Message message={m.message} />)
    const newMessageText = props.state.newMessageText
    const onSendMessageClick = () => {props.dispatch(sendNewMessageActionCreator())}
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let message = e.currentTarget.value
        props.dispatch(updateNewMessageTextActionCreator(message))
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