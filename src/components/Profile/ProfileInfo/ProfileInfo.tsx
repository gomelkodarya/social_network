import React from "react";
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profileReducer";

type ProfileInfoPropsType = {
    profile: ProfileType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <div>
                <img src={'https://besthqwallpapers.com/Uploads/20-11-2020/145812/thumb2-mount-fuji-japan-fujisan-autumn-red-trees.jpg'}/>
            </div>

            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <p>{props.profile.aboutMe}</p>
                <span>{props.profile.contacts.github}</span>
            </div>
        </div>
    );
}