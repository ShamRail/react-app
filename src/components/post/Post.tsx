import React from "react";
import './Post.css';

export interface PostProps {
    topic: string,
    title: string,
    description?: string
    date: string,
    author: string,
    css?: {
        width: number,
        align?: string,
        margin?: string
    },
    image: string
}

export const Post = (props: PostProps) => {
    return (
        <article className="article" style={{'width': props.css?.width, 'margin': props.css?.margin}}>
            <img className="article__img" src={props.image} alt="Photo-post"/>
            <div className="article__info" style={{'alignItems': props.css?.align}}>
                <div className="article__info-topic">{props.topic}</div>
                <h2 className="article__info-title"><a href="src/components/post/Post#!">{props.title}</a></h2>
                {props.description && <p className="article__text">{props.description}</p>}
                <div className="article__info-author">
                    <time className="article__info-date">{props.date}</time>
                    <span>By</span> {props.author}
                </div>
            </div>
        </article>
    );
}