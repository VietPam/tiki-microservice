import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  redirect,
} from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Search from "../pages/Search";
import Product from "../pages/Product";
import Page_404 from "../pages/Page_404";
import Cart from "../pages/Cart";
import User from "../pages/User";
import Seller from "../pages/Seller";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        loader={({ request }) => {
          let token = localStorage.getItem("token_taka");
          let pathname = new URL(request.url).pathname;
          if (token) return { hasUser: true, pathname: pathname };
          else return { hasUser: false, pathname: pathname };
        }}
        element={<App />}
        errorElement={<Page_404 />}
      >
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:category/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/user"
          loader={() => {
            let token = localStorage.getItem("token_taka");
            if (!token) return redirect("/");
            else return null;
          }}
          element={<User />}
        />
      </Route>
      <Route
        path="/login"
        element={<Login />}
        loader={() => {
          let token = localStorage.getItem("token_taka");
          if (token) return redirect("/");
          else return null;
        }}
        errorElement={<Page_404 />}
      />
      ;
      <Route
        path="/register"
        element={<Register />}
        loader={() => {
          let token = localStorage.getItem("token_taka");
          if (token) return redirect("/");
          else return null;
        }}
        errorElement={<Page_404 />}
      />
      ;
      <Route
        path="/seller"
        element={<Seller />}
        errorElement={<Page_404 />}
      ></Route>
    </Route>
  )
);

export default router;
