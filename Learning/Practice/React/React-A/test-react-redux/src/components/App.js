import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import coursesPageManualMapping from "./courses/CoursesPageManualMapping";
import CoursesPageBindAction from "./courses/CoursesPageBindAction";
import CoursesPageObjectForm from "./courses/CoursesPageObjectForm";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/courses" component={CoursesPage} />
        <Route path="/courses1" component={coursesPageManualMapping} />
        <Route path="/courses2" component={CoursesPageBindAction} />
        <Route path="/courses3" component={CoursesPageObjectForm} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
