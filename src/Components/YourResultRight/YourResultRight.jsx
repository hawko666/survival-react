import YourResultRightImage from '../../Assets/Images/Mask Group 2.png'
import YourResultRightSquare from '../../Assets/Images/Rectangle 15.svg'
import './YourResultRight.css'
const YourResultRight = (probs) => {
    return (
    <> 
         <div className="yr-banner">
            <img className='yr-banner-img' src={YourResultRightImage} alt='Mask Group 2.png'></img>
            <img className='yr-banner-img-square' src={YourResultRightSquare} alt='Rectangle 15.svg'></img>
            <div className='yr-text-wrapper'>
            <p className='yr-md-header'>{probs.RightResultCollection.heading}</p>
            <p className='yr-sm-header'>{probs.RightResultCollection.description}</p>
            <div className="sec3-right-card-cross">
                        <i className="fa-solid fa-xmark"></i>
                        <h4 className="sec2-left-card-cross-text">{probs.RightResultCollection.more}</h4>
                    </div>
            </div>
         </div>
    </>
    )
}

export default YourResultRight;