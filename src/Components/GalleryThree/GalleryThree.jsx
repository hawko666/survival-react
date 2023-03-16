import GalleryTopArrow from '../../Assets/Images/ico_art-1.svg'
import './GalleryThree.css'
const GalleryThree = () => {
    return (
    <> 
         <div className="">
            {/* <img className='s-img-banner' src={PopularChallengesRightShoes} alt='img_header.png'></img> */}
            <div className="g-container-gallery">
                <h2 className="g-container-gallery-title">GALLERY</h2>
                <p className="g-container-gallery-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>
                <div className="g-right-card-cross">
                    <i className="fa-solid fa-xmark"></i>
                    <h4 className="sec2-left-card-cross-text">More</h4>
                </div>
                <a href="#top"><img src={GalleryTopArrow} className="g-container-arrow" alt=""></img></a>
            </div>
         </div>
    </>
    )
}

export default GalleryThree;