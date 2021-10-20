import React from "react";
import s from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={'https://besthqwallpapers.com/Uploads/20-11-2020/145812/thumb2-mount-fuji-japan-fujisan-autumn-red-trees.jpg'}/>
            </div>

            <div className={s.descriptionBlock}>
                Ava+ Disc
            </div>
        </div>
    );
}