import { useState, useContext } from "react";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, isLoading, error } = useLogin();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await login(email, password);
            navigate('/')
        } catch (error) {
            
        }


    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button disabled={isLoading}>Login</button>
                {error && <div>{error}</div>}
            </form>
        </div>
    );
};

export default Login;
