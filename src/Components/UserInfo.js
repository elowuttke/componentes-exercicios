import React from "react";
import Image from "./user.png"
import "./UserInfo.css"

export function UserInfo () {
    const userName = "Felipe"
    return (
        <div className="userInfo">
            <img src={Image} alt="imagem do usuário"/>
            {userName}
        </div>
    )
}