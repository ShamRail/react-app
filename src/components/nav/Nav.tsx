import React, {useState} from 'react';
import './Nav.css';
import {ContactModal} from "../contact-modal/ContactModal";

export const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
          <nav className="nav">
              <a href="src/components/nav/Nav#!" className="logo">FASHION</a>
              <ul className="nav-list">
                  <li><a href="src/components/nav/Nav#!">Home</a></li>
                  <li><a href="src/components/nav/Nav#!">Recipes</a></li>
                  <li><a href="src/components/nav/Nav#!">Article</a></li>
                  <li><a href="src/components/nav/Nav#!" onClick={() => setIsOpen(true)}>Contact</a></li>
                  <li><a href="src/components/nav/Nav#!">Purchase</a></li>
              </ul>
          </nav>
          <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
      </>
  );
}