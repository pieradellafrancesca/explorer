import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import About from "./pages/About";
import Activity from "./pages/Activity";
import City from "./pages/City";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="activity" element={<Activity />}>
        <Route path=":id" element={<h1>SPECIFIC ACTIVITY</h1>} />
      </Route>
      <Route path="city" element={<City />}>
        <Route path=":id" element={<h1>SPECIFIC CITY</h1>} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
