import './FooterColOne.css'
import FooterFirstColumnimage from '../../Assets/Images/Group 9.svg'
const FooterColOne = () => {
    return (
    <> 
         <div className="Footer-inner-wrapper">
         <div className="footer-logo-container">
                <img src={FooterFirstColumnimage} className="footer-logo-container-img" alt=""></img>
            </div>
         </div>
    </>
    )
}

export default FooterColOne;