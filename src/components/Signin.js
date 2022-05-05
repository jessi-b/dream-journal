import React from "react";
import firebase from "firebase/compat/app";

function Signin(){
  function handleSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log("successfully signed up!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function handleSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Successfully Signed In!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function handleSignOut() {
    firebase.auth().signOut().then(function() {
      console.log("Successfully signed out!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  return (
    <React.Fragment>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <input
          type='text'
          name='email'
          placeholder='email@address.com' />
        <input
          type='password'
          name='password'
          placeholder='Password' />
        <button type='submit'>Sign up</button>
      </form>
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <input
          type='text'
          name='signinEmail'
          placeholder='email' />
        <input
          type='password'
          name='signinPassword'
          placeholder='Password' />
        <button type='submit'>Sign in</button>
      </form>
      <h1>Sign Out</h1>
      <button onClick={handleSignOut}>Sign out</button>
    </React.Fragment>
  );
}

export default Signin;