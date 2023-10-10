import { galleryData } from '../galleryData';
import './Gallery.css';
import Footer from '../footer/Footer';

const getImg = (imgSrc) => {};
function Gallery() {
    return (
        <>
            <div>
                <h2>Galerie</h2>
            </div>
            <div className="gallery">
                {galleryData.map((item, index) => {
                    return (
                        <div className="images" key={index} onClick={() => getImg(item.ImgSrc)}>
                            <img className="img-glr" src={item.imgSrc}></img>
                        </div>
                    );
                })}
            </div>

            <>
                <Footer />
            </>
        </>
    );
}
<galleryData />;

export default Gallery;
