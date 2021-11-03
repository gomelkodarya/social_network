import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";

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


export const App = () => {

    return (

            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>

                <div className={'app-wrapper-content'}>
                    <Route exact path={'/dialogs'}
                           render={() => <DialogsContainer />}/>
                    <Route path={'/profile'}
                           render={() => <Profile />}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>

                    <Route path={'/users'} render={() => <UsersContainer />}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>

    );
}



