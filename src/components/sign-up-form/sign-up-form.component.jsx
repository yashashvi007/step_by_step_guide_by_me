// create this again all yourself this time no solution😁
import { useState } from 'react';

import FormInput from '../form-input/form-input.component'; 
import Button from '../button/button.component'; 

import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    email: '',
    password: '',
    confirmPassword:'',
};

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password,confirmPassword } = formFields;

    
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };


    const signInWithGoogle = async () => {
        try {
            const { user } = await signInWithGooglePopup(); 
            console.log('Google sign-in successful:', user);
    
        } catch (error) {
            console.error('Error signing in with Google:', error);
            alert('Google sign-in failed. Please try again.');
        }
    };

    
    const handleSubmit = async (event) => {
        event.preventDefault(); 

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log('User signed in:', response); 
            resetFormFields();
        } catch (error) {
            
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('No user found with this email');
                    break;
                default:
                    console.error('Sign-In Error:', error.message);
                    alert('An error occurred. Please try again.');
            }
        }
    };


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className='sign-in-container'>
        
            <form onSubmit={handleSubmit}>
                {/* Email input field */}
                <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />
                
                {/* Password input field */}
                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />
                 <FormInput
                    label='confirm Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={confirmPassword}
                />
                
                <div className='buttons-container'>
                

                
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>
                        Log-In
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
