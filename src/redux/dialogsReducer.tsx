import {MessagesPagePropsType} from "../App";

export const initialState: MessagesPagePropsType = {
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

export const dialogsReducer = (state: MessagesPagePropsType = initialState, action: DialogsActionsTypes): MessagesPagePropsType => {
    switch (action.type) {
        case CHANGE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessage
            }
        case SEND_MESSAGE:
            let newMessage = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 6, message: newMessage}]
            }
        default:
            return state
    }
}

export const updateNewMessageTextActionCreator = (newMessage: string) => ({
         type: CHANGE_NEW_MESSAGE_TEXT,
         newMessage
    } as const
)

export const sendNewMessageActionCreator = () => ({type: SEND_MESSAGE} as const)


export type DialogsActionsTypes =
    ReturnType<typeof updateNewMessageTextActionCreator> |
    ReturnType<typeof sendNewMessageActionCreator>
