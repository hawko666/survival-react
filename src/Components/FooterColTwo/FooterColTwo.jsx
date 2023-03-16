import './FooterColTwo.css'
const FooterColTwo = (props) => {
    return (
    <> 
         <div className="footer-inner-wrapper">
         
         <div className="footer-challenges-container">
                <h3 className="footer-title">CHALLENGES</h3>
                <ul>
                    {Object.values(props.secondfootercollection.data.challenges.challengeslist).map((item, i) => {
                        return (<>
                                <li className="footer-text"><a href="#">{item}</a></li>
                           </>)
                    })}
                    
                </ul>
                <ul className="footer-social-container">
                    <li className="footer-text"><img src={props.secondfootercollection.data.challenges.social} /></li>
                </ul>
            </div>
         </div>
    </>
    )
}

export default FooterColTwo;