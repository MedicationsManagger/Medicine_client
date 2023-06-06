import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./User/UserContext";

export default function Login() {
    const [userName, setuserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const login = async () => {

        const res = await fetch(`https://localhost:7247/api/User?userName=${userName}&password=${password}`)
        if (!(res).ok) {
            throw Error(`status: ${res.status} is making troubles again😱`);
        }
        else
            if (res.status === 204) {
                let conf = window.confirm("אנחנו לא מכירים עדיין. רוצה להירשם עכשיו?");
                if (conf) {
                    navigate("../register", { replace: true });
                }
                else {
                    console.log("חבל");
                }
            }
            else {
                const user = await res.json();

                localStorage.setItem("userId", user.id);
                sessionStorage.setItem("user", user);
                await (setUser && setUser(user));
                navigate("./medicines", { replace: true });
            }
    }
    useEffect(() => {
        console.log({ user });
    }, [user])


    return (
        <div id="login" >
            <h1>שלום 😊</h1>
            <br />
            <input id="userName" placeholder="כתובת מייל" onChange={(e) => { { setuserName(e.target.value) } }}></input>
            <br /><br />
            <input id="password" placeholder="סיסמה" onChange={(e) => { { setPassword(e.target.value) } }}></input>
            <br /><br />
            <button id="btn" onClick={login}>התחבר</button>

        </div>
    )
}


