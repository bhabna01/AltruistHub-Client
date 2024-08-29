import * as React from "react";

import * as ReactDOM from "react-dom/client";

import './index.css'
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import AuthProvider from "./providers/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import ThemeProvider from "./providers/ThemeProvider";
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="max-w-7xl mx-auto dark:bg-gray-800">
    <React.StrictMode>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={router} />
          <ToastContainer />
        </AuthProvider>
      </ThemeProvider>
    </React.StrictMode>
  </div>
)
