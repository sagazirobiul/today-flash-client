import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import firebaseConfig from "../../config/firebaseConfig"


if(!firebase.apps.length){
    initializeApp(firebaseConfig);
}

const setToken = (email) => {
      localStorage.setItem('email', email);
  }

export const loginWithProvider = provider => {
    const auth = getAuth();
    return signInWithPopup(auth, provider)
    .then( res => {
        const email = res.user.email;
        setToken(email);
        return email;
    }).catch( error  => {
        const message = {
          error: error.message
        }
        return message;
    });
};

export const createAccount = (email, password) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
    .then( res => {
      setToken(email);
      return email;
    })
    .catch( error  => {
      const message = {
        error: error.message
      }
      return message;
    });
}

export const loginWithEmail = (email, password) =>{
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password)
  .then( res => {
    setToken(email);
    return email;
  })
  .catch( error => {
      const message = {
      error: error.message
      }
      return message;
  });
}

export const handleSignOut = () => {
    const auth = getAuth();
    return signOut(auth)
        .then(() => {
            localStorage.removeItem('email');
            const signedOutUser = {
                email: ''
            }
            return signedOutUser;
        })
}