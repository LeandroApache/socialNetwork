import React from "react";
import classes from "./HomePage.module.css";

export function HomePage() {
  return (
    <div className={classes.homePage}>
      <h2>HomePage</h2>
      <div className={classes.container}>
        <div className={classes.row}>
          <section className={classes.posts}>
            <div className={classes.postsCreator}></div>
            <div className={classes.postsList}>
              <div className={classes.post}></div>
            </div>
          </section>
          <section className={classes.stories}></section>
          <section className={classes.suggestedPages}></section>
        </div>
      </div>
    </div>
  )
}