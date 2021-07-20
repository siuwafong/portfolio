import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
  return (
    <header className="bg-blue-500">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-3xl font-bold "
            to="/"
            exact
          >
            Wilson Fong
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded "
            activeClassName="text-white bg-red-600"
          >
            Projects
          </NavLink>
          <NavLink
            className="inline-flex items-center py-3 px-3 my-6 rounded "
            activeClassName="text-white bg-red-600"
            to="/post"
          >
            Blog Posts
          </NavLink>
          <NavLink
            className="inline-flex items-center py-3 px-3 my-6 rounded "
            activeClassName="text-white bg-red-600"
            to="/about"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.linkedin.com/in/wilsonfong1002/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/siuwafong"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
