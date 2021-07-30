import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Category from "./components/Category";

const App = () => {
  const links = [
    {
      name: "Business",
      url: "/category/business",
    },
    {
      name: "Entertainment",
      url: "/category/entertainment",
    },
    {
      name: "General",
      url: "/category/general",
    },
    {
      name: "Health",
      url: "/category/health",
    },
    {
      name: "Science",
      url: "/category/science",
    },
    {
      name: "Sports",
      url: "/category/sports",
    },
    {
      name: "Technology",
      url: "/category/technology",
    },
  ];
  return (
    <Router>
      <div className="App">
        <nav className="flex justify-between bg-white shadow-sm py-2">
          <Link
            to="/"
            className="flex text-xl font-semibold uppercase px-4 py-2"
          >
            News App
          </Link>
          <div className="flex">
            {links.map((link) => (
              <Link
                to={link.url}
                className="px-4 py-2 mx-2 uppercase bg-gray-300 rounded"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/category/:category" children={<Category />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
