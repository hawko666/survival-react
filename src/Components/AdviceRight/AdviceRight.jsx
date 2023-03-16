import AdviceRightSliderImg from '../../Assets/Images/Mask Group 4.png'
import './AdviceRight.css'
const AdviceRight = () => {
    return (
    <> 
         <div className="a-main-container">
            <div className="a-right-container-card">
                        <div className="a-right-no-body">
                            <h2 className="a-right-no-big">03</h2>
                            <h3 className="a-right-no-small">03</h3>
                        </div>
                        <img src={AdviceRightSliderImg} className="a-right-camp" alt="camp"></img>
                        <div className="a-right-body ">
                            <h2 className="a-right-title">SURVIVAL MODE</h2>
                            <p className="a-right-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                sed
                                diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                voluptua.
                            </p>
                            <div className="a-right-card-cross">
                                <i className="fa-solid fa-xmark"></i>
                                <h4 className="a-left-card-cross-text">MORE</h4>
                            </div>
                        </div>
            </div>
        </div>
    </>
    )
}

export default AdviceRight;