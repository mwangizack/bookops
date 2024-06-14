import React from "react";
import { Link } from "react-router-dom";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import Button from "@mui/material/Button";

function Header({ logout }) {
  return (
    <header>
      <Link to="/" className="logo">
        BookOps
      </Link>
      <div className="logout-section">
        <Button
          onClick={logout}
          endIcon={<PowerSettingsNewOutlinedIcon fontSize="small" />}
          style={{
            color: "#fff",
            textTransform: "capitalize",
            fontSize: "1rem",
            fontFamily: "Poppins",
          }}
        >
          Logout
        </Button>
      </div>
    </header>
  );
}

export default Header;
