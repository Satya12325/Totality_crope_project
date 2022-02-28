import styles from "styled-components";
import FrameImg from "../Images/Rectangle284.png"
import "./Components.css"
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Vector from "../Images/Vector.png"
import Vector2 from "../Images/Vector(1).png"
import Vector3 from "../Images/Vector(2).png";
import Button from '@mui/material/Button';



function srcset(image, width, height, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${
        height * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }



export default function Notable(){

    const Naot = styles.div`
   
    width: 100%;
    // height: 110vh;
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
    // 
    /* KBC */
    @media all and (max-width: 850px) {
      flex-direction: column;
  }
    
    background: linear-gradient(183.49deg, rgba(0, 74, 223, 0.24) 0.82%, rgba(231, 237, 242, 0.24) 97.09%);
    `
    const ImagesDiv = styles.div`
        width: 60%;
        @media all and (max-width: 850px) {
          width: 100%;
          display:flex;
          flex-direction: column;
      }
        
    `
    const TextDiv = styles.div`
        width: 40%;
        @media all and (max-width: 850px) {
          width: 100%;
      }
        
    `

    const itemData = [
     
        {
          img: FrameImg,
          title: 'Burger',
          author: '@rollelflex_graphy726',
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: 'Camera',
          author: '@helloimnik',
        },
        {
          img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
          title: 'Coffee',
          author: '@nolanissac',
        },
        {
          img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
          title: 'Hats',
          author: '@hjrc33',
        }
      ];


    return(
        <>
        <Naot>
            <ImagesDiv>
                <div>     
                     <ImageList
      style={{
        maxWidth: 500,
        height: 450,
        marginLeft: "17%",
    
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      rowHeight={200}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem
          style={{
            
        }}
          key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              style={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
               
                }}
              title={item.title}
              
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <img src={Vector}alt=""/>
                </IconButton>
              }
           actionPosition="left"
            />
            <ImageListItemBar
              style={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
               
                }}
              title={item.title}
              
              position="bottom"
              actionIcon={
                <IconButton
                className="IconButton"
                  sx={{ color: 'white',marginRight:"150px" }}
                  aria-label={`star ${item.title}`}
                >
                  <img src={Vector3}alt=""/>
                </IconButton>
              }
           actionPosition="right"
            />
          </ImageListItem>
        );
      })}
    </ImageList>            
                </div>
            </ImagesDiv>
            <TextDiv>
            <div className="w-50 mx-auto pt-5">
          <div className="text-Creat pt-5 fs-1">Notable  Drops</div>
            <div className=" lh-2 mt-3 fs-4">Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs stats, and unlockable content.</div>
            <div style={{marginTop:'76px'}}>
      <Button variant="contained" disableElevation>
     View All
    </Button>
      </div>
      </div>
      
            </TextDiv>
        </Naot>
        </>
    )
}