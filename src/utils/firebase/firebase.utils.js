// if you want to understand to this file, give me a call it's a bit complicated to understand

import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmLZ4Eu7LM3pA0qMGMuRoI_IW6t3qKeOI",
    authDomain: "react-ecommerce-9ff61.firebaseapp.com",
    projectId: "react-ecommerce-9ff61",
    storageBucket: "react-ecommerce-9ff61.appspot.com",
    messagingSenderId: "922648227542",
    appId: "1:922648227542:web:5ce0984f2edb77dfd56377"
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    // it's time to do some database now 
    // i want you to create a collection for users
    // each document should contain displayName, user email and the timestamp user createdAt
};

































// Solution -
// const userDocRef = doc(db, 'users', userAuth.uid);

// const userSnapshot = await getDoc(userDocRef);

// if (!userSnapshot.exists()) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();

//     try {
//         await setDoc(userDocRef, {
//             displayName,
//             email,
//             createdAt,
//         });
//     } catch (error) {
//         console.log('error creating the user', error.message);
//     }
// }

// return userDocRef;