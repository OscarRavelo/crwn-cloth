import { useState } from "react";
import "./sign-up-form.styles.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const { email, displayName, password, confirmPassword } = event.target;
  if (password.value === confirmPassword.value) {
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email.value,
        password.value
      );
      const userDocRef = await createUserDocumentFromAuth(user, {
        displayName: displayName.value,
      });
    } catch (error) {}
  } else {
    alert("passwords do not match");
    return;
  }
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account ? </h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          name="displayName"
          onChange={handleChange}
          required
          type="text"
          value={displayName}
        />

        <FormInput
          label="Email"
          required
          type="email"
          value={email}
          name="email"
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          required
          value={password}
          type="password"
          name="password"
          onChange={handleChange}
        />

        <FormInput
          label="Confirm Password"
          required
          value={confirmPassword}
          type="password"
          name="confirmPassword"
          onChange={handleChange}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
