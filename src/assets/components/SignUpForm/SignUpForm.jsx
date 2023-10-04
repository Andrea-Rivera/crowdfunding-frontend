import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postSignUp from "../../../api/post-signup";
import postLogin from "../../../api/post-login";
import Button from "../Buttton/Button";

function SignUpForm() {
  const navigate = useNavigate();


  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setCredentials(() => ({
        ...credentials,
      [id]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(credentials)
    if (credentials.username && credentials.password && credentials.email) {
      postSignUp(
        credentials.username,
        credentials.password,
        credentials.email
      )
      .then(() => {
        postLogin(credentials.username, credentials.password).then(
          (response) => {
            window.localStorage.setItem("token", response.token);
            navigate("/");
          }
        );
      })
    }
  };

  return (
    <>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <Button text={"Sign Up"} btnClass="btn-info " onClick={handleSubmit} />
      </form>
    </>
  );
}

export default SignUpForm;
