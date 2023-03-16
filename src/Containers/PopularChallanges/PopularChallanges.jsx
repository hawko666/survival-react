import './PopularChallanges.css'
import PopularChallengesLeft from '../../Components/PopularChallengesLeft';
import PopularChallengesRight from '../../Components/PopularChallengesRight'
const PopularChallanges = (props) => {
   return (
      <>
         <div className="pc-mainContent">
            <div className="pc-leftContent">
               <div className='pc-header'><p>{props.dataCollection.title}</p></div>
               <div className="pc-mainContent">
                  <div className="pc-leftContent">
                     {
                        Object.keys(props.dataCollection.cards).map((item, i) => {
                           const cardData = props.dataCollection.cards[item];
                           return (<>
                              <PopularChallengesLeft {...cardData}  index={i}/>
                           </>)
                        })}
                  </div>
               </div>
            </div>
            <div className="pc-rightContent">
               <PopularChallengesRight RightPropsCollection={props.MissionCollection.data} />
            </div>
         </div>
      </>
   )
}

export default PopularChallanges;