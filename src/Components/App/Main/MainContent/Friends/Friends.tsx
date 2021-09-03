import React from "react";
import classes from "./Friends.module.css";
import {FriendsPropsType} from "./FriendsContainer";
import axios from "axios";


export class Friends extends React.Component<FriendsPropsType> {

  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
      this.props.setFriends(response.data.items);
    })
  }

  render = () => {
    return (
      <div className={classes.friends}>
        <div className={classes.row}>
          <div className={classes.column}>
            <header className={classes.header}>
              <h2>Friends</h2>
              <div className={classes.search}>
                <input type="text"/>
              </div>
              <div className={classes.sorting}></div>
            </header>
          </div>
          <div className={classes.column}>
            <div className={classes.body}>
              <ul className={classes.list}>
                {
                  this.props.friends.map(fr => {
                    const addToFriendsHandler = () => {
                      this.props.addToFriends(fr.id);
                    }
                    const removeFromFriendsHandler = () => {
                      this.props.removeFromFriends(fr.id);
                    }
                    return (
                      <li key={fr.id} className={classes.item}>
                        <div className={classes.avatar}>
                          <img
                            src={fr.photos.small != null ? fr.photos.small : "https://www.w3schools.com/w3images/avatar6.png"}/>
                        </div>
                        <h3>{fr.name}</h3>
                        <p>{"some status"}</p>
                        {fr.followed
                          ? <button onClick={removeFromFriendsHandler}>Remove friend</button>
                          : <button onClick={addToFriendsHandler}>Add friend</button>}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}