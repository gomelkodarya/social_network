export type UserLocationType = {
    city: string,
    country: string
}

export type PhotoType = {
    small: string
    large: string
}

export type UserType = {
    id: number,
    photos: PhotoType,
    followed: boolean,
    name: string,
    status: string,
    location: UserLocationType
}

export type InitialStateType = {
    users: Array<UserType>
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export const initialState: InitialStateType = {
    users: [],
}

export const usersReducer = (state: InitialStateType = initialState, action: UserActionsTypes ): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
               ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state

    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const)

export type UserActionsTypes =
ReturnType<typeof followAC> |
ReturnType<typeof unfollowAC> |
ReturnType<typeof setUsersAC>