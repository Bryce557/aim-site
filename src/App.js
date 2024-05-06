import React from 'react';
//import MovieList from './components/movielist';
//import Movie from './components/movie';
import { Provider } from 'react-redux';
import store from './stores/store';
import {HashRouter, Route} from 'react-router-dom';
import HomePage from './components/homepage'
import Authentication from './components/authentication';
import AcmHeader from './components/acmheader';
import Register from './components/register';
import Blogs from './components/blogs'
import BlogDetail from './components/blogdetail'
import './App.css'

function App() {
  return (
      <div className="App">
        <Provider store={store}>
          <HashRouter>
            <AcmHeader />
            <Route exact path="/" render={()=><HomePage />}/>
            <Route path="/signin" render={()=><Authentication />}/>
            <Route path="/register" render={()=><Register />}/>
            <Route path="/blog" render={()=><Blogs />}/>
          </HashRouter>
        </Provider>
      </div>
  );
}

export default App;

//
//<Route exact path="/blogs/:blogId" render={()=><Blogs />}/>
//  <Route path="/blogs/:blogId" render={()=><BlogDetail />}/>