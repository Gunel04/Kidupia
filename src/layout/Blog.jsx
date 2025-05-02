import React from 'react'
import Slider from 'react-slick'
import StaticLang from '../utils/StaticLang';

const Blog = () => {
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
        <div className="blog-con">
            <div className="container-fluid">
                <h4><StaticLang en="From the Blog" az="Məqalələrdən"/></h4>
                <h1><StaticLang en="Our latest blog" az="Ən Son Məqalələrimiz"/></h1>
                <div className="blog-slider">
                    <Slider {...settings}>
                        <div className='blog-slider-con'>  
                            <div className="first-blog-con">
                                <img src="https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/12/01.jpg" alt="" />
                            </div>
                            <div className="second-blog-con">
                                <h6>February 9, 2024 - By editor</h6>
                                <h5><a href="#">How to Write a Blog Post Your Readers Will...</a></h5>
                                <p>Why the world would end without travel coupons. The 16 worst songs about spa deals. How…</p>
                                <button><StaticLang en="Read more" az="Daha Çox Oxuyun"/></button>
                            </div>
                        </div>
                        <div className='blog-slider-con'>
                            <div className="first-blog-con">
                                <img src="https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/12/02.jpg" alt="" />
                            </div>
                            <div className="second-blog-con">
                                <h6>February 7, 2024 - By editor</h6>
                                <h5><a href="#">9 Content Marketing Trends and Ideas to...</a></h5>
                                <p>Why do people think wholesale accessories are a good idea? Unbelievable cool tech gadget…</p>
                                <button><StaticLang en="Read more" az="Daha Çox Oxuyun"/></button>
                            </div>
                        </div>
                        <div className='blog-slider-con'>
                            <div className="first-blog-con">
                                <img src="https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/12/03.jpg" alt="" />
                            </div>
                            <div className="second-blog-con">
                                <h6>February 5, 2024 - By editor</h6>
                                <h5><a href="#">The Ultimate Guide to Marketing Strategies...</a></h5>
                                <p>Many things about electronic devices your kids don't want you to know How storage devices…</p>
                                <button><StaticLang en="Read more" az="Daha Çox Oxuyun"/></button>
                            </div>
                        </div>
                        <div className='blog-slider-con'>
                            <div className="first-blog-con">
                                <img src="https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/12/04.jpg" alt="" />
                            </div>
                            <div className="second-blog-con">
                                <h6>February 3, 2024 - By editor</h6>
                                <h5><a href="#">50 Best Sales Questions to Determine...</a></h5>
                                <p>The unconventional guide to the software applications. Why do people think business…</p>
                                <button><StaticLang en="Read more" az="Daha Çox Oxuyun"/></button>
                            </div>
                        </div>
                        <div className='blog-slider-con'>
                            <div className="first-blog-con">
                                <img src="https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/12/05.jpg" alt="" />
                            </div>
                            <div className="second-blog-con">
                                <h6>February 1, 2024 - By editor</h6>
                                <h5><a href="#">6 Simple Ways To Boost Your...</a></h5>
                                <p>The best ways to utilize interview techniques. 18 things your boss expects you know about…</p>
                                <button><StaticLang en="Read more" az="Daha Çox Oxuyun"/></button>
                            </div>
                        </div>
                        <div className='blog-slider-con'>
                            <div className="first-blog-con">
                                <img src="https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/12/06.jpg" alt="" />
                            </div>
                            <div className="second-blog-con">
                                <h6>January 29, 2024 - By editor</h6>
                                <h5><a href="#">9 Customer Experience Trends That'll...</a></h5>
                                <p>The oddest place you will find financial reports. Will businesses ever rule the world That insane…</p>
                                <button><StaticLang en="Read more" az="Daha Çox Oxuyun"/></button>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Blog