import React from "react";
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/5092087670389.png'

export class Users extends React.Component<UsersPropsType> {
    // constructor(props:UsersPropsType) {
    //     super(props);
    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUser(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onChangePage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUser(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCounter / this.props.pageSize)
        let pages = []

        for(let i=1; i<=pagesCount; i++) {
            pages.push(i)
        }


        return (
            <div>
                <div>
                    {
                        pages.map(p => {
                            return <span className={this.props.currentPage == p ? s.selected : ''}
                                         onClick={() =>{this.onChangePage(p)}}>
                                       {p}
                                   </span>
                        })
                    }
                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small ? u.photos.small : userPhoto}
                             className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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
}
