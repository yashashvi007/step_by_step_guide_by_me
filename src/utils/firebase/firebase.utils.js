import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    // do it yourself no solution this time for this as you already done it😁
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    // do it yourself no solution this time for this as you already done it🥳
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};