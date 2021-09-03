import React, {ChangeEvent} from "react";
import classes from "./ProfilePosts.module.css";
import {ProfilePostsType} from "./ProfilePostsContainer";

export function ProfilePosts(props: ProfilePostsType) {
  const updatePostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.onUpdatePostText(e.currentTarget.value);
  }
  const addNewPostHandler = () => {
    props.onAddPost();
  }
  return (
    <div className={classes.profilePosts}>
      <ul>
        {props.posts.map(post => {
          return <li>
            <h3>{post.date.toLocaleDateString()}</h3>
            <p>{post.text}</p>
          </li>
        })}
      </ul>
      <div>
        <textarea onChange={updatePostTextHandler} value={props.newPostText}></textarea>
        <button onClick={addNewPostHandler}>Add new post</button>
      </div>
    </div>
  )
}