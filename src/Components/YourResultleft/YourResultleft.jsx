import './YourResultleft.css'
const YourResultleft = (props) => {
    return (
    <> 
         <div className="sec3-container">
         <div className="yr-left-container">
                <div className="yr-left-content">
                    <h3 className="yr-left-challenge">COMPLETED CHALLENGES</h3>
                    <h3 className="yr-left-no">13</h3>
                    <h3 className="yr-left-text">You have <span className="red">78%</span> chance for survival</h3>
                </div>
                <h3 className="yr-left-rotate-text teko-s-174">YOUR RESULTS</h3>
                <div className="yr-left-card-cross">
                        <i className="fa-solid fa-xmark"></i>
                        <h4 className="yr-left-card-cross-text">SEE MORE</h4>
                </div>
            </div>
         </div>
    </>
    )
}

export default YourResultleft;