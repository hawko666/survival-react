import './FooterColFour.css'
const FooterColFour = (props) => {
    return (
    <> 
         <div className="yr-banner">
         <div className="footer-advice-container">
                <h3 className="footer-title teko-m-36">Gallery</h3>
                <ul>
                <ul>
                {Object.values(props.forthfootercollection.data.gallery.gallerylist).map((item, i) => {
                        return (<>
                                <li className="footer-text"><a href="#">{item}</a></li>
                           </>)
                    })}
                </ul>
                </ul>
            </div>
         </div>
    </>
    )
}

export default FooterColFour;