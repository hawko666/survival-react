import "./NavLinks.css"

const NavLinks = ({ links }) => {
    return (
        <>
        {links.map((val,i) => {
            return <p className="nav-p" key={i}>{val}</p>
        })}
        </>
    )
}
export default NavLinks;