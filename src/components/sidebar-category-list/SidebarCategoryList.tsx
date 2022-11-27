import React from 'react';
import './SidebarCategoryList.css';

export const SidebarCategoryList = () => {
    return (
        <div className="sidebar__categories">
            <div className="sidebar__title"><a href="src/components/sidebar-category-list/SidebarCategoryList#!">Categories</a></div>
            <ul className="sidebar__categories-list">
                <li>
                    <a href="src/components/sidebar-category-list/SidebarCategoryList#!">Fashion</a>
                    <div>(23)</div>
                </li>
                <li>
                    <a href="src/components/sidebar-category-list/SidebarCategoryList#!">Style & clothes</a>
                    <div>(7)</div>
                </li>
                <li>
                    <a href="src/components/sidebar-category-list/SidebarCategoryList#!">Minimalism</a>
                    <div>(16)</div>
                </li>
                <li>
                    <a href="src/components/sidebar-category-list/SidebarCategoryList#!">Black & White</a>
                    <div>(5)</div>
                </li>
                <li>
                    <a href="src/components/sidebar-category-list/SidebarCategoryList#!">Modern clothes</a>
                    <div>(12)</div>
                </li>
            </ul>
        </div>
    );
}