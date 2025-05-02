import React from 'react'
import Slider from 'react-slick';
import StaticLang from '../utils/StaticLang';

const SecondSection = () => {
    const settings = {
        // dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        arrows: true
    };
    return (
        <div className="container-fluid">
            <div className='section-2'>
                <div className="section-2-left">
                    <h5><StaticLang en="Categories" az="Kateqoriyalar"/></h5>
                    <h1><StaticLang en="Browsing Top Categories" az="Ən Yaxşı Kateqoriyalara Baxın"/></h1>
                    <p>Lorem Ipsum is simply dummy text of the the first to showcase new gadgets and characteristic words etc.</p>
                </div>
                <div className="section-2-right">
                    <Slider {...settings}>
                        <div className='section-2-card'>
                            <img src="https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2025/02/cat-04.jpg" alt="" />
                            <h5><StaticLang en="Baby Kids Clothe" az="Körpə Uşaq Paltarları"/></h5>
                            <p><StaticLang en="13 Products" az="13 Məhsul"/></p>
                        </div>
                        <div className='section-2-card'>
                            <img src="https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2025/02/cat-02.jpg" alt="" />
                            <h5><StaticLang en="Baby Kids Shoes" az="Körpə Uşaq Ayaqqabıları"/></h5>
                            <p><StaticLang en="1 Products" az="1 Məhsul"/></p>
                        </div>
                        <div className='section-2-card'>
                            <img src="https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2025/02/cat-05.jpg" alt="" />
                            <h5><StaticLang en="Baby Lotions" az="Uşaq Losyonları"/></h5>
                            <p><StaticLang en="4 Products" az="4 Məhsul"/></p>
                        </div>
                        <div className='section-2-card'>
                            <img src="https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2025/02/cat-03.jpg" alt="" />
                            <h5><StaticLang en="Kids Food" az="Uşaq Yeməyi"/></h5>
                            <p><StaticLang en="2 Products" az="2 Məhsul"/></p>
                        </div>
                        <div className='section-2-card'>
                            <img src="https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2025/02/cat-01.jpg" alt="" />
                            <h5><StaticLang en="Kids Toys" az="Uşaq Oyuncaqları"/></h5>
                            <p><StaticLang en="4 Products" az="4 Məhsul"/></p>
                        </div>
                        
                    </Slider>
                </div>
            </div>

        </div>
    )
}

export default SecondSection