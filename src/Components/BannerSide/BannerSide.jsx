import BannerSideImage from '../../Assets/Images/Text.png'
import BannerSideImageWhiteArrow from '../../Assets/Images/Group12.svg'
import BannerSideImageWhiteSocial from '../../Assets/Images/Sociallogos.png'
import './BannerSide.css'
const BannerContainer = () => {
    return (
    <>
    <div className="s-banner-side">
        <img className="s-img-banner-side" src={BannerSideImage}></img>
        <img className="s-img-banner-side-arrow" src={BannerSideImageWhiteArrow}></img>
        <img className="s-img-banner-side-social" src={BannerSideImageWhiteSocial}></img>
    </div>
    </>
    )
}

export default BannerContainer;