import React from 'react'
import FirstSliderComponent from '../layout/FirstSliderComponent'
import SecondSection from '../layout/SecondSection'
import ThirdSection from '../layout/ThirdSection'
import FifthSection from '../layout/FifthSection'
import Testimonials from '../layout/Testimonials'
import Blog from '../layout/Blog'
import ProductsHomePage from '../layout/ProductsHomePage'

const Home = () => {
    return (
        <div>
            <FirstSliderComponent />
            <SecondSection />
            <ThirdSection />
            <ProductsHomePage />
            <FifthSection />
            <Testimonials />
            <Blog />
        </div>
    )
}

export default Home