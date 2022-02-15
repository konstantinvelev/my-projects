import { createContext, useState, useEffect } from "react";

import * as authServices from "../services/authServices";

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {

    const [user, setUser] = useState({
        id: '',
        username: ''
    });

    useEffect(() => {
        authServices.getUserProfile()
            .then((res) => {
                if (!!res && res.message === undefined) {
                    login(res)
                } else {
                   // authServices.logout();
                }
            })
    }, [])

    const login = (data) => setUser(data)

    const register = (data) => setUser(data)

    const logout = () => {
        setUser({
            id: '',
            username: ''
        });
    }

    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}