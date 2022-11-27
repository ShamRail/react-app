import React from 'react'
import './SidebarAuthor.css';
import aside1 from "../../assets/img/aside/1.jpg";

export const SidebarAuthor = () => {
    return (
        <div className="sidebar__info-author">
            <div className="sidebar__title"><a href="src/components/sidebar-author/SidebarAuthor#!">About the author</a></div>
            <article className="sidebar__article">
                <img src={aside1} alt="Photo-post"/>
                <div className="sidebar__article-content">
                    <div className="sidebar__article-title">Kate Willems</div>
                    <div className="sidebar__article-subtitle">Food & cooking bloger</div>
                    <p className="sidebar__article-text">Hi, I'm Sonia. Cooking is the way I express
                        my creative side to the world. Welcome to my Kitchen Corner on…</p>
                </div>
                <a href="src/components/sidebar-author/SidebarAuthor#!" className="sidebar__article-link">Continue Reading</a>
            </article>
        </div>
    );
}