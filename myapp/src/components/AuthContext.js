
const { createContext, useState, useContext } = require("react");

const AuthContext = createContext();

export const AuthProvide = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const signup = async (userData) => {
        console.log(userData);

        setUser(userData);
    }

    const login = async (userData) => {
        console.log(userData);
        const { username, password } = userData;
        if (username === user.username && password === user.password) {
            const randomBytes = new Uint8Array(12);
            window.crypto.getRandomValues(randomBytes);
            const randomString = Array.from(randomBytes)
                .map((byte) => ('0' + byte.toString(16)).slice(-2))
                .join('');
            setToken(randomString);
        }
    }

    const logout = () => {
        setToken(null);
        console.log(token)
    }

    return (
        <AuthContext.Provider value={{ user, token, signup, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuthContext = () => {
    return useContext(AuthContext);
}