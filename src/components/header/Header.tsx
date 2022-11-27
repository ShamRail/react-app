import React from "react";
import "./Header.css";

export const Header = () => {
  return (
      <header className="header">
          <div className="container">
              <article className="main-post">
                  <div className="main-post__topic">Vehicle</div>
                  <h1 className="main-post__title"><a href="src/components/header/Header#!">One of Saturn's largest rings may be newer than
                      anyone</a></h1>
                  <div className="main-post__info">
                      <div>June 6, 2019</div>
                      <div><span>By</span> Rickie Baroch</div>
                      <div>4 comments</div>
                  </div>
              </article>
          </div>
      </header>
  );
}