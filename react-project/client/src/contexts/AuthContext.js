import { createContext, useState, useEffect } from "react";

import * as authServices from "../services/authServices";

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {

    useEffect(() => {
        authServices.getUserProfile()
            .then((res) => {
                if (!!res) {
                    login(res)
                } else {
                    authServices.logout();
                }
            })
    }, [])

    const [user, setUser] = useState({
        _id: '',
        email: '',
        firstName: '',
        lastName: ''
    });



    const login = (data) => setUser(data)

    const register = (data) => setUser(data)

    const logout = () => {
        setUser({
            _id: '',
            email: '',
            firstName: '',
            lastName: ''
        })
    }

    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}