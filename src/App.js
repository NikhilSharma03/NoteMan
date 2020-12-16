import React, { Suspense, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import { Switch,Route, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as actionCreators from './store/action/authCreator'

import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth'
import LogOut from './pages/LogOut/LogOut'
import Loader from './components/UI/Loader/Loader';

const AddNotes = React.lazy(() => import('./pages/AddNotes/AddNotes'))
const MyNotes = React.lazy(() => import('./pages/MyNotes/MyNotes'))
const Notes = React.lazy(() => import('./pages/Notes/Notes'))

const App = () => {

  const isAuth = !!useSelector(state => state.auth.token)
  
  const dispatch = useDispatch()
  const autoLogin = () => dispatch(actionCreators.autoLogin()) 

  useEffect(() => {
    autoLogin()
  },[])
  

  return <Layout>
    <Suspense fallback={<Loader />}>
      <Switch>
        {
          isAuth && <Route path="/add_notes" render={props => <AddNotes {...props} />} />
        }
        {
          isAuth && <Route path="/my_notes/:subject" render={props => <Notes {...props} />} />
        }
        {
          isAuth && <Route path="/my_notes" render={props => <MyNotes {...props} />} />
        }
        <Route path="/logout" component={LogOut} />
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={Home} />
        <Redirect from="/" to={isAuth ? "/my_notes" : "/auth"} />
      </Switch>
    </Suspense>
  </Layout>;
};

export default App;
