import './Footer.css'
import FooterOne from '../../Components/FooterColOne';
import FooterTwo from '../../Components/FooterColTwo';
import FooterThree from '../../Components/FooterColthree';
import FooterFour from '../../Components/FooterColFour';
const Footer = (props) => {
    return (
    <>
    <div className="footer-maincontainer"> 
         <div className="footer-maincontainer-one">
            <FooterOne />
         </div>
         <div className="footer-maincontainer-two">
            <FooterTwo secondfootercollection ={props.footerCollection}/>
         </div>
         <div className="footer-maincontainer-three">
            <FooterThree thirdfootercollection ={props.footerCollection}/>
         </div>
         <div className="footer-maincontainer-four">
            <FooterFour forthfootercollection ={props.footerCollection}/>
         </div>
    </div>
    </>
    )
}

export default Footer;