
import styles from "styled-components";
import Andreessen_Horowitz_new_logo from "../Images/Andreessen_Horowitz_new_logo 3.png"
import image from "../Images/image 57.png";
import Canvas from "../Images/Canvas.png";
import Group from "../Images/Group 2620.png"
import image70 from "../Images/image70.png";
import CoinbaseLogo from "../Images/Coinbase-Logo 4.png"

export default function Adds() {

    const Ads = styles.div`
    width: 100%;
    // height: 50vh;
    padding-top: 100px;
    // display: flex;
    // flex-direction: row;
    /* KBC */
    margin-top: 0px;
    background: linear-gradient(183.49deg, rgba(111, 148, 223, 0.24) 0.82%, rgba(231, 237, 242, 0.24) 97.09%);
    @media all and (max-width: 850px) {
        width: 100%;
        display: flex;
       padding: 0 30px;
       
    }
    @media all and (max-width: 650px) {
        width: 100%;
        display: flex;
        flex-direction: column;       
    }
   
   
    `
    const ImgDiv = styles.div`
        width: 80%;
        margin:  auto;
        display: flex;
        justify-content: space-between;
        @media all and (max-width: 850px) {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 500px;
        }
      
    `
    const SecondImg = styles.div`
            width: 50%;
            margin:  auto;
            display: flex;
            justify-content: space-between;
            margin-top: 50px;
            @media all and (max-width: 850px) {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 150px;
            }
    `



    return(
        <>
        <Ads>
           <ImgDiv>
            <div>
                <img src={Andreessen_Horowitz_new_logo} alt="" />
            </div>
            <div>
            <img src={image} alt="" />
            </div>
            <div>
            <img src={Canvas} alt="" />
            </div>
            <div>
            <img src={Group} alt="" />
            </div>
           </ImgDiv>
            <SecondImg>
                <div>
                    <img style={{maxWidth:"300px"}} src={image70} alt="" />
                </div>
                <div>
                    <img src={CoinbaseLogo} alt="" />
                </div>
            </SecondImg>
        </Ads>
        </>
    )
}