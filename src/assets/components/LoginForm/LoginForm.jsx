import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postLogin from "../../../api/post-login";
import { useAuth } from "../../../hooks/use-auth";
import "./LoginForm.css"
import Button from "../Buttton/Button";


function LoginForm() {
    const navigate = useNavigate();
    const {auth, setAuth} = useAuth();

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (credentials.username && credentials.password) {
            postLogin(
                credentials.username,
                credentials.password,
                ).then((response) => {
                    window.localStorage.setItem("token", response.token);
                    setAuth({
                        token: response.token,
                    });
                    navigate("/");
                });
        }
    };

    const handleSignUp = () => {
        navigate(`/signup`);
     }

    return (
<>
    <form>
        <div>
                <label htmlFor="username">Username:</label>
                <input 
                type="text" 
                id="username" 
                placeholder="Enter username"
                onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input 
                type="password" 
                id="password" 
                placeholder="Password"
                onChange={handleChange} />      
        </div>
        <Button text={"Login"} btnClass = "btn-info "  onClick={handleSubmit}/>
      
       
    </form> 
    <p>Do not have account? Please, Sign Up</p>
    <Button text={"Sign Up"} btnClass = "btn-info "  onClick={handleSignUp}/>
   
</>
     )
    }
    export default LoginForm;