import React from 'react';
import './Sidebar.css';

import {SidebarTagList} from "../sidebar-tag-list/SidebarTagList";
import {SidebarSocialList} from "../sidebar-social-list/SidebarSocialList";
import {SidebarCategoryList} from "../sidebar-category-list/SidebarCategoryList";
import {SidebarFeatureList} from "../sidebar-feature-list/SidebarFeatureList";
import {SidebarAuthor} from "../sidebar-author/SidebarAuthor";

export const Sidebar = () => {
    return (
        <aside className="sidebar">
            <SidebarAuthor/>
            <SidebarFeatureList/>
            <SidebarCategoryList/>
            <SidebarSocialList/>
           <SidebarTagList/>
        </aside>
    );
}