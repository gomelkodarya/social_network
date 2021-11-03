import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {Store} from "redux";

type ProfilePropsType = {
    store: Store
}

export const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    );
}