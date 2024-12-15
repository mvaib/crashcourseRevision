import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function GlassCardSlider(){
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 603,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                }
            },
            {
                breakpoint : 385,
                settings : {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
        // autoplay: true, // Enable autoplay
        // autoplaySpeed: 2500, // Duration of autoplay for each slide in milliseconds
    };
    return(
        <>
            <Slider className="glass-card-slider" {...settings}>
                <div className="glass-card">
                    <div>
                        <img src="https://static1.lenskart.com/media/desktop/img/Sep21/image179.png" alt="" />
                    </div>
                   <Link to={"/product"}> <button>Explore </button></Link>
                </div>
                <div className="glass-card">
                    <div>
                        <img src="https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg" alt="" />
                    </div>
                   <Link to={"/product"}> <button>Explor</button></Link>
                </div>
                <div className="glass-card">
                    <div>
                        <img src="https://static1.lenskart.com/media/desktop/img/Sep21/clubmaster.jpg" alt="" />
                    </div>
                   <Link to={"/product"}> <button>Explor</button></Link>
                </div>
                <div className="glass-card">
                    <div>
                        <img src="https://static1.lenskart.com/media/desktop/img/Sep21/trans.jpg" alt="" />
                    </div>
                   <Link to={"/product"}> <button>Explor</button></Link>
                </div>
                <div className="glass-card">
                    <div>
                        <img src="https://static1.lenskart.com/media/desktop/img/Sep21/blend.jpg" alt="" />
                    </div>
                   <Link to={"/product"}> <button>Explor</button></Link>
                </div>
                <div className="glass-card">
                    <div>
                        <img src="https://static1.lenskart.com/media/desktop/img/Sep21/clipon.jpg" alt="" />
                    </div>
                   <Link to={"/product"}> <button>Explor</button></Link>
                </div>
                <div className="glass-card">
                    <div>
                        <img src="https://static1.lenskart.com/media/desktop/img/Sep21/airflex.jpg" alt="" />
                    </div>
                   <Link to={"/product"}> <button>Explor</button></Link>
                </div>
                <div className="glass-card">
                    <div>
                        <img src="https://static1.lenskart.com/media/desktop/img/Sep21/aviator.jpg" alt="" />
                    </div>
                   <Link to={"/product"}> <button>Explor</button></Link>
                </div>
            </Slider>
        </>
    )
}

export default GlassCardSlider