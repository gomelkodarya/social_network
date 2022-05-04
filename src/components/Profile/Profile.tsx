import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";
import {Preloader} from "../common/Preloader";

type ProfilePropsType = {
    profile: ProfileType | null
    setUserProfile: (profile: ProfileType | null) => void
}

export const Profile = (props: ProfilePropsType) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    );
}