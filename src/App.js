import React from 'react';
import {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { login, logout, selectUser } from "./features/userSlice"
import Header from "./Header";
import { auth } from './firebase'
import Sidebar from "./Sidebar";
import Feed from './Feed'
import Login from './Login'
import './App.css'

function App() { 

  //pull user from datastore
  const user = useSelector(selectUser)
  const dispatch = useDispatch() ;

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            profileUrl: userAuth.photoUrl,
          })
        )
      }else{
        dispatch(logout());
      }
    })
  }, []);

  return (
    <div className="app">
      <Header /> 

      {!user ? ( <Login /> ) : (
        <div className="app__body" >
        <Sidebar />
        <Feed />
             {/* Widgets */}
      </div>
      
      )}
      
      

    </div>
  );
}

export default App;
