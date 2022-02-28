import styles from 'styled-components';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Carousel from "react-elastic-carousel";
import Rectangle from "./SamllScroll/Rectangle 1955.png";
import Rectangle1 from "./SamllScroll/Rectangle 1956.png";
import Rectangle2 from "./SamllScroll/Rectangle 1957.png";


function MediaControlCard({image, title,description}) {
    const theme = useTheme();
  
    return (
        <Box style={{background: "white",padding:"10px"}}>
      <Box sx={{ display: 'flex', width:"250px",height: "100px"}}>
           <CardMedia
          component="img"
          sx={{ width: "80px",borderRadius: "10px",height:"90px" }}
          image={image}
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column',justifyContent: 'center',padding:"10px" }}>
        <Typography  style={{color:"#263F9B",fontFamily:"Eina01SemiBold"}}>
             {title}</Typography>
       
        </Box>
       
      </Box>
      </Box>
    );
  }

export default function SmallScroll(){

    const SmScroll = styles.div`
    width: 100%;
    // height: 100vh;   
    // display: flex;
    // flex-direction: row;
    /* KBC */
    margin-top: 0px;
    background: linear-gradient(183.49deg, rgba(111, 148, 223, 0.24) 0.82%, rgba(231, 237, 242, 0.24) 97.09%);
    `

    
    const Scrool = styles.div`
    font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
 height:50vh;

    `
    

    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 },
    ];


    return(
        <>
        <SmScroll>
        <div className="w-25 mx-auto">
          <div className="text-center text-Creat pt-5 fs-3">Resources  for  Getting  Started</div>
            <div  className="text-center lh-1 mt-3">A play of  light and shade, chairoscuro is the realm between the light and dark.</div>
      </div>

        {/* <MediaControlCard
            image={Rectangle}
            title="title"

        /> */}


<Scrool>
    <Carousel breakPoints={breakPoints}>
    <MediaControlCard
            image={Rectangle}
            title="10 tips for avoiding scams and staying safe."

        />
        <MediaControlCard
            image={Rectangle1}
            title="Keeping yourself safe when buying Nft’s on Opensea."

        />
        <MediaControlCard
            image={Rectangle2}
            title="The beginner’s guide to creating & selling digital art Nft’s"

        />
         <MediaControlCard
            image={Rectangle}
            title="10 tips for avoiding scams and staying safe."

        />
        <MediaControlCard
            image={Rectangle1}
            title="Keeping yourself safe when buying Nft’s on Opensea."

        />
        <MediaControlCard
            image={Rectangle2}
            title="The beginner’s guide to creating & selling digital art Nft’s"

        />
         <MediaControlCard
            image={Rectangle}
            title="10 tips for avoiding scams and staying safe."

        />
        <MediaControlCard
            image={Rectangle1}
            title="Keeping yourself safe when buying Nft’s on Opensea."

        />
        <MediaControlCard
            image={Rectangle2}
            title="The beginner’s guide to creating & selling digital art Nft’s"

        />
        
    </Carousel>

</Scrool>
        </SmScroll>
        </>
    )


}

