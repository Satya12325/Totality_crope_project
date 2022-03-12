import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useScrollBy } from "react-use-window-scroll";
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.25),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, .35),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));



export default function Navbar() {
  const [offset, setOffset] = useState("transparent");
//  var Colour = "transParent"
  useEffect(() => {
    const onScroll = () => setOffset("transperent");
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
}, []);

console.log(offset);
  return (
    <div>
     

      <div
       
        style={{
          background: "black",
          color: "white",
          border: "none",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Typography
            // style={{
              
            //   justifyContent: "space-between",
            //   width:"100%"
            // }}
            className=" w-full justify-between flex mt-1"
          >
            <div style={{ display: "flex" }}>
              <img
                style={{ height: "30px", marginRight: "20px" }}
                src="https://opensea.io/static/images/logos/opensea.svg"
                alt=""
              />
              <h3
                className="d-none d-md-block"
                style={{ fontFamily: "Quarto", fontWeight: "bold" }}
              >
                OpenSea
              </h3>
            </div>
            <div style={{ display: "flex" }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <AccountBalanceWalletOutlinedIcon style={{fontSize: "44px"}} />
              <MenuIcon style={{fontSize: "44px"}}/>
            </div>
          </Typography>
        </Toolbar>
      </div>

      <Toolbar />
      
    </div>
  );
}
