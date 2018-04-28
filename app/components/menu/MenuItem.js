import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MenuItem.css';

const MenuItem = ({ name, link }) => (
  <Link
    className="nav_menu_item"
    to={link}
  >
    {name}
  </Link>
);

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default MenuItem;
