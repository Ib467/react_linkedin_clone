import React from 'react';
import { useSelector} from 'react-redux';
import { selectUser } from "./features/userSlice"
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from './Feed'
import Login from './Login'

function App() { 

  //pull user from datastore
  const user = useSelector(selectUser)



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
