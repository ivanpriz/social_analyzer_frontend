import React from "react";
import "./UserCard.css";

type UserCardProps = {
    avatarUrl?: string;
    userFirstName: string;
    userLastName: string;
}

export const UserCard: React.FC<UserCardProps> = ({ avatarUrl, userFirstName, userLastName }) => {
    return (
        <div className="profile-card">
            <div className="avatar">
                <img src={avatarUrl} />
            </div>
            <div className="username">{userFirstName} {userLastName}</div>
            <div className="sign-out-block">
                <img src="./sign-out-icon.png" className="sign-out-icon" />
                <div>Sign Out</div>
            </div>
        </div>
    )
}
