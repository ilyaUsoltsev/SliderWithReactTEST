import React from "react";
import { Route, Switch, BrowserRouter, Redirect} from "react-router-dom";
import { Slider } from "./components/slider/slider.component";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/slider" component={Slider} exact />
          <Route exact path="/" render={() => (<Redirect to="/slider" />)} /> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
