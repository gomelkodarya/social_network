import {AppPropsType, PostPropsType, ProfilePagePropsType} from "../App";
import {
    addPostActionCreator, profileReducer,
    updateNewPostTextActionCreator
} from "./profileReducer";
import {
    dialogsReducer,
    sendNewMessageActionCreator,
    updateNewMessageTextActionCreator
} from "./dialogsReducer";

export type StorePropsType = {
    _state: AppPropsType
    getState: () => AppPropsType
    _callSubscriber: (state: AppPropsType) => void
    // addPost: () => void
    // changeNewPostText: (newText: string) => void
    subscribe: (callBack: (state: AppPropsType) => void) => void
    dispatch: (action: ActionsPropsTypes) => void
}

export type ActionsPropsTypes =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof updateNewMessageTextActionCreator> |
    ReturnType<typeof sendNewMessageActionCreator>

// const ADD_POST = 'ADD-POST'
//
// const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'

// const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT'
//
// const SEND_MESSAGE = 'SEND-MESSAGE'

export const store: StorePropsType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'It is my first post', likesCount: 7},
                {id: 3, message: 'Hello!', likesCount: 12},
                {id: 4, message: 'What is your name?', likesCount: 2},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
    },

    _callSubscriber(state) {
        console.log('hello')
    },

    getState() {
        return this._state
    },
    subscribe(callBack) {
        this._callSubscriber = callBack
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)

        // if(action.type === ADD_POST) {
        //     const newPost: PostPropsType  = {
        //         id: 5,
        //         message: this._state.profilePage.newPostText,
        //         likesCount: 5
        //     }
        //     this._state.profilePage.posts.push(newPost)
        //     this._state.profilePage.newPostText = ''
        //     this._callSubscriber(this._state)
        // } else if(action.type === CHANGE_NEW_POST_TEXT) {
        //     this._state.profilePage.newPostText = action.newText
        //     this._callSubscriber(this._state)
        // } else if(action.type === CHANGE_NEW_MESSAGE_TEXT) {
        //     this._state.dialogsPage.newMessageText = action.newMessage
        //     this._callSubscriber(this._state)
        // } else if(action.type === SEND_MESSAGE) {
        //     let newMessage = this._state.dialogsPage.newMessageText
        //     this._state.dialogsPage.messages.push({id: 6, message: newMessage})
        //     this._state.dialogsPage.newMessageText = ''
        //     this._callSubscriber(this._state)
        // }
    }
}

// export const addPostActionCreator = () => ({type: ADD_POST} as const)
//
// export const updateNewPostTextActionCreator = (text: string) => ({
//     type: CHANGE_NEW_POST_TEXT,
//     newText: text
//     } as const
// )

// export const updateNewMessageTextActionCreator = (text: string) => ({
//         type: CHANGE_NEW_MESSAGE_TEXT,
//         newMessage: text
//     } as const
// )
//
// export const sendNewMessageActionCreator = () => ({type: SEND_MESSAGE} as const)









