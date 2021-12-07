import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

// Domain Auth0
// dev-n7f-c1rx.us.auth0.com

// Client ID Auth0
// BfnVXdjoiGzvygWU4YYfSPEC1tq90KMv

ReactDOM.render(
  <Auth0Provider
    domain="dev-n7f-c1rx.us.auth0.com"
    clientId="BfnVXdjoiGzvygWU4YYfSPEC1tq90KMv"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,

  document.getElementById("root")
);
