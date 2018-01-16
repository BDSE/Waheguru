import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import PostsIndex from './posts_index';
import PostsNew from './posts_new';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>Routes and redux forms</div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/" component={PostsIndex} />
      </Switch>
    </div>
    );
  }
}
