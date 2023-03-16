import GalleryOneImage from '../../Assets/Images/Mask Group 6.png'
import './GalleryOne.css'
const GalleryOne = () => {
    return (
    <> 
         <div className="">
            <div className="g-container-tent">
                <div className="g-container-icon"><i className="fa-brands fa-youtube"></i></div>
                <img src={GalleryOneImage} className="g-container-tent-img" alt="tent"></img>
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
    </>
    )
}

export default GalleryOne;