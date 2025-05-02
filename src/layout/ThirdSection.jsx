import React from 'react'
import icon1 from "../assets/image/icon1.png";
import icon2 from "../assets/image/icon2.png";
import icon3 from "../assets/image/icon3.png";
import icon4 from "../assets/image/icon4.png";
import StaticLang from '../utils/StaticLang';
const ThirdSection = () => {
    return (
        <div className="section-3">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="section-3-image">
                            <img src="https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2025/02/cms-banner-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="section-3-texts">
                            <p className="h5"><StaticLang en="Our Best Activities" az="Ən Yaxşı Fəaliyyətlərimiz"/></p>
                            <p className="h1"><StaticLang en="let us know about reading and cultural" az="Oxuma və Mədəniyyət haqqında Öyrənək"/></p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry of standard dummy text ever since the type and scrambled it to make a type specimen book.</p>
                            <div className="inside-div">
                                <div className="first-inside-div d-flex">
                                    <div className="icon-div">
                                        <img width={90} style={{borderRadius:"10px"}} src={icon1} alt="" />
                                    </div>
                                    <div className="info-div">
                                        <h5><StaticLang en="Early Learning" az="Tez Öyrənmə"/></h5>
                                        <p>Contrary popular belief lorem Ipsum</p>
                                    </div>
                                </div>
                                <div className="first-inside-div d-flex">
                                    <div className="icon-div">
                                        <img width={90} style={{borderRadius:"10px"}} src={icon2} alt="" />
                                    </div>
                                    <div className="info-div">
                                        <h5><StaticLang en="Creative Learning" az="Yaradıcı Öyrənmə"/></h5>
                                        <p>Contrary popular belief lorem Ipsum</p>
                                    </div>
                                </div>
                                <div className="first-inside-div d-flex">
                                    <div className="icon-div">
                                        <img width={90} style={{borderRadius:"10px"}} src={icon3} alt="" />
                                    </div>
                                    <div className="info-div">
                                        <h5><StaticLang en="Brain Learning" az="Beyin Öyrənməsi"/></h5>
                                        <p>Contrary popular belief lorem Ipsum</p>
                                    </div>
                                </div>
                                <div className="first-inside-div d-flex">
                                    <div className="icon-div">
                                        <img width={90} style={{borderRadius:"10px"}} src={icon4} alt="" />
                                    </div>
                                    <div className="info-div">
                                        <h5><StaticLang en="Music Learning" az="Musiqini Öyrənmək"/></h5>
                                        <p>Contrary popular belief lorem Ipsum</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdSection