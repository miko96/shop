import React from 'react';
// import ProductsGallery from '../components/gallery/ProductsGallery';
// import ProductView from '../components/product/ProductView';
import {
  About,
  App,
  ProductsGallery,
  ProductView,
  Shop,
} from '../components';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: () => <div>default</div>,
      },
      {
        path: '/home',
        exact: true,
        component: () => <div>home</div>,
      },
      {
        path: '/about',
        component: About,
      },
      {
        path: '/shop',
        component: Shop,
        routes: [
          {
            path: '/shop/product/:name',
            component: ProductView,
          },
          {
            component: ProductsGallery,
          },
        ],
      },
      {
        path: '*',
        component: () => <div>Not Found</div>,
      },
    ],
  },
];

export default routes;
