// import PopularChallengesRightShoes from '../../Assets/Images/shoes.png'
import GalleryTwoImage from '../../Assets/Images/Mask Group 6-1.png'
import './GalleryTwo.css'
const GalleryTwo = () => {
    return (
    <> 
         <div className="s-banner">
            {/* <img className='s-img-banner' src={PopularChallengesRightShoes} alt='img_header.png'></img> */}
            <div className="">
            <div className="g-container-tent">
                <div className="g-container-icon"><i className="fa-brands fa-youtube"></i></div>
                <img src={GalleryTwoImage} className="g-container-tent-img" alt="tent"></img>
                <div className="g-container-body">
                    <div className="g-container-date-place">
                        06.08.2019. | SHELTER MAKING
                    </div>
                    <p className="g-container-text">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    </p>
                </div>
            </div>
         </div>
         </div>
    </>
    )
}

export default GalleryTwo;