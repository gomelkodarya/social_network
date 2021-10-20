import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionsPropsTypes} from "./redux/state";

//test commit

export type PostPropsType = {
    id: number
    message: string
    likesCount: number
}

export type DialogPropsType = {
    id: number
    name:string
}

export type MessagePropsType = {
    id: number
    message: string
}

export type ProfilePagePropsType = {
    posts: Array<PostPropsType>
    newPostText: string
}

export type MessagesPagePropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    newMessageText: string
}

export type AppPropsType = {
    profilePage: ProfilePagePropsType
    dialogsPage: MessagesPagePropsType
}

export type PropsType = {
    state: AppPropsType
    // addPost: () => void
    // changeNewPostText: (newText: string) => void
    dispatch: (action: ActionsPropsTypes) => void
}

export const App = (props: PropsType) => {
    return (

            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>

                <div className={'app-wrapper-content'}>
                    <Route exact path={'/dialogs'} render={() => <Dialogs
                        state = {props.state.dialogsPage}
                        dispatch={props.dispatch}/>}/>
                    <Route path={'/profile'} render={() => <Profile
                        state = {props.state.profilePage}
                        dispatch={props.dispatch}
                        // addPost={props.addPost}
                        // changeNewPostText={props.changeNewPostText}
                        />}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>

    );
}



