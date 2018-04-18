import React from 'react'
import './Header.css'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="header">
                {this.props.children}
            </section>
        );
    }
};