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
    apiKey: "AIzaSyDXSCORNzXkJx7_JflEPJjoWSgJL67fiWE",
    authDomain: "e-commerce-35114.firebaseapp.com",
    projectId: "e-commerce-35114",
    storageBucket: "e-commerce-35114.firebasestorage.app",
    messagingSenderId: "186450182311",
    appId: "1:186450182311:web:0f69e6a224e079ba185b82"
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
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        try {
            await setDoc(userDocRef, {
                displayName: userAuth.displayName,
                email: userAuth.email,
                password: userAuth.password,
                ...additionalInformation,
            });
        } catch (error) {
            console.log("error creating user documnet")
        }

    }
    // do it yourself no solution this time for this as you already done it😁
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    try {
        const userCrediential = await createUserWithEmailAndPassword(auth, email, password);
        const { user } = userCrediential;
        await createUserDocumentFromAuth(user);
        return user;
    } catch (error) {
        console.log("error in creating user and passwaord", error);
    }
    // do it yourself no solution this time for this as you already done it🥳
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};