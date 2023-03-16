import './YourResult.css'
import YourResultLeft from '../../Components/YourResultleft';
import YourResultRight from '../../Components/YourResultRight';
import ArrowImage from '../../Assets/Images/ico_art.svg'
const YourResult = (probs) => {
    return (
    <>
    <div className="yr-mainContent"> 
         <div className="yr-leftContent">
            <YourResultLeft LeftResultCollection={probs} />
         </div>
         <div className="yr-rightContent">
         <img className='yr-right-Arrow' src={ArrowImage} alt="ico_art.svg" />
            <YourResultRight RightResultCollection={probs.ShareResultCollection.data} />
         </div>
    </div>
    </>
    )
}

export default YourResult;