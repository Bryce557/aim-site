import React from 'react';
import { Provider } from 'react-redux';
import store from './stores/store';
import { HashRouter, Route } from 'react-router-dom';
import HomePage from './components/homepage';
import Authentication from './components/authentication';
import AcmHeader from './components/acmheader';
import Register from './components/register';
import Blogs from './components/blogs';
import BlogDetail from './components/blogdetail';
import { BackgroundBeams } from './components/ui/background-beams.tsx';
import './App.css'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <div>
          <BackgroundBeams className="background-beams"/>
            <AcmHeader />
              <Route exact path="/" render={() => <HomePage />} />
              <Route path="/signin" render={() => <Authentication />} />
              <Route path="/register" render={() => <Register />} />
              <Route path="/blog" render={() => <Blogs />} />
              <Route path="/blogs/:blogId" render={() => <BlogDetail />} />
          </div>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
