import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import PostsIndex from './posts_index';
import PostsNew from './posts_new';
import PostsShow from './post_show.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>Routes and redux forms</div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    );
  }
}
