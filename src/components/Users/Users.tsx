import s from "./Users.module.css";
import userPhoto from "../../assets/images/5092087670389.png";
import React from "react";
import {UserType} from "../../redux/usersReducer";

type UsersPropsType = {
    totalUsersCounter: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    onChangePage: (pageNumber: number) => void

}
export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCounter / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return <span className={props.currentPage == p ? s.selected : ''}
                                     onClick={() =>{props.onChangePage(p)}}>
                                       {p}
                                   </span>
                    })
                }
            </div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small ? u.photos.small : userPhoto}
                             className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>
                        }
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    )
}
