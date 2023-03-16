// import PopularChallengesLeftImage1 from '../../Assets/Images/02.png'
// import PopularChallengesLeftImage2 from '../../Assets/Images/03.png'
import './PopularChallengesLeft.css'
const PopularChallengesLeft = ({img,skills,header,description,more, index}) => {
    return (
    <> 
    <div className="card" key={index}> 
            <div className="cardImg">
                <img src={img} alt="cardImg" />
            </div>
            <div className="cardContent">
                <div className="skills">
                    {skills}
                </div>
                <div className="header">
                    {header}
                </div>
                <div className="description">
                    {description}
                </div>
                <div className="mores">
                    <img src={more} alt="more_btn" />
                </div>
            </div>
        </div>
         {/* <div className="pc-right-container">
            <img className='pc-right-img' src={PopularChallengesLeftImage1} alt='PopularChallengesLeftImage1.png'></img>
            <img className='pc-right-img' src={PopularChallengesLeftImage2} alt='PopularChallengesLeftImage2.png'></img>
            <img className='pc-right-img' src={PopularChallengesLeftImage2} alt='PopularChallengesLeftImage2.png'></img>
         </div> */}
    </>
    )
}

export default PopularChallengesLeft;