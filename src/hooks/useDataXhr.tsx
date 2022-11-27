import React, {useState} from 'react';
import {Post} from "../shared/post";

export const useDataXhr = (onLoad: (posts: Post[]) => void) => {

    const [postList, setPostList] = useState<Post[]>([]);

    const getPosts = () => {
        let xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== XMLHttpRequest.DONE) {
                return;
            }
            if (xhr.status === 200) {
                const response = xhr.response;
                setPostList(response);
                onLoad(response);
            } else {
                console.log('HTTP error', xhr.status, xhr.statusText);
            }
        };
        xhr.send();
    }

    return { xhrPostList: postList, getXhrPosts: getPosts };
}