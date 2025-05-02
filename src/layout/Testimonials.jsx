import React from 'react'
import Slider from 'react-slick';
import StaticLang from '../utils/StaticLang';

const Testimonials = () => {
    var settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="testimonial-con">
                <div className="container-fluid">
                    <h5><StaticLang en="Testimonials" az="İfadələr"/></h5>
                    <h1><StaticLang en="What our Client's says" az="Müştərilərimiz Nə Deyir?"/></h1>
                    <div className="testimonial-slider">
                        <Slider {...settings}>
                            <div className='testimonial-slider-con'>
                                <div className="first-con">
                                    <h6><StaticLang en="My Archive Is Of Longings." az="Arxivim Həsrətlərdir."/></h6>
                                    <p>Lorem Ipsum is simply dummy text of the printing and type setting industry lorem Ipsum has been the industry standard dummy text ever since taht took it to make a type specimen book.  </p>
                                </div>
                                <div className="second-con">
                                    <div className="client-img">
                                        <img width={65} src="https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2025/02/01-1.png" alt="" />
                                    </div>
                                    <div className="client-name">
                                        <h4>Lawrance L. Nones</h4>
                                        <p><StaticLang en="Designer" az="Dizayner" /></p>
                                    </div>
                                </div>
                            </div>
                            <div className='testimonial-slider-con'>
                                <div className="first-con">
                                    <h6><StaticLang en='"Impressive Quality, Reliable."' az='"Cəlbedici Keyfiyyət, Etibarlı."'/></h6>
                                    <p>Lorem Ipsum is simply dummy text of the printing and type setting industry lorem Ipsum has been the industry standard dummy text ever since taht took it to make a type specimen book.  </p>
                                </div>
                                <div className="second-con">
                                    <div className="client-img">
                                        <img width={65} src="https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2025/02/02-1.png" alt="" />
                                    </div>
                                    <div className="client-name">
                                        <h4>Augusta Wind</h4>
                                        <p><StaticLang en="Founder" az="Təsisçi"/></p>
                                    </div>
                                </div>
                            </div>
                            <div className='testimonial-slider-con'>
                                <div className="first-con">
                                    <h6><StaticLang en='"Excellent Product, A+ Service."' az='"Əla Məhsul, A+ Xidmət."'/></h6>
                                    <p>Lorem Ipsum is simply dummy text of the printing and type setting industry lorem Ipsum has been the industry standard dummy text ever since taht took it to make a type specimen book.  </p>
                                </div>
                                <div className="second-con">
                                    <div className="client-img">
                                        <img width={65} src="https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2025/02/03-1.png" alt="" />
                                    </div>
                                    <div className="client-name">
                                        <h4>Stefanie Rashford</h4>
                                        <p><StaticLang en="Owner" az="Sahibkar"/></p>
                                    </div>
                                </div>
                            </div>
                            <div className='testimonial-slider-con'>
                                <div className="first-con">
                                    <h6><StaticLang en='"Reliables Product, Delivers."' az='"Etibarlı Məhsul, Çatdırılma."'/></h6>
                                    <p>Lorem Ipsum is simply dummy text of the printing and type setting industry lorem Ipsum has been the industry standard dummy text ever since taht took it to make a type specimen book.  </p>
                                </div>
                                <div className="second-con">
                                    <div className="client-img">
                                        <img width={65} src="https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2025/02/04-1.png" alt="" />
                                    </div>
                                    <div className="client-name">
                                        <h4>Chelsea Handler</h4>
                                        <p><StaticLang en="CEO" az="Baş Direktor"/></p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="sponsor-con">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-sm-4 col-md-3 col-lg-2">
                            <a href="#"><img src="https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2025/02/1.png" alt="" /></a>
                        </div>
                        <div className="col-12 col-sm-4 col-md-3 col-lg-2">
                            <a href="#"><img src="https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2025/02/2.png" alt="" /></a>
                        </div>
                        <div className="col-12 col-sm-4 col-md-3 col-lg-2">
                            <a href="#"><img src="https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2025/02/3.png" alt="" /></a>
                        </div>
                        <div className="col-12 col-sm-4 col-md-3 col-lg-2">
                            <a href="#"><img src="https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2025/02/4.png" alt="" /></a>
                        </div>
                        <div className="col-12 col-sm-4 col-md-3 col-lg-2">
                            <a href="#"><img src="https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2025/02/5.png" alt="" /></a>
                        </div>
                        <div className="col-12 col-sm-4 col-md-3 col-lg-2">
                            <a href="#"><img src="https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2025/02/6.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Testimonials