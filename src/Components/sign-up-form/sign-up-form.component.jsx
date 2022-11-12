import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

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
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          name="displayName"
          onChange={handleChange}
          required
          type="text"
          value={displayName}
        />

        <label>Email</label>
        <input
          required
          type="email"
          value={email}
          name="email"
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          required
          value={password}
          type="password"
          name="password"
          onChange={handleChange}
        />

        <label>Confirm Password</label>
        <input
          required
          value={confirmPassword}
          type="password"
          name="confirmPassword"
          onChange={handleChange}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
