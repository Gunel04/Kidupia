import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext';
import slugify from 'slugify';
import Preloader from '../Preloader';
import StaticLang from '../utils/StaticLang';

const MoreDetails = () => {
    const { slug } = useParams();
    const [products] = useContext(ProductContext);
    const singleInfo = products.find(item => slugify(item.nameEn, { lower: true }) === slug);

    return (
        <>
            <div className="first-shop">
                <h1>Product Details</h1>
            </div>
            {singleInfo === undefined ? <Preloader /> : <div className="container">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={singleInfo.image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3"><StaticLang en={singleInfo.nameEn} az={singleInfo.nameAz}/></h1>
                        <p className="lead"><StaticLang en={singleInfo.descriptionEn} az={singleInfo.descriptionAz}/></p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button onClick={()=>{window.history.back()}} type="button" className="btn btn-lg px-4 me-md-2 back-btn"><StaticLang en="Back" az="Geriyə"/></button>
                        </div>
                    </div>
                </div>

            </div>}

        </>
    )
}

export default MoreDetails