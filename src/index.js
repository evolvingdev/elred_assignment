// import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Editbio from "./components/Editbio/Editbio";
import Editinfo from './components/Editinfo/Editinfo';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/editbio",
    element: <Editbio />,
  },
  {
    path: "/editinfo",
    element: <Editinfo />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
