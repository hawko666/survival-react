import BannerImage from '../../Assets/Images/img_header.png'
import './Banner.css'
import $ from 'jquery';
import 'slick-carousel/slick/slick';
import "../../../src/Assets/Css/slick.css"
import Arrow from "../../Assets/Images/arrow.png"
import Arrowblack from "../../Assets/Images/arrowBlack.svg"
const BannerContainer = () => {
    $(document).ready(function () {
        $('.slider').slick({
            infinite: true,
            slidesToShow: 1
        });
        $(".slick-prev").html(`<img src=${Arrow} alt='abcd' />`);
        $(".slick-next").html(`<img src=${Arrowblack} alt='abcd' />`);
    });
    return (
        <>
            <div className="s-banner">
            <div className="slider-container">
                <div className="slider">
                    <div className="bannerImg">
                        <img className='s-img-banner' src={BannerImage} alt="bannerImg" />
                    </div>
                    <div className="bannerImg">
                        <img className='s-img-banner' src={BannerImage} alt="bannerImg" />
                    </div>
                    <div className="bannerImg">
                        <img className='s-img-banner' src={BannerImage} alt="bannerImg" />
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default BannerContainer;