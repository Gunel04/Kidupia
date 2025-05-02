import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaEnvelope, FaLocationDot } from 'react-icons/fa6'
import { MdOutlineAccessTimeFilled } from 'react-icons/md'
import { PiEnvelopeThin } from 'react-icons/pi'
import StaticLang from '../utils/StaticLang'

const Contact = () => {
    return (
        <>
            <div className="first-shop">
                <h1><StaticLang az="Bizimlə əlaqə" en="Contact us"/></h1>
            </div>
            <div className="container-fluid">
                <div className="first-contact-con">
                    <div className="left-map-part">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75476.8342887631!2d49.76399623198143!3d40.382851577322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6343917fff%3A0xae9045d8425faf97!2sMatrix%20academy!5e0!3m2!1saz!2saz!4v1743389871526!5m2!1saz!2saz" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                    </div>
                    <div className="right-form-part">
                        <h1><StaticLang en="Get in touch with us" az="Bizimlə əlaqə saxlayın"/></h1>
                        <p><StaticLang en="If you wish to directly reach us, Please fill out the form below" az="Bizimlə birbaşa əlaqə saxlamaq istəyirsinizsə, aşağıdakı formanı doldurun"/> -</p>
                        <form action="">
                            <label htmlFor=""><StaticLang az="Adınız" en="Your name"/></label>
                            <input type="text" />
                            <label htmlFor=""><StaticLang az="E-poçt ünvanınız" en="Your Email"/></label>
                            <input type="email" />
                            <label htmlFor=""><StaticLang az="Mesajınız (istəyə bağlı)" en="Your Message (optional)"/></label>
                            <textarea name="" id=""></textarea>
                            <button><StaticLang az="Təqdim Edin" en="Submit"/></button>
                        </form>
                    </div>
                </div>
                <div className="second-contact-con">
                    <div style={{ backgroundColor: "#f0f0f0" }} className="little-contact-cons">
                        <div className="icon">
                            <FaLocationDot size={20} color='#e94a85' />
                        </div>
                        <div className="info">
                            <p>60 29th San Francisco, 507</p>
                            <p> - Union Trade Center</p>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#f5f5f5" }} className="little-contact-cons">
                        <div className="icon">
                            <FaPhoneAlt size={20} color='#e94a85' />
                        </div>
                        <div className="info">
                            <p><StaticLang az="Bizə zəng edin" en="Call Us"/>:</p>
                            <p>+00 123-456-789</p>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#f0f0f0" }} className="little-contact-cons">
                        <div className="icon">
                            <FaEnvelope size={20} color='#e94a85' />
                        </div>
                        <div className="info">
                            <p><StaticLang az="Bizə poçt göndərin" en="Mail us"/> :</p>
                            <p>demo@example.com</p>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#f5f5f5" }} className="little-contact-cons">
                        <div className="icon">
                            <MdOutlineAccessTimeFilled size={20} color='#e94a85' />
                        </div>
                        <div className="info">
                            <p><StaticLang az="Açıq vaxt" en="Open time"/> :</p>
                            <p>10:00AM – 6:00PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact