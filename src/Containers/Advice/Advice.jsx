import './Advice.css'
import AdviceLeft from '../../Components/AdviceLeft';
import AdviceRight from '../../Components/AdviceRight'
const Advice = () => {
    return (
    <>
    <div className="a-maincontainer"> 
         <div className="a-left-maincontainer">
            <AdviceLeft />
         </div>
         <div className="a-right-maincontainer">
            <AdviceRight />
         </div>
    </div>
    </>
    )
}

export default Advice;