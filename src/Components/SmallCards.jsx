import styles from "styled-components";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Rectangle from "./SmallCard/Rectangle 308.png";
import Rectangle1 from "./SmallCard/Rectangle 308 (1).png";
import Rectangle2 from "./SmallCard/Rectangle 308 (2).png";
import Rectangle3 from "./SmallCard/Rectangle 308 (3).png";
import Rectanglee from "./SmallCard/Rectangle 309.png";
import Rectanglee1 from "./SmallCard/Rectangle 309 (1).png";
import Rectanglee2 from "./SmallCard/Rectangle 309 (2).png";
import Rectanglee3 from "./SmallCard/Rectangle 309 (3).png";
import Button from '@mui/material/Button';


function MediaControlCard({image, title,description}) {
    const theme = useTheme();
  
    return (
      <Box sx={{ display: 'flex', width:"250px",background: "transparent",height: "100px"}}>
           <CardMedia
          component="img"
          sx={{ width: "80px",borderRadius: "10px",height:"90px" }}
          image={image}
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <div className="ps-3 text-Creat fs-5">{title}</div>
            <div style={{fontSize:"12px"}} className="ps-3 lh-1 mt-0">{description}</div>
        </Box>
       
      </Box>
    );
  }



export default function SmallCards(){


    const CardDiv = styles.div`
    width: 100%;
    // height: 120vh;
   
    // display: flex;
    // flex-direction: row;
    /* KBC */
   
    background: linear-gradient(183.49deg,rgba(111, 148, 223, 0.24)  0.82%, rgba(231, 237, 242, 0.24) 97.09%);
    @media all and (max-width: 620px) {
     
  }
    `
    const Card = styles.div`
      width: 90%;
      margin :  auto;
      display: flex;
      justify-content: space-between;
      margin-top: 50px;
      flex-wrap: wrap;

    ` 
   


    return (
        <>
        <CardDiv>
        <div className="w-25 mx-auto pt-5">
          <div className="text-center text-Creat pt-5 fs-3">Explore  Categories</div>
            <div className="text-center lh-1 mt-3">A play of light and shade, chairoscuro is the realm between the light and dark.</div>
      </div>
        <Card>
            <MediaControlCard
                image={Rectangle}
                title="Art"
                description="Art is something that stimulates an individual’s thoughts"
            />
            <MediaControlCard
                image={Rectangle1}
                title="Music"
                description="Music is the art of arraning sounds elements of melody"
            />
            <MediaControlCard
                image={Rectangle2}
                title="Trading Cards"
                description="A Trading card ( or collectible card ) is a small card."
            />
            <MediaControlCard
                image={Rectangle3}
                title="Art"
                description="Art is something that stimulates an individual’s thoughts"
            />
            
        </Card>
        <Card>
            <MediaControlCard
                image={Rectanglee}
                title="Collectibles"
                description="An item worth far more than it was sold for rarity."
            />
            <MediaControlCard
                image={Rectanglee1}
                title="Sports"
                description="Sport pertains to any form of competitive."
            />
            <MediaControlCard
                image={Rectanglee2}
                title="Domain Name"
                description="Use Traditional Domains. The native name suffix."
            />
            <MediaControlCard
                image={Rectanglee3}
                title="All NFT’s"
                description="Music is the art of arranging sounds elements of melody"
            />
            
        </Card>
        <div style={{width:"300px",margin:"auto",marginTop:"90px"}}>

        <Button
        style={{borderRadius: "0", width:"200px",textTransform: "lowercase"}}
        variant="contained" disableElevation>
     Explore Marketplace
    </Button>
        </div>
        </CardDiv>
        </>
    )


}
