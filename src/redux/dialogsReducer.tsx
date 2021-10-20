import {MessagesPagePropsType, PostPropsType} from "../App";
import {ActionsPropsTypes} from "./state";

const initialState: MessagesPagePropsType = {
    dialogs: [
        {id: 1, name: 'Artem'},
        {id: 2, name: 'Roma'},
        {id: 3, name: 'Olga'},
        {id: 4, name: 'Dina'},
        {id: 5, name: 'Vlad'},
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you!'},
        {id: 3, message: 'Thank you!'},
        {id: 4, message: 'Hi!'},
        {id: 5, message: 'Sorry'},
    ],
    newMessageText: ''
}

const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT'

const SEND_MESSAGE = 'SEND-MESSAGE'

export const dialogsReducer = (state: MessagesPagePropsType = initialState, action: ActionsPropsTypes) => {

    switch (action.type) {
        case CHANGE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage
            return state
        case SEND_MESSAGE:
            let newMessage = state.newMessageText
            state.messages.push({id: 6, message: newMessage})
            state.newMessageText = ''
            return state
        default:
            return state
    }
}

export const updateNewMessageTextActionCreator = (text: string) => ({
         type: CHANGE_NEW_MESSAGE_TEXT,
         newMessage: text
    } as const
)

export const sendNewMessageActionCreator = () => ({type: SEND_MESSAGE} as const)