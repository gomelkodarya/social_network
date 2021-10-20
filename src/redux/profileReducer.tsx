import {PostPropsType, ProfilePagePropsType} from "../App";
import {ActionsPropsTypes} from "./state";

const initialState: ProfilePagePropsType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It is my first post', likesCount: 7},
        {id: 3, message: 'Hello!', likesCount: 12},
        {id: 4, message: 'What is your name?', likesCount: 2},
    ],
    newPostText: ''
}

const ADD_POST = 'ADD-POST'

const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'

export const profileReducer = (state: ProfilePagePropsType = initialState, action: ActionsPropsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostPropsType  = {
                id: 5,
                message: state.newPostText,
                likesCount: 5
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state

        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)

export const updateNewPostTextActionCreator = (text: string) => ({
        type: CHANGE_NEW_POST_TEXT,
        newText: text
    } as const
)