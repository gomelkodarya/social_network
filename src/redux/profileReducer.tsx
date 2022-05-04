import {PostPropsType, ProfilePagePropsType} from "../App";

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: boolean,
    lookingForAJobDescription: string
    fullName: string
    userId: number,
    photos: {
        small: string
        large: string
    }
}

export const initialState: ProfilePagePropsType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It is my first post', likesCount: 7},
        {id: 3, message: 'Hello!', likesCount: 12},
        {id: 4, message: 'What is your name?', likesCount: 2},
    ],
    newPostText: '',
    profile: null,
}

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

export const profileReducer = (state: ProfilePagePropsType = initialState, action: ProfileActionsTypes): ProfilePagePropsType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostPropsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 5
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        case CHANGE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
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
export const setUserProfile = (profile: ProfileType | null) => ({type: SET_USER_PROFILE, profile: profile} as const)

export type ProfileActionsTypes =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof setUserProfile>