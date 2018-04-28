import React from 'react';
import PropTypes from 'prop-types';
import './MainContent.css';

const MainContent = ({ children }) => (
  <main className="main_content">
    {children}
  </main>
);

MainContent.propsTypes = {
  route: PropTypes.object.isRequired,
};

export default MainContent;
