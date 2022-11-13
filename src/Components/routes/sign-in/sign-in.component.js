import SignUpForm from "../../sign-up-form/sign-up-form.component";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";
import Button from "../../button/button.component";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <Button onClick={logGoogleUser} buttonType="google" type="submit">
        Sign in with google
      </Button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
