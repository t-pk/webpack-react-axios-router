import React, { Suspense } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

const Home                                = React.lazy(() => import("./Home"));
const Test                                = React.lazy(() => import("./Test"));
const NoMatch                             = React.lazy(() => import("./NoMatch"));
const DynamicPage                         = React.lazy(() => import("./DynamicPage"));

const App = () => {
  return (
    <Router>
      <div>
        <Suspense fallback={true}>
          <Switch>
            <Route exact path="/"         component={Home} />
            <Route exact path="/dynamic"  component={DynamicPage} />
            <Route exact path="/test"     component={Test} />
            <Route                        component={NoMatch} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
