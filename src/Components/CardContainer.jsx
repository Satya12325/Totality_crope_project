import styles from "styled-components";
// import "./Components.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{  mx: '2px', transform: 'scale(0.8)' }}
  >
    
  </Box>
);


const CardContainerBox = styles.div`
background: linear-gradient(183.49deg, rgba(51, 102, 196, 0.24) 0.82%, rgba(181, 210, 235, 0.24) 97.09%);
padding-bottom:50px;
// background: transparent;
`



const CardContain = styles.div`
margin: auto;
width: 90%;
// height: 700px;
// left: 70px;
// top: 600px;
background: linear-gradient(180deg, rgba(192, 197, 207, 0.24) 0%, rgba(255, 255, 255, 0) 100%);
backdrop-filter: blur(120px);
border-radius: 12px;
margin-top:-50px;
`
const Cards= styles.div`
border: 1px solid;
border-image:linear-gradient(180deg,#458DEA,#458DEA) 10;
border-radius: 8px;
margin: 1.5%;
width: 22%;
@media all and (max-width: 850px) {
  width: 90%;
  margin-left: 0%;
  
}
`
const Boxes= styles.div`
width: 90%;
margin:auto;
margin-top:100px;
display: flex;
    @media all and (max-width: 850px) {
    //  height: 500px;
     flex-direction: column;
     justify-content: center;
  }

`





export default function CardContainer(){

return(
    <CardContainerBox>

    <CardContain>
      <div className="w-50 mx-auto pt-5">
          <div className="text-center text-Creat pt-5"> Create & Sell Your NFT’s</div>
            <div className="text-center text-light lh-1 mt-3">A play of  light and shade, chairoscuro is the realm between the light and dark.</div>
      </div>

        
        <Boxes>
        <Cards>
        <React.Fragment>
        <CardContent style={{textAlign:"center"}} className="Cards">
     
        <Typography variant="h5" component="div" style={{color:"#263F9B",fontFamily: "Quarto"}}>
         Set up your wallet
        </Typography>
        <Typography sx={{ mb: .5,marginTop:"20px" }}>
        Once you’ve set up your wallet of choice, connect it to OpenSea.
        Learn about <span style={{color:"blue"}}>the wallets we support.</span>
      </Typography>
      
    </CardContent>   
     </React.Fragment>
        </Cards>


      <Cards>
        <React.Fragment>
        <CardContent style={{textAlign:"center"}} className="Cards">
     
        <Typography variant="h5" component="div" style={{color:"#263F9B",fontFamily: "Quarto"}}>
        Create  your  collection
        </Typography>
        <Typography sx={{ mb: .5,marginTop:"20px" }}>
        Click <span style={{color:"blue"}}> My Collections </span> and set up your collection. Add social links, a description, profile & banner images, and set a secondary. >the wallets we support.
        </Typography>      
        </CardContent>   
        </React.Fragment>
      </Cards>

        <Cards>
        <React.Fragment>
        <CardContent style={{textAlign:"center"}} className="Cards">
     
        <Typography variant="h5" component="div" style={{color:"#263F9B",fontFamily: "Quarto"}}>
        Add  your  NFT's
        </Typography>
        <Typography sx={{ mb: .5,marginTop:"20px" }}>
        Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs stats, and unlockable content.
      </Typography>
      
    </CardContent>
   
  </React.Fragment>
        </Cards>

        <Cards>
        <React.Fragment>
        <CardContent style={{textAlign:"center"}} className="Cards">
     
        <Typography variant="h5" component="div" style={{color:"#263F9B",fontFamily: "Quarto"}}>
        List  them  for  sale
        </Typography>
        <Typography sx={{ mb: .5,marginTop:"20px" }}>
        Choose between auctions, fixed-price listings, and
declining-price listings. You choose how you want to sell your NFTs. 
      </Typography>
      
    </CardContent>
   
  </React.Fragment>
        </Cards>
    </Boxes>
    
      

    </CardContain>
    </CardContainerBox>
)




}