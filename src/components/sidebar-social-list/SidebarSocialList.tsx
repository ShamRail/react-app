import React from 'react';
import './SidebarSocialList.css'

import Logo1 from "../../assets/icons/1.svg";
import Logo2 from "../../assets/icons/2.svg";
import Logo3 from "../../assets/icons/3.svg";
import Logo4 from "../../assets/icons/4.svg";
import Logo5 from "../../assets/icons/5.svg";
import Logo6 from "../../assets/icons/6.svg";
import Logo7 from "../../assets/icons/7.svg";
import Logo8 from "../../assets/icons/8.svg";
import Logo9 from "../../assets/icons/9.svg";

export const SidebarSocialList = () => {
    return (
        <div className="sidebar__social">
            <div className="sidebar__title"><a href="src/components/sidebar-social-list/SidebarSocialList#!">Social media</a></div>
            <ul className="sidebar__social-list">
                <li>
                    <a href="src/components/sidebar-social-list/SidebarSocialList#!">
                        <img src={Logo1} alt="Facebook"/>
                        <p>32k <br/> likes</p>
                    </a>
                </li>
                <li>
                    <a href="src/components/sidebar-social-list/SidebarSocialList#!">
                        <img src={Logo2} alt="Pinterest"/>
                        <p>814 <br/> followers</p>
                    </a>
                </li>
                <li>
                    <a href="src/components/sidebar-social-list/SidebarSocialList#!">
                        <img src={Logo3} alt="Vimeo"/>
                        <p>165 <br/> followers</p>
                    </a>
                </li>
                <li>
                    <a href="src/components/sidebar-social-list/SidebarSocialList#!">
                        <img src={Logo4} alt="Dribbble"/>
                        <p>6k <br/> followers</p>
                    </a>
                </li>
                <li>
                    <a href="src/components/sidebar-social-list/SidebarSocialList#!">
                        <img src={Logo5} alt="Twitter"/>
                        <p>130k <br/> followers</p>
                    </a>
                </li>
                <li>
                    <a href="src/components/sidebar-social-list/SidebarSocialList#!">
                        <img src={Logo6} alt="Behance"/>
                        <p>37k <br/> followers</p>
                    </a>
                </li>
                <li>
                    <a href="src/components/sidebar-social-list/SidebarSocialList#!">
                        <img src={Logo7} alt="Instagram"/>
                        <p>854k <br/> followers</p>
                    </a>
                </li>
                <li>
                    <a href="src/components/sidebar-social-list/SidebarSocialList#!">
                        <img src={Logo8} alt="YouTube"/>
                        <p>52k <br/> subscribers</p>
                    </a>
                </li>
                <li>
                    <a href="src/components/sidebar-social-list/SidebarSocialList#!">
                        <img src={Logo9} alt="Google+"/>
                        <p>642 <br/> followers</p>
                    </a>
                </li>
            </ul>
        </div>
    );
}