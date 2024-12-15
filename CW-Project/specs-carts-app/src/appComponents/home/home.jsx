import GlassPopUp from "./glassPopUp"
import ImageCard from "./imgCard"
import ImageHeading from "./imageHeading"
import ImageSlider from "./imageSlider"
import GlassCardSlider from "./glassCardSlider"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const data = [
    {img : "https://static1.lenskart.com/media/desktop/img/Apr22/a2.png", type : "Eyeglasses",},
    {img : "https://static1.lenskart.com/media/desktop/img/Apr22/b2.png", type : "Sunglasses"},
    {img : "https://static1.lenskart.com/media/desktop/img/Apr22/d2.png", type : "Screen Glasses"},
    {img : "https://static1.lenskart.com/media/desktop/img/Apr22/d.png", type : "Contact Lens"},
    {img : "https://static1.lenskart.com/media/desktop/img/Apr22/e2.png", type : "Power Sunglasses"},
    {img : "https://static1.lenskart.com/media/desktop/img/June22/prog11.jpg", type : "Progressive Lenses"},
]

const imageCard = {
    "extraOff" : [
        {img : "https://static1.lenskart.com/media/desktop/img/3-dec-24/Home-harmony-desktop-extra500-model.png"},
    ],
    "ourPurpose" : [
        {img : "https://static1.lenskart.com/media/desktop/img/Apr22/Bannerforexport.jpg"},
    ]
    ,
    "progressiveLenses" : [
        {img : "https://static1.lenskart.com/media/desktop/img/Aug24/22-aug-24/Other%20assets/New%20Web%20Banner.png"},
    ]
    ,
    "bookeyeTest" : [
        {img : "https://static5.lenskart.com/media/uploads/hechome11.png"},
    ]
    ,
    "freeOnlineeEyeTest" : [
        {img : "https://static1.lenskart.com/media/desktop/img/2024/jun/eyetest/Turban-DesktopBanner.jpg"},
    ],
    "premiumLenses" : [
        {img : "https://static1.lenskart.com/media/desktop/img/16-sep-24/r1.jpeg"},
    ],
    "sharkTank" : [
        {img : "https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif"},
    ],
    "trendingSunGlass" : [
        {img : "https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif"},
    ],
    "aquaColor" : [
        {img : "https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif"},
    ],
    "perfectFit" : {
        first: [
            { img: "https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/eye-square10.jpg" },
            { img: "https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/power-sun-square.jpg" },
        ],
        second: [
            { img: "https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/ce-square.jpg" },
            { img: "https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/sun-square.jpg" },
            { img: "https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner03_TileDesktop.jpg" },
        ]
    },
    "contactLens" : [
        {img : "https://static1.lenskart.com/media/desktop/img/June22/contact-lens-more.jpg"},
        {img : "https://static1.lenskart.com/media/desktop/img/June22/contact-lens-more-1.jpg"},
    ],
    "buyItYourWay" : {
        first : [
            {img : "https://static5.lenskart.com/media/uploads/bbbgt6.jpg"},
            {img : "https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/hto.jpg"},
        ],
        second : [
            {img : "https://static5.lenskart.com/media/uploads/bochat1.jpg"},
            {img : "https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/stores.jpg"},
        ]
    },
    "ourBrands" : {
        vincentChase : [
            {img : "https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg"},
        ],
        johnJacob : [
            {img : "https://static1.lenskart.com/media/desktop/img/Nov22/Updated%20brand%20banner%20jj%20.jpg"},
        ],
        lensCartAir : [
            {img : "https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/LK-AIR-Banner.jpg"},
        ],
        lensCartReader : [
            {img : "https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/LK-Readers-Banner.jpg"},
        ],
        hooper : [
            {img : "https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner05_Final2ndDec21.jpg"},
        ],
        aquaLens : [
            {img : "https://static1.lenskart.com/media/desktop/img/June22/Our-Brands-Banner.jpg"},
        ],
    },
    "callOurExpert" : [
        {img : "https://static5.lenskart.com/media/uploads/reachcs1.jpg"}
    ]
}
function Home(){
    var settings = {
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 663, // At this width, change the slides to show
                settings: {
                    slidesToShow: 2, // Show 2 slides on medium screens
                }
            },
            {
                breakpoint: 300, // At this width, change the slides to show
                settings: {
                    slidesToShow: 1, // Show 1 slide on smaller screens
                }
            }
        ]
    };
    return (
        <>
            <section className="main">
            
            <div className="glassPopUp-container">
                {data.map((item,i) => (
                    <GlassPopUp key={i} img={item.img} type={item.type}/>
                ))}
            </div>
            <div className="alternate-glassPopUp-container">
                <Slider className="alternate-glassPopUp-slider"  {...settings}>
                    {data.map((item,i) => (
                        <GlassPopUp key={i} img={item.img} type={item.type}/>
                    ))}
                </Slider>
            </div>
            <div className="image-card-container">
                {imageCard.extraOff.map((item,i) => (
                    <ImageCard key={i} url={item.img} type="extraOff" style={{ width: '100%', height: 'auto', marginBottom: '1rem' }}/>
                ))}
            </div>
            <ImageSlider/>
            <div className="image-card-container">
                {imageCard.ourPurpose.map((item,i) => (
                    <ImageCard key={i} url={item.img} type="freeOnlineeEyeTest" style={{ width: '100%', height: 'auto', marginBottom: '1rem' }}/>
                ))}
            </div>
            <GlassCardSlider/>
            <ImageHeading heading="Free Progressive Lenses"/>
            <div className="image-card-container">
                {imageCard.progressiveLenses.map((item,i) => (
                    <ImageCard key={i} url={item.img} type="sharkTank" style={{ width: '100%', height: 'auto', marginBottom: '1rem' }}/>
                ))}
            </div>
            <ImageHeading heading="Book Eye Test at Home" marginTop="4rem"/>
            <div className="image-card-container">
                {imageCard.bookeyeTest.map((item,i) => (
                    <ImageCard key={i} url={item.img} type="freeOnlineeEyeTest" style={{ width: '100%', height: 'auto', marginBottom: '1rem' }}/>
                ))}
            </div>
            <ImageHeading heading="Free Online Eye Test" marginTop="4rem"/>
            <div className="image-card-container">
                {imageCard.freeOnlineeEyeTest.map((item,i) => (
                    <ImageCard key={i} url={item.img} type="freeOnlineeEyeTest" style={{ width: '100%', height: 'auto', marginBottom: '1rem' }}/>
                ))}
            </div>
            <ImageHeading heading="Premium Eyewear" marginTop="4rem"/>
            <div className="image-card-container">
                {imageCard.premiumLenses.map((item,i) => (
                    <ImageCard key={i} url={item.img} type="premiumEyewear" style={{ width: '100%', height: 'auto', marginBottom: '1rem' }}/>
                ))}
            </div>
            <ImageHeading heading="As Seen on Shark Tank" marginTop="4rem"/>
            <div className="image-card-container">
                {imageCard.sharkTank.map((item,i) => (
                    <ImageCard key={i} url={item.img} type="sharkTank" style={{ width: '100%', height: 'auto', marginBottom: '1rem' }}/>
                ))}
            </div>
            <ImageHeading heading="Trending Sunglasses" marginTop="4rem"/>
            <div className="image-card-container">
                {imageCard.trendingSunGlass.map((item,i) => (
                    <ImageCard key={i} url={item.img} type="trendingSunglasses" style={{ width: '100%', height: 'auto', marginBottom: '1rem' }}/>
                ))}
            </div>
            <ImageHeading heading="Aquacolor - Glam Up With Color Lenses" marginTop="4rem"/>
            <div className="image-card-container">
                {imageCard.aquaColor.map((item,i) => (
                    <ImageCard key={i} url={item.img} type="Aquacolor - Glam Up With Color Lenses" style={{ width: '100%', height: 'auto', marginBottom: '1rem' }}/>
                ))}
            </div>
            <ImageHeading heading="FIND THE PERFECT FIT" marginTop="4rem"/>
            <div className="image-card-container">
                <div>
                    {imageCard.perfectFit.first.map((item,i) => (
                        <ImageCard key={i} url={item.img} type="Find the perfect fit" />
                    ))}
                </div>
                <div>
                    {imageCard.perfectFit.second.map((item,i) => (
                        <ImageCard key={i} url={item.img} type="Find the perfect fit" />
                    ))}
                </div>
            </div>
            <ImageHeading heading="CONTACT LENSES & MORE" marginTop="4rem"/>
            <div className="image-card-container">
                <div>
                    {imageCard.buyItYourWay.first.map((item,i) => (
                        <ImageCard key={i} url={item.img} type="Contact Lenses" />
                    ))}
                </div>
                <div>
                    {imageCard.buyItYourWay.second.map((item,i) => (
                        <ImageCard key={i} url={item.img} type="Contact Lenses" />
                    ))}
                </div>
            </div>
            <ImageHeading heading="OUR BRANDS" marginTop="4rem"/>
            <div className="image-card-container">
                {imageCard.ourBrands.vincentChase.map((item, i) => (
                    <ImageCard key={i} url={item.img} type="Our Brands" />
                ))}
            </div>
            
            <div className="image-card-container">
                {imageCard.ourBrands.johnJacob.map((item, i) => (
                    <ImageCard key={i} url={item.img} type="Our Brands" />
                ))}
            </div>

            <div className="image-card-container">
                {imageCard.ourBrands.lensCartAir.map((item, i) => (
                    <ImageCard key={i} url={item.img} type="Our Brands" />
                ))}
            </div>

            <div className="image-card-container">
                {imageCard.ourBrands.lensCartReader.map((item, i) => (
                    <ImageCard key={i} url={item.img} type="Our Brands" />
                ))}
            </div>

            <div className="image-card-container">
                {imageCard.ourBrands.hooper.map((item, i) => (
                    <ImageCard key={i} url={item.img} type="Our Brands" />
                ))}
            </div>

            <div className="image-card-container">
                {imageCard.ourBrands.aquaLens.map((item, i) => (
                    <ImageCard key={i} url={item.img} type="Our Brands" />
                ))}
            </div>
            <div className="image-card-container">
                {imageCard.callOurExpert.map((item, i) => (
                    <ImageCard key={i} url={item.img} type="Call our Expert1" />
                ))}
            </div>

            </section>
        </>
    )
}

export default Home