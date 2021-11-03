import React from "react";
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";

export const Users = (props: UsersPropsType) => {
    if(props.users.length === 0) {
        props.setUser([
            {id: 1, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg', followed: false, fullName: 'Dasha', status: 'I am manager', location: {city: 'Minsk', country: 'Belarus'}},
            {id: 2, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg', followed: true, fullName: 'Masha', status: 'I am manager', location: {city: 'Moscow', country: 'Russia'}},
            {id: 3, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg', followed: true, fullName: 'Sasha', status: 'I am manager', location: {city: 'Kiev', country: 'Ukraine'}},
            {id: 4, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg', followed: false, fullName: 'Artem', status: 'I am manager ', location: {city: 'Minsk', country: 'Belarus'}},
        ])
    }

    return (
        <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
        </div>
    )
}
