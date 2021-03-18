/*
 * @Date: 2021-03-17 16:34:13
 * @LastEditors: HAYWAEL
 * @LastEditTime: 2021-03-18 10:41:57
 * @FilePath: /webpack5-demo/src/routes/index.tsx
 */
import routes from './router.config';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const RouteConfig:React.FC = () => {
    return (
        <BrowserRouter>
        <Routes>
          {/* <Route path="" element={<HomePage />} />
          <Route
            path="customers"
            element={<CustomersPage />}
          />
          <Route
            path="products"
            element={<ProductsPage />}
          />
          <Route
            path="products/:id"
            element={<ProductsPage />}
          /> */}
        </Routes>
      </BrowserRouter>
    )
  }
  


