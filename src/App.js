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
import MovieForm from './Components/Movie/Form';
import BlogForm from './Components/Blog/Form';
import RecipeForm from './Components/Recipe/Form';
import MovieFull from './Components/Movie/Full';
import BlogFull from './Components/Blog/Full';
import RecipeFull from './Components/Recipe/Full';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/new" component={MovieForm} />
        <Route path="/blog/new" component={BlogForm} />
        <Route path="/recipe/new" component={RecipeForm} />
        <Route path="/movie/:id/edit" component={MovieForm} />
        <Route path="/blog/:id/edit" component={BlogForm} />
        <Route path="/recipe/:id/edit" component={RecipeForm} />
        <Route path="/movie/:id" component={MovieFull} />
        <Route path="/blog/:id" component={BlogFull} />
        <Route path="/recipe/:id" component={RecipeFull} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

library.add(fas);

export default App;
