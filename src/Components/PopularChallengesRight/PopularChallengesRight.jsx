import PopularChallengesRightShoes from '../../Assets/Images/shoes.png';
import PopularChallengesRightShoesShadow from '../../Assets/Images/shadow.png'
import PopularChallengesRightFindMore from '../../Assets/Images/btn_more.png'
import './PopularChallengesRight.css'
const PopularChallengesRight = (props) => {
    return (
    <> 
         <div className="pc-right-maincontainer">
         <div className='pc-right-img-container'>
            <p className='pc-right-01'>01</p>
            <p className='pc-right-endur'>ENDUR<br/>ANCE</p>
            <img className='pc-img-shoes' src={PopularChallengesRightShoes} alt='img_header.png'></img>
            <img className='pc-img-shoes-shadow' src={PopularChallengesRightShoesShadow} alt='img_header.png'></img>
            <div className='pc-right-text-container'>
            <p className='pc-mission'>{props.RightPropsCollection.heading}</p>
            <p className='pc-medium-para'>{props.RightPropsCollection.subHeading}</p>
            <p className='pc-small-para'>{props.RightPropsCollection.description}</p>
            <img className='pc-img-right-find-more' src={PopularChallengesRightFindMore} alt='btn_more.png'></img>
            </div>
         </div>
         </div>
    </>
    )
}

export default PopularChallengesRight;