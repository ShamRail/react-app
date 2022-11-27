import React from "react";
import './Main.css';
import {PostList} from "../post-list/PostList";
import {Sidebar} from "../sidebar/Sidebar";

export const Main = () => {
    return (
      <main className="main">
          <div className="container">
              <div className="main__wrapper">
                  <PostList/>
                  <Sidebar/>
              </div>
          </div>
      </main>
  );
}