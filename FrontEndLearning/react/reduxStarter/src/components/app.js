/**
 * Book list should be a container( component which interact with state through rdux, sometimes also refered as smart component)
 * book component inside container booklist is just s component, also refered as dumb component, this means it doesnt interact with the state directly
 * 
 */

import React, { Component } from 'react';
import BookList from '../container/book-list';
import Bookdetail from '../container/book-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <Bookdetail />
      </div>
    );
  }
}
