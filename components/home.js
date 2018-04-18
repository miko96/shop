import React from 'react';

import '../public/reset.css'
import './Home.css'
import api from '../app/utils/api.js'

export default class Home extends React.Component {
  constructor(props) {
    super();
  }

  fetchh() {
    var response = api
      .fetchData('http://localhost:8181/api/comments/all');
    // .then(function(comments) {
    //     console.log(comments);
    // });
    console.log(response);
  }

  render() {
    return (
      <section>
        <section className="header">
          <div className="nav_menu_wrap">
            <div className="nav_menu">
              <a className='nav_menu_item' onClick={e => this.fetchh()}>first</a>
              <a className='nav_menu_item'>second</a>
              <a className='nav_menu_item'>third</a>
              <a className='nav_menu_item'>fourth</a>
            </div>
          </div>
        </section>
        <section className="content">
          <img max-width='2000px' src="http://via.placeholder.com/350x2000" />
        </section>
      </section>
    );
  }
}