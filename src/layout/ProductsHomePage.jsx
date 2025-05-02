import React, { useContext } from 'react'
import Slider from 'react-slick'
import SingleProduct from '../shopping/SingleProduct';
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import { CiHeart } from 'react-icons/ci';
import { LuChartNoAxesColumn } from 'react-icons/lu';
import { IoEyeOutline } from 'react-icons/io5';
import { useCart } from 'react-use-cart';
import Swal from 'sweetalert2';
import StaticLang from '../utils/StaticLang';

const ProductsHomePage = () => {
    const [products] = useContext(ProductContext);
    const { addItem } = useCart();
    var settings = {
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <>
            <div className="product-con">
                <div className="container-fluid">
                    <h5><StaticLang en="Best selling products" az=""/></h5>
                    <h1><StaticLang en="Browsing Our Trending Items" az=""/></h1>
                    <div className="product-slider">
                        <Slider {...settings}>
                            {products.slice(0, 12).map((item, index) => (
                                <div key={index} className='product-slider-con'>

                                    <div className="card">
                                        <img height={270} style={{ objectFit: "contain" }} src={item.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h4 className="card-title"><StaticLang en={item.nameEn.slice(0, 20)} az={item.nameAz.slice(0, 20)}/>...</h4>
                                            <p className="card-text"><StaticLang en={item.descriptionEn.slice(0, 20)} az={item.descriptionAz.slice(0, 60)}/>...</p>
                                            <h6 style={{ fontSize: "20px" }} className='card-price'><StaticLang en="Price" az="Məbləğ"/>: <span style={{ color: "#e94a85" }}>${item.price}</span> </h6>
                                            <Link to={`/shop/${slugify(item.nameEn, { lower: true })}`} className="btn me-2 more-details"><StaticLang en="More Details" az="Ətraflı"/></Link>
                                            <button onClick={() => {
                                                Swal.fire({
                                                    title: "Product is added to cart successfully!",
                                                    icon: "success"
                                                });
                                                addItem(item)
                                            }} className="btn add-to-cart"><StaticLang en="Add to Cart" az="Səbətə Əlavə Et"/></button>
                                        </div>
                                        <div className="icons-con">
                                            <a href='#' className="icon-1"><CiHeart size={25} /></a>
                                            <a href='#' className="icon-2"><LuChartNoAxesColumn size={25} /></a>
                                            <Link to={`/shop/${slugify(item.nameEn, { lower: true })}`} className="icon-3"><IoEyeOutline size={25} /></Link>



                                        </div>
                                    </div>
                                </div>
                            ))}

                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsHomePage