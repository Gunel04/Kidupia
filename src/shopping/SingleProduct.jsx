import React from 'react'
import { CiHeart } from 'react-icons/ci';
import { IoEyeOutline } from 'react-icons/io5';
import { LuChartNoAxesColumn } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import slugify from 'slugify';
import Swal from 'sweetalert2';
import StaticLang from '../utils/StaticLang';

const SingleProduct = (props) => {
    const { productInfo } = props;
    const { addItem } = useCart();
    return (

        <div className="col-12 col-sm-6 col-md-4 col-lg-4">
            <div className="card">
                <img height={270} style={{ objectFit: "contain" }} src={productInfo.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title"><StaticLang en={productInfo.nameEn.slice(0, 20)} az={productInfo.nameAz.slice(0, 20)}/>...</h4>
                    <p className="card-text"><StaticLang en={productInfo.descriptionEn.slice(0, 20)} az={productInfo.descriptionAz.slice(0, 20)}/>....</p>
                    <h5 className='card-price'><StaticLang en="Price" az="Məbləğ"/>: <span style={{ color: "#e94a85" }}>${productInfo.price}</span> </h5>
                    <Link to={`/shop/${slugify(productInfo.nameEn, { lower: true })}`} className="btn me-2 more-details"><StaticLang en="More Details" az="Ətraflı"/></Link>
                    <button onClick={() => {
                        Swal.fire({
                            title: "Product is added to cart successfully!",
                            icon: "success"
                        });
                        addItem(productInfo)
                    }} className="btn add-to-cart"><StaticLang en="Add to Cart" az="Səbətə əlavə et"/></button>
                </div>
                <div className="icons-con">
                    <a href='#' className="icon-1"><CiHeart size={25} /></a>
                    <a href='#' className="icon-2"><LuChartNoAxesColumn size={25} /></a>
                    <Link to={`/shop/${slugify(productInfo.nameEn, {lower:true})}`} className="icon-3"><IoEyeOutline size={25} /></Link>
                </div>
            </div>
        </div>

    )
}

export default SingleProduct