import React from 'react'
import { BiMobileAlt, BiPhone } from 'react-icons/bi'
import { FaFacebookF, FaInstagram, FaPinterestSquare, FaYoutube } from 'react-icons/fa'
import { PiEnvelopeSimpleThin } from 'react-icons/pi'
import { RiTwitterXFill } from 'react-icons/ri'
import { TfiLocationPin } from 'react-icons/tfi'
import StaticLang from '../utils/StaticLang'

const Footer = () => {
    return (
        <>
            <div className="footer-subscribe">
                <h1><StaticLang en="Subscribe To Our Newsletter" az="Bülletenimizə Abunə Olun" /></h1>
                <p><StaticLang en="Subscribe to our latest newsletter to get news about special discount upcoming sales" az="Qarşıdan gələn xüsusi endirimli satışlar haqqında xəbərlər əldə etmək üçün ən son bülletenimizə abunə olun"/></p>
                <form action="">
                    <input type="email" placeholder='Email' />
                    <button><StaticLang en="Subscribe" az="Abunə olun" /></button>
                </form>
            </div>
            <footer>
                <div className="container-fluid">
                    <div className="first-footer">
                        <div className='footer-con'>
                            <h5 style={{ paddingLeft: "0" }}><StaticLang en="About Our Store" az="Mağazamız haqqında" /></h5>
                            <p style={{ marginBottom: "10px" }}><StaticLang en="Welcome to our store, where we pride ourselves on providing exceptional products and unparalleled customer service our store is a haven for those who appreciate quality, style, and innovation" az="Müstəsna məhsullar və misilsiz müştəri xidməti təqdim etməkdən qürur duyduğumuz mağazamıza xoş gəlmisiniz, mağazamız keyfiyyət, üslub və yeniliyi qiymətləndirənlər üçün sığınacaqdır." /></p>
                            <img src="https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2025/02/app.png" alt="" />
                            <img src="https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2025/02/google.png" alt="" />
                        </div>
                        <div className='footer-con'>
                            <h5><StaticLang en="Quick links" az="Sürətli bağlantılar" /></h5>
                            <ul>
                                <li><a href="#"><StaticLang en="About Us" az="Haqqımızda" /></a></li>
                                <li><a href="#"><StaticLang en="Redeem voucher" az="Geri Qaytarılma" /></a></li>
                                <li><a href="#"><StaticLang en="Contact Us" az="Bizimlə əlaqə" /></a></li>
                                <li><a href="#"><StaticLang en="Latest News" az="Son Xəbərlər" /></a></li>
                                <li><a href="#"><StaticLang en="Shipping" az="Göndərilmə" /></a></li>
                                <li><a href="#"><StaticLang en="Payment" az="Ödəniş" /></a></li>
                            </ul>

                        </div>
                        <div className='footer-con'>
                            <h5><StaticLang en="Your Account" az="Hesabın" /></h5>
                            <ul>
                                <li><a href="#"><StaticLang en="Product Support" az="Məhsul Dəstəyi" /></a></li>
                                <li><a href="#"><StaticLang en="Checkout" az="Yoxlanış" /></a></li>
                                <li><a href="#"><StaticLang en="Licence Policy" az="Lisenziya Siyasəti" /></a></li>
                                <li><a href="#"><StaticLang en="Affiliates" az="Filiallar" /></a></li>
                                <li><a href="#"><StaticLang en="Locality" az="Məhəllə" /></a></li>
                                <li><a href="#"><StaticLang en="Order Tracking" az="Sifariş İzləmə" /></a></li>
                            </ul>
                        </div>
                        <div className='footer-con'>
                            <h5><StaticLang en="Useful Links" az="Faydalı Bağlantılar" /></h5>
                            <ul>
                                <li><a href="#"><StaticLang en="Contact Us" az="Bizimlə əlaqə" /></a></li>
                                <li><a href="#"><StaticLang en="Shipping" az="Göndərilmə" /></a></li>
                                <li><a href="#"><StaticLang en="Sitemap" az="Sayt Xəritəsi" /></a></li>
                                <li><a href="#"><StaticLang en="FAQs" az="Tez-tez Verilən Suallar" /></a></li>
                                <li><a href="#"><StaticLang en="Store Us" az="Yadda Saxla" /></a></li>
                                <li><a href="#"><StaticLang en="About Us" az="Haqqımızda" /></a></li>
                            </ul>
                        </div>
                        <div className='footer-con'>
                            <h5><StaticLang en="Contact Us" az="Bizimlə əlaqə" /></h5>
                            <ul>
                                <li><p><TfiLocationPin /> 60 29th Street San Francisco, 94110 507-Union Trade Center, United States America</p></li>
                                <li><a href="#"><BiPhone /> (+91) 9876-543-210</a></li>
                                <li><a href="#"><BiMobileAlt /> (+00) 123-456-7890</a></li>
                                <li><a href="#"><PiEnvelopeSimpleThin /> demo@example.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="second-footer">
                        <ul>
                            <li><a href="#"><FaFacebookF /></a></li>
                            <li><a href="#"><RiTwitterXFill /></a></li>
                            <li><a href="#"><FaInstagram /></a></li>
                            <li><a href="#"><FaPinterestSquare /></a></li>
                            <li><a href="#"><FaYoutube /></a></li>
                        </ul>
                        <p className='kidupia-demo'>© {new Date().getFullYear()} Kidupia Demo - WordPress Theme by <a href="#">Avanam</a></p>
                        <img src="https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2025/02/payment.png" alt="" />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer