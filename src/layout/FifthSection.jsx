import React from 'react'
import { PiHeadsetThin, PiPiggyBankThin, PiSealPercentThin, PiTruckThin } from 'react-icons/pi'
import StaticLang from '../utils/StaticLang'

const FifthSection = () => {
    return (
        <div className="section-5">
            <div className="first-part">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                            <div className="little-cons">
                                <div className="icon-con">
                                    <PiTruckThin size={70} />
                                </div>
                                <div className="info-con">
                                    <h5><StaticLang en="Worldwide Shipping" az="Ümumdünya Göndərmə"/></h5>
                                    <p><StaticLang en="For all Orders Over $100" az="100$'dan Yuxarı Bütün Sifarişlər üçün"/></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                            <div className="little-cons">
                                <div className="icon-con">
                                    <PiPiggyBankThin size={70} />
                                </div>
                                <div className="info-con">
                                    <h5><StaticLang en="Money Back Guarantee" az="Pulun Geri Qaytarılmasına Zəmanət"/></h5>
                                    <p><StaticLang en="Guarante With In 30 Days" az="30 Gün ərzində Zəmanət"/></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                            <div className="little-cons">
                                <div className="icon-con">
                                    <PiSealPercentThin size={70} />
                                </div>
                                <div className="info-con">
                                    <h5><StaticLang en="Offers and Discounts" az="Təkliflər və Endirimlər"/></h5>
                                    <p><StaticLang en="Back Returns İn 7 Days" az="Ödəniş 7 Günə Geri Qayıdır"/></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                            <div className="little-cons">
                                <div className="icon-con">
                                    <PiHeadsetThin size={70} />
                                </div>
                                <div className="info-con">
                                    <h5><StaticLang en="24/7 Support Services" az="24/7 Dəstək Xidmətləri"/></h5>
                                    <p><StaticLang en="Contact Us Anytime" az="İstənilən Vaxt Bizimlə Əlaqə Saxlayın"/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container-fluid"> */}
            <div className="second-part">
                <div className="second-part-card-1">
                    <div className="img-con">
                        <img src="https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2025/02/cms-banner-2.jpg" alt="" />
                    </div>
                    <div className="text-of-img">
                        <h3>up to 25% off</h3>
                        <h1>Swimming Bathtub Pool Kids Toys</h1>
                        <button>Shop Now</button>
                    </div>
                </div>
                 <div className="second-part-card-2">
                    <div className="img-con">
                        <img src="https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2025/02/cms-banner-4.jpg" alt="" />
                    </div>
                    <div className="text-of-img">
                        <h3>up to 30% off</h3>
                        <h1>Rainbow Stacker Wooden Ring</h1>
                        <button>Show Now</button>
                    </div>
                </div>
                <div className="second-part-card-3">
                    <div className="img-con">
                        <img src="https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2025/02/cms-banner-3.jpg" alt="" />
                    </div>
                    <div className="text-of-img">
                        <h3>up to 30% off</h3>
                        <h1>Rainbow Stacker Wooden Ring</h1>
                        <button>Show Now</button>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default FifthSection