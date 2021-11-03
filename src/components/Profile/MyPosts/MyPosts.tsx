import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostPropsType} from "../../../App";



type MyPostsPropsType = {
    posts: Array<PostPropsType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
    // dispatch: (action: ActionsPropsTypes) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post message = {p.message} likesCount = {p.likesCount}/>)

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange= (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}