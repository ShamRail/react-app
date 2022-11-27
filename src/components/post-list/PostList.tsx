import React, {useEffect, useState} from "react";
import './PostList.css';
import {Post} from "../post/Post";
import {Pagination} from "../pagination/Pagination";
import {useDataXhr} from "../../hooks/useDataXhr";
import {useDataFetch} from "../../hooks/useDataFetch";
import {Post as PostModel} from '../../shared/post';

import post1 from "../../assets/img/posts/1.jpg";
import post2 from "../../assets/img/posts/2.jpg";
import post3 from "../../assets/img/posts/3.jpg";
import post4 from "../../assets/img/posts/4.jpg";
import post5 from "../../assets/img/posts/5.jpg";
import post6 from "../../assets/img/posts/6.jpg";
import post7 from "../../assets/img/posts/7.jpg";
import post8 from "../../assets/img/posts/8.jpg";
import post9 from "../../assets/img/posts/9.jpg";
import post10 from "../../assets/img/posts/10.jpg";
import post11 from "../../assets/img/posts/11.jpg";

const sevenTopicCss = {
    width: 770,
    align: 'flex-start'
}

export const PostList = () => {

    const imagePaths = [
        post1, post2, post3, post4, post5, post6, post7, post8, post9, post10, post11
    ];

    const [posts, setPosts] = useState<PostModel[]>([]);

    const {getXhrPosts} = useDataXhr(posts => setPosts(posts));
    const {getFetchPosts} = useDataFetch();

    useEffect(() => getPosts(1), []);

    const getRandomImagePath = () => {
        let index = Math.floor((Math.random() * imagePaths.length));
        while (index == 6) {
            index = Math.floor((Math.random() * imagePaths.length));
        }
        return imagePaths[index];
    }

    const getPosts = (pageNumber: number) => {
        if (pageNumber % 2 == 1) {
            getXhrPosts();
        } else {
            getFetchPosts().then(() => setPosts(posts));
        }
    }

    return (
        <>
            <div className="posts">
                {posts.filter((_, index) => index < 11).map((post, index) => {
                        if (index == 6) {
                            return <Post description={post.body}
                                         css={sevenTopicCss}
                                         title={post.title.substring(0, 10)}
                                         image={imagePaths[6]} topic={'Tourism'} date={'June 6, 2019'} author={'Rickie Baroch'}/>;
                        } else {
                            return <Post title={post.title.substring(0, 10)}
                                         image={getRandomImagePath()} topic={'Tourism'} date={'June 6, 2019'} author={'Rickie Baroch'} />;
                        }
                    }
                )}
                <Pagination onChange={n => getPosts(n)}/>
            </div>
        </>
    )
}