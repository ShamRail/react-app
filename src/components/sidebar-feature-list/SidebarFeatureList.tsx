import React from 'react';
import './SidebarFeatureList.css';

import {Post} from "../post/Post";

import aside2 from '../../assets/img/aside/2.jpg';
import aside3 from '../../assets/img/aside/3.jpg';
import aside4 from '../../assets/img/aside/4.jpg';

export const SidebarFeatureList = () => {
    return (
        <div className="sidebar__featured-posts">
            <div className="sidebar__title"><a href="src/components/sidebar-feature-list/SidebarFeatureList#!">Featured posts</a></div>
            <Post topic={'Jeans'} date={'June 6, 2019'} author={'Rickie Baroch'} image={aside2} css={{width: 270, margin: '15px 0 15px 0'}}
                  title={'One of Saturn\'s largest rings may be newer than anyone'}/>
            <Post topic={'City'} date={'June 6, 2019'} author={'Rickie Baroch'} image={aside3} css={{width: 270, margin: '15px 0 15px 0'}}
                  title={'One of Saturn\'s largest rings may be newer than anyone'}/>
            <Post topic={'Photography'} date={'June 6, 2019'} author={'Rickie Baroch'} image={aside4} css={{width: 270, margin: '15px 0 15px 0'}}
                  title={'One of Saturn\'s largest rings may be newer than anyone'}/>
        </div>
    );
}