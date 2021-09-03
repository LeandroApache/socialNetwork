import React from "react";
import {Route} from "react-router-dom";
import {HomePage} from "./HomePage/HomePage";
import {Discussions} from "./Discussions/Discussions";
import {Friends} from "./Friends/Friends";
import {Videos} from "./Videos/Videos";
import {Photos} from "./Photos/Photos";
import {Files} from "./Files/Files";
import {Events} from "./Events/Event";
import classes from "./MainContent.module.css";
import {UserProfile} from "./UserProfile/UserProfile";
import FriendsContainer from "./Friends/FriendsContainer";

export function MainContent() {

  return (
    <div className={classes.mainContent}>
      <Route path="/profile" render={() => <UserProfile />}/>
      <Route path="/discussions" render={() => <Discussions />}/>
      <Route path="/friends" render={()=><FriendsContainer/>}/>
      {/*отрисовывает компоненту в зависимости от URL, который указана в path
      роут следит за изменение URL постоянно*/}
      {/*<Route path="/events" component={Events}/>*/}
      {/*<Route path="/videos" component={Videos}/>*/}
      {/*<Route path='/photos' component={Photos}/>*/}
      {/*<Route path="/files" component={Files}/>*/}
    </div>
  )
}