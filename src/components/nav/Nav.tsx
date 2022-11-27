import React, {useState} from 'react';
import './Nav.css';
import {ContactModal} from "../contact-modal/ContactModal";

export const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
          <nav className="nav">
              <a href="#!" className="logo">FASHION</a>
              <ul className="nav-list">
                  <li><a href="#!">Home</a></li>
                  <li><a href="#!">Recipes</a></li>
                  <li><a href="#!">Article</a></li>
                  <li><a href="#!" onClick={() => setIsOpen(true)}>Contact</a></li>
                  <li><a href="#!">Purchase</a></li>
              </ul>
          </nav>
          <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
      </>
  );
}