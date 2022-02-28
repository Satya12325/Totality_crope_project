import styles from 'styled-components';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';





function SimpleAccordion({ title,Details,}) {
  return (
    <div>
      <Accordion style={{border:"0",backgroundColor:"transparent"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"#263F9B"}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography  style={{color:"#263F9B",fontFamily: "Quarto"}}>
             {title}</Typography>
        </AccordionSummary>
        <AccordionDetails style={{border:"0",backgroundColor:"transparent"}} >
          <Typography>
           {Details}
          </Typography>
        </AccordionDetails>
      </Accordion> 
     
    </div>
  );
}







export default function Help(){

    const HelpContainer = styles.div`
    width: 100%;   
    padding-top: 100px;
    display: flex;
    
    /* KBC */
   
    background: linear-gradient(183.49deg,rgba(231, 237, 242, 0.24)  0.82%, rgba(111, 148, 223, 0.24) 97.09%);
    @media all and (max-width: 620px) {
        flex-direction: column;
        
    }
    `

    const RightDiv = styles.div`
            width: 50%;
            @media all and (max-width: 620px) {
                width: 100%;
                margin-top: 50px;
            }
    `
    const LeftDiv = styles.div`
            width: 50%;
            @media all and (max-width: 620px) {
                width: 100%;
                margin-top: 50px;
            }
    `

    return(
        <>
        <HelpContainer>
            <RightDiv>
            <div className="w-50 mx-auto">
          <div className="text-Creat lh-1 fs-3">We will try to help you if you are confused.</div>
            <div className=" lh-1 mt-3">A fequently asked question (FAQ) forum is often used in articles, websites, email lists, and online forums where common questions tend to recur.</div>
      </div>
            </RightDiv>
            <LeftDiv>
                <SimpleAccordion
                title="How do I create an NFT?"
                Details="From Opensea.io, go to your profile icon and click “Create” in the top right corner. You’ll be taken to the NFT item creation page. This page will allow you to upload your NFT file, name it and add a description."
                />
                <SimpleAccordion
                title="How do I create and sell NFTs on Polygon?"
                Details="From Opensea.io, go to your profile icon and click “Create” in the top right corner. You’ll be taken to the NFT item creation page. This page will allow you to upload your NFT file, name it and add a description."
                />
                <SimpleAccordion
                title="What is Freezing Metadata"
                Details="From Opensea.io, go to your profile icon and click “Create” in the top right corner. You’ll be taken to the NFT item creation page. This page will allow you to upload your NFT file, name it and add a description."
                />
                 <SimpleAccordion
                title="Does Opensea allow physical item trades?"
                Details="From Opensea.io, go to your profile icon and click “Create” in the top right corner. You’ll be taken to the NFT item creation page. This page will allow you to upload your NFT file, name it and add a description."
                />
                 <div style={{width:"300px",marginTop:"90px"}}>
                     <Button
                        style={{borderRadius: "0",textTransform: "lowercase"}}
                        variant="contained" disableElevation>
                       View All
                        </Button>
                        </div>
               
            </LeftDiv>
            
        </HelpContainer>
        {/* <div style={{width:"400px",marginTop:"-190px",margin:"auto"}}> 
                    <hr/>
                </div> */}
        </>
    )
}