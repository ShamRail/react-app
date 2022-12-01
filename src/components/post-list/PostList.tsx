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

const topics = [
    'Tourism', 'Jeans', 'City', 'Photography'
];

const dates = [
    'January 1, 2019', 'February 2, 2019', 'March 3, 2019',
    'April 4, 2019', 'May 5, 2019', 'June 6, 2019',
    'July 7, 2019', 'August 8, 2019', 'September 9, 2019'
];

const authors = [
    'Theocritus Maire',
    'Carlu Òscar',
    'Alois Şenay',
    'Narayanan Pæga',
    'Ankit Allycia',
    'Máel Máedóc Vivi',
    'Alisher Ülvi',
    'Talgat Riccardo',
    'Mathilda Gereon',
    'Pétronille Uri'
]

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

    const getRandomTopic = () => {
        const index = Math.floor(Math.random() * topics.length);
        return topics[index];
    }

    const getRandomDate = () => {
        const index = Math.floor(Math.random() * dates.length);
        return dates[index];
    }

    const getRandomAuthor = () => {
        const index = Math.floor(Math.random() * authors.length);
        return authors[index];
    }

    const getRandomSubstring = (str: string) => {
        const index = Math.floor(Math.random() * 3);
        return str.substring(index, Math.min(str.length, index + 7));
    }

    return (
        <>
            <div className="posts">
                {posts.filter((_, index) => index < 11).map((post, index) => {
                        if (index == 6) {
                            return <Post description={post.body}
                                         css={sevenTopicCss}
                                         title={getRandomSubstring(post.title)}
                                         image={imagePaths[6]} topic={getRandomTopic()} date={getRandomDate()} author={getRandomAuthor()}/>;
                        } else {
                            return <Post title={getRandomSubstring(post.title)}
                                         image={getRandomImagePath()} topic={getRandomTopic()} date={getRandomDate()} author={getRandomAuthor()} />;
                        }
                    }
                )}
                <Pagination onChange={n => getPosts(n)}/>
            </div>
        </>
    )
}