import React from "react";
import "./Header.css";
import logo from './tinder.png'

import { AccountCircle, ForumIcon  } from "@mui/icons-material";
import ForumSharpIcon from '@mui/icons-material/ForumSharp';
import { IconButton } from "@mui/material";

function Header() {
  return (
    <>
      <div className="header">
        <IconButton>
          <AccountCircle fontSize="large" className="header_icon" />
        </IconButton>
        <img
          className="header_logo"
          src={logo}
          alt="header logo"
        />
        <IconButton>
          <ForumSharpIcon fontSize="large" className="header_icon" />
        </IconButton>
      </div>
    </>
  );
}

export default Header;
