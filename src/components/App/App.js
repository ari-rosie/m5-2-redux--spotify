import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Redirect
 } from 'react-router-dom';

 import GlobalStyle from '../GloblaStyles';
 import ArtistRoute from '../ArtistRoute';



const DEFAULT_ARTIST_ID = '66lH4jAE7pqPlOlzUKbwA0';

const App = () => {
  return(
    <>
      <GlobalStyle/>
      <Router>
        <Switch>
          <Route path='/artists/:id'>
            <ArtistRoute />
          </Route>
          <Route path='*'>
            <Redirect to={`/artists/${DEFAULT_ARTIST_ID}`} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
