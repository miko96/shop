import React, { Component } from 'react';

import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="header">
                {this.props.children}
            </div>
        );
    }
};

export default Header;