import React, { useState, useEffect } from "react";
import { Link,  } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [profile, setProfile] = useState(null);
 //  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user profile data
    axios.get("http://localhost:3002/profile", { withCredentials: true })
      .then(res => {
        setProfile(res.data);
      })
      .catch(err => {
        console.error("Failed to load profile:", err);
        // Optionally redirect to login
      });
  }, []);

  const handleMenuClick = (index) => setSelectedMenu(index);

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3002/logout", {}, { withCredentials: true });
      window.location.href = "http://localhost:3000/"; // redirect to frontend login
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" alt="Logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          {["Dashboard", "Orders", "Holdings", "Positions", "Funds", "Apps"].map((item, index) => (
            <li key={index}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/${item.toLowerCase()}`}
                onClick={() => handleMenuClick(index)}
              >
                <p className={selectedMenu === index ? activeMenuClass : menuClass}>
                  {item}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick} style={{ cursor: "pointer" }}>
          <div className="avatar">{profile ? profile.username.charAt(0).toUpperCase() : "U"}</div>
          <p className="username">Profile</p>
        </div>
        {isProfileDropdownOpen && profile && (
          <div className="profile-dropdown">
            <p><strong>Username:</strong> {profile.username}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
