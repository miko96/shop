import React from 'react';
import PropTypes from 'prop-types';
import './Menu.css';

const Menu = ({ children }) => (
  <div className="nav_menu_wrap">
    <div className="nav_menu">
      {children}
    </div>
  </div>
);

Menu.propTypes = {
  children: PropTypes.node,
};

Menu.defaultProps = {
  children: {},
};

export default Menu;
