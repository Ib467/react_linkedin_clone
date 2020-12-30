import React, { useState} from 'react'
import { useDispatch } from "react-redux";
import { auth } from './firebase';
import { login } from "./features/userSlice"
import "./Login.css"

function Login() {
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [ profilePic, setProfilePic] = useState("")
    const dispatch = useDispatch();

    //login to app
    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(
          (userAuth) => {
              dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoUrl,
             })
          );
        }).catch(error => alert(error))
    };
    //register to app
    const register = () => {
        if (!name) {
            return alert("Please enter a full name!")
        }

        //cow reate a user with email & password
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth) => {  
            userAuth.user
              .updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {  ///then push user into redux store
                dispatch(
                  login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic,
                    password: password
                }))
            })
        }).catch(error => alert(error.message));
    }
 


    return (
        <div className="login">
            <h1> Your not loged in!</h1>

            <img src="https://www.cbronline.com/wp-content/uploads/2016/06/linkedin.jpg"
            alt=""
            />
 
            <form>
                <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name(required if registering)"
                type="text" />

                <input 
                value={profilePic}
                onChange={(e) => setProfilePic(e.target.value)}
                type="text" placeholder="Profile pic URL (optional)" />
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" 
                    placeholder="Email" 
                 />
                <input type="password" placeholder="Password" value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p> Not a member ? 
                <span className="login__register" onClick={ register }> Register now</span>
            </p>

        </div>
    )
}

export default Login
