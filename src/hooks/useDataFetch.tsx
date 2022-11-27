import React, {useState} from "react";
import {Post} from "../shared/post";

export const useDataFetch = () => {

    const [postList, setPostList] = useState<Post[]>([]);

    const getPosts = () => {
        console.log('fetch');
        return fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(response => setPostList(response));
    }

    return { fetchPostList: postList, getFetchPosts: getPosts };

}