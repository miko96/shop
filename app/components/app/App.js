import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';


import NavMenu from '../menu/NavMenu';
import {
  Header,
  MainContent,
} from '../common';

function App({ route }) {
  return (
    <section className="app_root">
      <Header>
        <NavMenu />
      </Header>
      <MainContent>
        {renderRoutes(route.routes)}
      </MainContent>
    </section>
  );
}

export default withRouter(connect()(App));
