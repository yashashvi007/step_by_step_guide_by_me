import {
    signInWithGooglePopup,
    createUserProfileDocument,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        // do 2 things here 
        // open the google pop up for sign in 
        // then create a User Profile
        // sneeky peeky all the methods exists in code already 
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </div>
    );
};

export default SignIn;














// Solution -
// const response = await signInWithGooglePopup();
// createUserProfileDocument(response);