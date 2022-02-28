import styles from 'styled-components';
import Typography from '@mui/material/Typography';
import Vector from "./SocialIcon/Vector (3).png";
import Vector1 from "./SocialIcon/Vector (4).png"
import Vector2 from "./SocialIcon/Vector (5).png"
import Vector3 from "./SocialIcon/Vector (6).png"
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Button from '@mui/material/Button';




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
    [theme.breakpoints.up("sm")]: {
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
  
  

export default function Footer(){


    const Div = styles.div`
    width:  100%;
    height: 130vh;   
    background: linear-gradient(0.13deg, #004ADF -51.4%, rgba(241, 246, 255, 0) 99.89%);

    display: flex;
    @media all and (max-width: 850px) {
       flex-direction: column;
       height: 100%;
      }
    `
    const RightDiv = styles.div`
    width: 50%;
    @media all and (max-width: 850px) {
        width:100%;
    }
    
    `
    const LeftDiv = styles.div`
        width: 50%;
        background: rgb(245,245,245);
        background: linear-gradient(180deg, rgba(245,245,245,1) 9%, rgba(69,141,234,1) 67%, rgba(69,141,234,1) 100%);
        color: white;
        padding: 50px;
        @media all and (max-width: 850px) {
            width:100%;
        }

            `
    const FooterBox = styles.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 80%;
    margin:auto;
    @media all and (max-width: 620px) {
        width:100%;
       
    }
    
    `
    const Policy=styles.div`
        font-size: 12px;
        display: flex;
        flex-direction: row-reverse;
        color: #004ADF;
        width: 90%;
        
    `


    return(
        <>
        <Div>
        <LeftDiv>
            <div style={{width: "300px"}}>

        <div style={{ display: "flex", }}>
              <img
                style={{ height: "30px", marginRight: "20px" }}
                src="https://opensea.io/static/images/logos/opensea.svg"
                alt=""
              />
              <h3
                className="d-none d-sm-block"
                style={{ fontFamily: "Quarto", fontWeight: "bold" }}
              >
                OpenSea
              </h3>
            </div>
            <Typography  style={{marginTop:"70px"}}>
            From Opensea.io, go to your profile icon and click “Create” in the top right corner. You’ll be taken to the NFT item creation page. This page will allow you to upload your NFT file, name it and add a description.
            </Typography>

            <div style={{display: "flex", width: "300px",justifyContent: "space-between",marginTop:"40%"}}>
                <div style={{backgroundColor:"#1877F2", height:"50px",width:"50px",borderRadius:"8px", display:"flex",justifyContent:"center",flexDirection: "column"}}>
                    <img style={{height:"12px",width:"12px", marginLeft:"20px"}} src={Vector} alt=""/>
                </div>
                <div style={{backgroundColor:"#E52D27", height:"50px",width:"50px",borderRadius:"8px", display:"flex",justifyContent:"center",flexDirection: "column"}}>
                    <img style={{height:"12px",width:"12px", marginLeft:"20px"}} src={Vector3} alt=""/>
                </div>
                <div style={{backgroundColor:"#5A00EC", height:"50px",width:"50px",borderRadius:"8px", display:"flex",justifyContent:"center",flexDirection: "column"}}>
                    <img style={{height:"12px",width:"12px", marginLeft:"20px"}} src={Vector1} alt=""/>
                </div>
                <div style={{backgroundColor:"#0AC5FF", height:"50px",width:"50px",borderRadius:"8px", display:"flex",justifyContent:"center",flexDirection: "column"}}>
                    <img style={{height:"12px",width:"12px", marginLeft:"20px"}} src={Vector2} alt=""/>
                </div>
            </div>

            </div>
        </LeftDiv>
        <RightDiv>
            <FooterBox>
           
            <div className="w-25" style={{color:"#004ADF"}}>
          <div style={{color:"#004ADF"}} className="text-Creat lh-1 pt-5 fs-4">Resources</div>
            <p  className=" lh-1 mt-3">Help Center</p>
            <p  className=" lh-1 mt-3">Platform Status</p>
            <p  className=" lh-1 mt-3">Partners</p>
            <p  className=" lh-1 mt-3">Gas-Free Marketplace</p>
            <p  className=" lh-1 mt-3">Suggestions</p>
            <p  className=" lh-1 mt-3">Discord Community</p>
            <p  className=" lh-1 mt-3">Newsletter</p>
            <p  className=" lh-1 mt-3">Blog</p>
            <p  className=" lh-1 mt-3">Docs</p>
             </div>
             <div className="w-25" style={{color:"#004ADF"}}>
          <div style={{color:"#004ADF"}} className="text-Creat lh-1 pt-5 fs-4">My Account</div>
            <p  className=" lh-1 mt-3">Profile</p>
            <p  className=" lh-1 mt-3">Favourites</p>
            <p  className=" lh-1 mt-3">My Collections</p>
            <p  className=" lh-1 mt-3">Settings</p>
            <p  className=" lh-1 mt-3">Suggestions</p>
            
             </div>
             <div className="w-25" style={{color:"#004ADF"}}>
          <div style={{color:"#004ADF"}} className="text-Creat lh-1 pt-5 fs-4">Stats</div>
            <p  className=" lh-1 mt-3">Rankings</p>
            <p  className=" lh-1 mt-3">Activity</p>           
            
             </div>
             <div className="w-25" style={{color:"#004ADF"}}>
          <div style={{color:"#004ADF"}} className="text-Creat lh-1 pt-5 fs-4">Company</div>
            <p  className=" lh-1 mt-3">About</p>
            <p  className=" lh-1 mt-3">Careers</p>           
            
             </div>
            </FooterBox>
            <div>
            <div className="w-75 ms-5 ps-3" style={{color:"#004ADF"}}>
                <div style={{color:"#004ADF"}} className="text-Creat lh-1 pt-5 fs-4">Stay  In The Loop</div>
                <p  className=" lh-1 mt-3">Join our mailing list to stay in the loop with out newest feature releases, NFT drops, and tips & tricks for navigating OpenSea.</p>
                 
            
             </div>
            </div>
            <div style={{ display: "flex" ,marginLeft:"40px"}}>
            <Search>                
                <StyledInputBase
                  placeholder="Email address"
                  inputProps={{ "aria-label": "search" }}
                />
                 
              </Search>
              <Button
                        style={{borderRadius: "0",textTransform: "lowercase"}}
                        variant="contained" >
                       Sign Up
                        </Button>
            </div>
            <hr
            style={{color: "white"}}
            />
            <Policy> 
            <p>Privacy Policy</p>
            
            <p style={{marginRight:"30px"}}>Terms & Conditions</p>
            </Policy>
        </RightDiv>
        </Div>
        </>
    )
}