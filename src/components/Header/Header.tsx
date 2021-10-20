import React from "react";
import s from './Header.module.css';

export const Header = () => {
    return (
        <header className={s.header}>
            <img src={'https://seeklogo.com/images/S/social-people-logo-B67F482023-seeklogo.com.png'}/>
        </header>
    );
}