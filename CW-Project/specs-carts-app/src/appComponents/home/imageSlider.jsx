import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageCard from "./imgCard";

const data = [
    {img : "https://static1.lenskart.com/media/desktop/img/Aug24/22-aug-24/Other%20assets/New%20Web%20Banner.png"},
    {img : "https://static1.lenskart.com/media/desktop/img/Aug24/Aditi/Home/Banner/Desktop.gif"},
    {img : "https://static1.lenskart.com/media/desktop/img/Aug24/Ulti-Matte/DesktopBannner.jpg"},
    {img : "https://static5.lenskart.com/media/uploads/webFloat_POP2124.jpg"},
    {img : "https://static1.lenskart.com/media/desktop/img/Aug24/Switch-Grip-Story/Desktop%20Banner.gif"},
    {img : "https://static1.lenskart.com/media/desktop/img/16-sep-24/r1.jpeg"},
    {img : "https://static1.lenskart.com/media/desktop/img/Aug24/DrivingGlasses/DrivingGlasses-Desktop-banner.jpg"},
    {img : "https://static1.lenskart.com/media/desktop/img/h24/sept/Reflector%20sunglasses/Desktop%20banner.png"},
    {img : "https://static1.lenskart.com/media/desktop/img/Aug24/Owndays-Change/Home/Desktop/Desktop.jpg"},
    {img : "https://static1.lenskart.com/media/desktop/img/Aug24/22-aug-24/blu/Web%20Banner%201920x520.jpg"},
]
export default function ImageSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2500, // Duration of autoplay for each slide in milliseconds
    };
    
  return (
    <>
        <Slider className="image-card-slider" {...settings}>
            {data.map((item,i) => (
                <ImageCard key={i} url={item.img} type="freeOnlineeEyeTest" style={{ width: '100%', height: 'auto', marginBottom: '1rem' }}/>
            ))}
        </Slider>
    </>
  );
}