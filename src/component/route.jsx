import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Main from "../component/main"
import Quotation from "../component/quotation"
import Product from "../component/product"


export default function BasicExample() {
  return (
    <Router>
      <div>
       

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/Product">
            <Product />
          </Route>
          <Route path="/Quotation">
            <Quotation />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
