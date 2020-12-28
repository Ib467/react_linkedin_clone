import React, { useEffect } from 'react';
import { useSelector} from 'react-redux';
import { auth } from './firebase';
import { selectUser } from "./features/userSlice"
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from './Feed'
import Login from './Login'

function App() { 

  //pull user from datastore
  const user = useSelector(selectUser)

  useEffect(() => {
    auth.onAutStateChanged(userAuth => {
      if (userAuth){
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl,
        }))
      } else{
        //user is logged out
        dispatch(logout());
      }
    })
  }, [])

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
