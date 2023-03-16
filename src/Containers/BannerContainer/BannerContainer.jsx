import Banner from "../../Components/Banner";
import BannerSide from "../../Components/BannerSide";
import './BannerContainer.css'
const BannerContainer = () => {
    return (
    <>
    <div className="mainContent"> 
         <div className="leftContent">
            <BannerSide />
         </div>
         <div className="rightContent">
            <Banner />
         </div>
    </div>
    </>
    )
}

export default BannerContainer;