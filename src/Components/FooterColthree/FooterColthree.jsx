import './FooterColthree.css'
const FooterColthree = (props) => {
    return (
    <> 
         <div className="footer-innercontainer-three">
         <div className="footer-advice-container">
                <h3 className="footer-title">Advices</h3>
                <ul>
                {Object.values(props.thirdfootercollection.data.advices.adviceslist).map((item, i) => {
                        return (<>
                                <li className="footer-text"><a href="#">{item}</a></li>
                           </>)
                    })}
                </ul>
            </div>
         </div>
    </>
    )
}

export default FooterColthree;