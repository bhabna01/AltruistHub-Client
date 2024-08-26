import * as React from "react";

import * as ReactDOM from "react-dom/client";

import './index.css'
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="max-w-7xl mx-auto">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
)
