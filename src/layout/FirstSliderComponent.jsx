import React from 'react'
import Slider from 'react-slick'

const FirstSliderComponent = () => {
    var settings = {
        // dots: true/,
        infinite: true,
        speed: 50,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
    };
    return (
        <div className='slider-container'>
            <div className="first-container">
                <Slider {...settings}>
                    <div className='first-slide'>
                        <div className="slide-info">
                            <h3>The creative world</h3>
                            <h1>SillyMe Kids Girls Cartoon pretend Play Toy</h1>
                            <button>Shop Now</button>
                        </div>
                    </div>
                    <div className='second-slide'>
                        <div className="slide-info">
                            <h3>The creative world</h3>
                            <h1>Girls Party Dresses White Lace Dress Bohemian Dress</h1>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className="second-container">
                <div className="left-container">
                    <div className="con-info">
                        <h3>up to 30% off</h3>
                        <h1>Rainbow Stacker Wooden Ring</h1>
                        <button>Shop Now</button>
                    </div>
                </div>
                <div className="right-container">
                    <div className="con-info">
                        <h3>up to 25% off</h3>
                        <h1>Instax Mini Instant Toys Camera</h1>
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstSliderComponent