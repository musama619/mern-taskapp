import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signup, error, isLoading } = useSignup();
    const handleSubmit = async (e) => {
        e.preventDefault();

        await signup(email, password);
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
                <button disable={isLoading}>Signup</button>
                {error && <div>{error}</div>}
            </form>
        </div>
    );
};

export default Signup;
