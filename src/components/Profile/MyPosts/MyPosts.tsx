import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostPropsType} from "../../../App";
import {
    ActionsPropsTypes,
   } from "../../../redux/state";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profileReducer";


type MyPostsPropsType = {
    posts: Array<PostPropsType>
    newPostText: string
    // addPost: () => void
    // changeNewPostText: (newText: string) => void
    dispatch: (action: ActionsPropsTypes) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post message = {p.message} likesCount = {p.likesCount}/>)

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange= (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
          props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}