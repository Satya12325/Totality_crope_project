import styles from "styled-components";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Ellipse from "./CardsImg/Ellipse 53.png";
import Rectangle from "./CardsImg/Rectangle1946.png"
import Vector2 from "../Images/Vector(1).png"
import Vector3 from "../Images/Vector(2).png";
import Ellipse54 from "./CardsImg/Ellipse 54.png";
import Rectangle47 from "./CardsImg/Rectangle 1947.png"
import Ellipse55 from "./CardsImg/Ellipse 55.png";
import Rectangle48 from "./CardsImg/Rectangle 1948.png"
import Carousel from "react-elastic-carousel";




  function INdCard({image,avatar,title,details}){

    return(
      <>
      <Card sx={{ maxWidth: 245 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <Avatar style={{marginTop:"-20px",width:"50px",height:"50px",marginLeft:"40%"}} alt="Remy Sharp" src={avatar} />
        <CardContent>
           
        <div className="text-Creat text-center  fs-4">{title}
        <IconButton
                className="IconButton"
                  sx={{ color: 'white'}}
                  
                >
                  <img src={Vector3}alt=""/>
                </IconButton>
        </div>
       
                
            <div className="text-center lh-1 mt-3">{details}</div>
        </CardContent>
      </CardActionArea>
    </Card>
      </>
    )
  }






export default function CardsContainer(){

    const CardDiv = styles.div`
    width: 100%;
    height: 120vh;
   
    // display: flex;
    // flex-direction: row;
    /* KBC */
   
    background: linear-gradient(183.49deg,rgba(231, 237, 242, 0.24)  0.82%, rgba(111, 148, 223, 0.24) 97.09%);
    
    `
    const Scrool = styles.div`
    font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

    `
    

    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 },
    ];

    return(
        <>
        <CardDiv>
        <div className="w-25 mx-auto pt-5">
          <div className="text-center text-Creat pt-5 fs-3">Trending in All Categories</div>
            <div className="text-center lh-1 mt-3">A play of light and shade, chairoscuro is the realm between the light and dark.</div>
      </div>
      

<Scrool>
    <Carousel breakPoints={breakPoints}>
    <INdCard
          image={Rectangle}
          avatar={Ellipse}
         title="FriYaywiz"
         details="A play of light and shade, chairoscuro is the realm."
      /> 
      <INdCard
          image={Rectangle47}
          avatar={Ellipse}
         title="Pixelwizards"
         details="A play of light and shade, chairoscuro is the realm."
      /> 
      <INdCard
          image={Rectangle48}
          avatar={Ellipse}
         title="Aesthetic’smatter"
         details="A play of light and shade, chairoscuro is the realm."
      /> 
       <INdCard
          image={Rectangle}
          avatar={Ellipse}
         title="FriYaywiz"
         details="A play of light and shade, chairoscuro is the realm."
      /> 
      <INdCard
          image={Rectangle47}
          avatar={Ellipse}
         title="Pixelwizards"
         details="A play of light and shade, chairoscuro is the realm."
      /> 
      <INdCard
          image={Rectangle48}
          avatar={Ellipse}
         title="Aesthetic’smatter"
         details="A play of light and shade, chairoscuro is the realm."
      /> 
       <INdCard
          image={Rectangle}
          avatar={Ellipse}
         title="FriYaywiz"
         details="A play of light and shade, chairoscuro is the realm."
      /> 
      <INdCard
          image={Rectangle47}
          avatar={Ellipse}
         title="Pixelwizards"
         details="A play of light and shade, chairoscuro is the realm."
      /> 
      <INdCard
          image={Rectangle48}
          avatar={Ellipse}
         title="Aesthetic’smatter"
         details="A play of light and shade, chairoscuro is the realm."
      /> 
    </Carousel>
</Scrool>

 </CardDiv>
       
        


        </>
    )




}


