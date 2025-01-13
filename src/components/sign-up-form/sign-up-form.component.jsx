import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      // Create user with email and password
      const userCredential = await createAuthUserWithEmailAndPassword(email, password);
      const { user } = userCredential;

      // Create the user document in Firestore
      await createUserDocumentFromAuth(user, { displayName });

      console.log('User signed up:', user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          alert('Email is already in use');
          break;
        case 'auth/weak-password':
          alert('Password is too weak');
          break;
        default:
          console.error('Sign-Up Error:', error.message);
          alert('An error occurred. Please try again.');
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        {/* Display Name input field */}
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

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

        {/* Confirm Password input field */}
        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />

        {/* Submit button */}
        <div className='buttons-container'>
          <Button type='submit'>login</Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
