import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Redirect
 } from 'react-router-dom';
 import { useDispatch, useSelector } from 'react-redux';


 import GlobalStyle from '../GloblaStyles';
 import ArtistRoute from '../ArtistRoute';
import { requestAccessToken, receiveAccessToken, receiveAccessTokenError } from '../../actions';



const DEFAULT_ARTIST_ID = '66lH4jAE7pqPlOlzUKbwA0';

const App = () => {
const dispatch = useDispatch();
const status = useSelector(state => state.auth.status);

  React.useEffect(() => {
    dispatch(requestAccessToken());

    fetch("/spotify_access_token")
      .then((res) => res.json())
      .then((json) => {
        dispatch(receiveAccessToken(json.access_token));

      })
      .catch((err) => {
        console.error(err);
        dispatch(receiveAccessTokenError());
      });
  }, []);
  

  return(
    <>
      <GlobalStyle/>
      {status === 'idle' &&
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
      }
    </>
  );
};

export default App;
