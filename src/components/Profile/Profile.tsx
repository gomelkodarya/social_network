import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePagePropsType} from "../../App";
import {ActionsPropsTypes} from "../../redux/state";

type ProfilePropsType = {
    state: ProfilePagePropsType
    // addPost: () => void
    // changeNewPostText: (newText: string) => void
    dispatch: (action: ActionsPropsTypes) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts = {props.state.posts}
                newPostText={props.state.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
}