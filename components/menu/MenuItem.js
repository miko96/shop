import React from 'react';



const MenuItem = (props, context) => (
    <li>
        <a className="top-menu-list-item" href={props.item.link}>
            {props.item.label}
        </a>
    </li>
);

export default MenuItem;