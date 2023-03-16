import './Gallery.css'
import GalleryOne from '../../Components/GalleryOne';
import GalleryTwo from '../../Components/GalleryTwo';
import GalleryThree from '../../Components/GalleryThree';
const Gallery = () => {
    return (
    <>
    <div className="gallery-maincontainer"> 
         <div className="gallery-maincontainer-one">
            <GalleryOne />
         </div>
         <div className="gallery-maincontainer-two">
            <GalleryTwo />
         </div>
         <div className="gallery-maincontainer-three">
            <GalleryThree />
         </div>
    </div>
    </>
    )
}

export default Gallery;