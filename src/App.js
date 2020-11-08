import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Landing from './Components/Landing';
import MovieForm from './Components/Movie/Form.js';
import BlogForm from './Components/Blog/Form';
import RecipeForm from './Components/Recipe/Form';

function App() {
  return (
    <Router>
      <Switch>
        {/* TODO - Prefixed route with types */}
        <Route path="/movie/new" component={MovieForm} />
        <Route path="/blog/new" component={BlogForm} />
        <Route path="/recipe/new" component={RecipeForm} />
        <Route path="/movie/:id/edit" component={MovieForm} />
        <Route path="/blog/:id/edit" component={BlogForm} />
        <Route path="/recipe/:id/edit" component={RecipeForm} />
        {/* <Route path="/movie/:id" component={MovieForm} />
        <Route path="/blog/:id" component={MovieForm} />
        <Route path="/recipt/:id" component={MovieForm} /> */}
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

library.add(fas);

export default App;
