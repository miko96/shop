import React from 'react';
import { renderRoutes } from 'react-router-config';

const Shop = ({ route }) => (
  <section className="shop_container">
    {renderRoutes(route.routes)}
  </section>
);

export default Shop;
