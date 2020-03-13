import React from 'react';
import { Provider } from 'react-redux' ;
import store from './store/index';

import Article from './components/Article';
import Form from './components/Form';
import Post from './components/Post';


function App() {
  return (
    <Provider store={store}>
      <div>
        <div>
        <Article />
        </div>
        <br />
        <div>
          <h1>Add new article</h1>
          <Form />
        </div>
        <div>
          <h1>Remote Articles</h1>
          <Post />
        </div>
      </div>
    </Provider>
  );
}

export default App;
