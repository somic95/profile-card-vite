import React from "react";
import "./UserProfileCard.css";
import profile_icon from "../Assets/profileimage.jpg";

const UserProfileCard = () => {
  return (
    <div className="card">
      <div className="gradient"></div>
      <div className="profile-down">
        <img src={profile_icon} alt="" />
        <div className="profile-title">Declan Rice</div>
        <div className="profile-decription">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut earum
          eum fuga praesentium possimus repudiandae officia illum in molestias
          quasi.
        </div>
        <div className="profile-button">
          <a href="mailto:rice@arsenal.com">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
