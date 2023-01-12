import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page2 } from "../Page2";
import { Page1Routes } from "./Page1Routes";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route
        path="/page1"
        render={() => (
          <Switch>
            {Page1Routes.map((route) => {
              <Route
                key={route.path}
                exact={route.exact}
                path={`/page1${route.path}`}
              >
                {route.children}
              </Route>;
            })}
          </Switch>
        )}
      />

      <Route path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
};
