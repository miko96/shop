import React from 'react';
import {
  About,
  App,
  CreateProduct,
  Product,
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
        exact: true,
        component: About,
      },
      {
        path: '/shop',
        component: Shop,
        routes: [
          {
            path: '/shop/products/:productKey',
            exact: true,
            component: Product,
          },
          {
            path: '/shop/createproduct',
            exact: true,
            component: CreateProduct,
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
