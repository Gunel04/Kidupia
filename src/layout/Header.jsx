import React, { useContext, useEffect, useState } from 'react'
import logo from "../assets/image/kidupia.jpg";
import { CiHeart, CiSearch, CiUser } from 'react-icons/ci';
import { PiBagSimpleThin } from 'react-icons/pi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { ProductContext } from '../context/ProductContext';
import slugify from 'slugify';
import { LangContext } from '../context/LangContext';
import StaticLang from '../utils/StaticLang';
const Header = (props) => {
    console.log(props);
    
    const [products] = useContext(ProductContext);
    const [lang, setLang] = useContext(LangContext);
    const { totalItems, items, updateItemQuantity, removeItem, isEmpty, cartTotal } = useCart();
    const [keyword, setKeyword] = useState("");
    // const [mode, setMode] = useState(localStorage.getItem('mode'));
    // useEffect(() => {
    //     document.querySelector("html").attributes[1].value = `${mode}`;
    // }, []);

    const [theme, setTheme] = useState(localStorage.getItem('mode'));

    // const toggleTheme = () => {
    //     setTheme((curr) => (curr === "light" ? "dark" : "light"));
    //     if (theme === "light") {
    //         localStorage.setItem('mode', 'dark');
    //     }
    //     else {
    //         localStorage.setItem('mode', 'light');
    //     }
    // }
    return (
        <>
            <header className="p-3">
                <div className="first-header">
                    <div className="container-fluid">
                        <div className="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-between">
                            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                                <img src={logo} alt="" />
                            </a>
                            <form className="col-12 col-lg-5 mb-3 mb-lg-0 me-lg-3" role="search">
                                <div className="form-div col-lg-6 d-flex justify-content-center align-items-center">
                                    <select name="" id="">
                                        <option value="All Categories">All Categories</option>
                                        <option value="Our Store">Our Store</option>
                                        <option value="Kids Toys">Kids Toys</option>
                                        <option value="Baby Kids Clothe">Baby Kids Clothe</option>
                                        <option value="Footwear">Footwear</option>
                                    </select>
                                    <input type="search" className="form-control " placeholder="Search products..." aria-label="Search" />
                                    <div>
                                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <CiSearch size={30} />
                                        </button>
                                        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Search</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="input-group mb-3">
                                                            <input type="text" className="form-control" placeholder="Enter product name..." aria-label="Recipient's username" onChange={e => setKeyword(e.target.value)} />
                                                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                                                        </div>
                                                        <ul className="list-group">
                                                            {!keyword ? "" : products.filter(p => p.name.toLocaleLowerCase().includes(keyword)).map((item, index) => (
                                                                <span key={index} data-bs-dismiss="modal"><Link to={`/shop/${slugify(item.name, { lower: true })}`} className="list-group-item" key={index}><img src={item.image} width={70} alt={item.name} /> {item.name}</Link></span>

                                                            ))}
                                                        </ul>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </form>
                            <div className="text-end d-flex align-items-center justify-content-center ">
                                <Link to='/login'>
                                    <div className="user-logo me-4">
                                        <div className="user-icon"><CiUser size={30} /> </div>
                                        <div className="user">
                                            <p style={{ opacity: "0.5" }}><StaticLang en="Sign In" az="Daxil Olun" /></p>
                                            <p style={{ fontWeight: "600" }}><StaticLang en="Account" az="Hesabım" /></p>
                                        </div>
                                    </div>
                                </Link>
                                <a href="#" className='me-4'><CiHeart size={30} /></a>
                                <Link to='/cart'>
                                    <div className="user-logo">
                                        <div className="user-icon position-relative">
                                            <PiBagSimpleThin size={30} />
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill " style={{ backgroundColor: "#e94a85" }}>{totalItems}</span>

                                        </div>
                                        <div className="user">
                                            <p style={{ opacity: "0.5" }}>${cartTotal}</p>
                                            <p style={{ fontWeight: "600" }}><StaticLang az="Səbətim" en="My Cart" /></p>
                                        </div>
                                    </div>
                                </Link>
                                <button className='btn ms-2 lang-btn' onClick={() => {
                                    lang === "AZ" ? setLang("EN") : setLang("AZ");
                                    lang === "AZ" ? localStorage.setItem("lang", "EN") : localStorage.setItem("lang", "AZ");
                                }}>{lang}</button>
                                
                                <button className='btn theme-btn ms-2' style={{textTransform:"uppercase"}} onClick={props.modeFunction} theme={props.theme}>{props.theme}</button>
                                {/* <button className='btn ms-2' onClick={() => {
                                    if (mode === "light") {
                                        setMode("dark");
                                        localStorage.setItem('mode', 'dark');
                                        window.location.reload();
                                    }
                                    else {
                                        setMode("light");
                                        localStorage.setItem('mode', 'light');
                                        window.location.reload();

                                    }
                                    document.querySelector("html").attributes[1].value = `${mode}`;

                                }} style={{textTransform:"uppercase"}}>{mode}</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <nav className="py-2 border-bottom">
                <div className="container-fluid d-flex flex-wrap">
                    <ul className="nav me-auto">
                        <li className="nav-item"><Link to='/' style={{ color: "#e94a85" }} className="nav-link px-4 active" aria-current="page"><StaticLang az="Ana səhifə" en="Home" /></Link></li>
                        <li className="nav-item"><a href="#" className="nav-link  px-4"><StaticLang az="Alış-veriş" en="Shop" /> <MdKeyboardArrowDown /></a></li>
                        <li className="nav-item"><a href="#" className="nav-link  px-4"><StaticLang az="Kateqoriyalar" en="Categories" /> <MdKeyboardArrowDown /></a></li>
                        <li className="nav-item"><Link to='/shop' className="nav-link  px-4"><StaticLang az="Məhsullar" en="Products" /> <MdKeyboardArrowDown /></Link></li>
                        <li className="nav-item"><Link to='/contact' className="nav-link  px-4"><StaticLang az="Bizimlə əlaqə" en="Contact us" /> <MdKeyboardArrowDown /></Link></li>
                        <li className="nav-item"><a href="#" className="nav-link  px-4"><StaticLang az="Elementlər" en="Elements" /> <MdKeyboardArrowDown /></ a></li>
                    </ul>
                    <ul className="nav today-deal">
                        <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2"><StaticLang az="Günün hesabatı" en="Today's deal" /></a></li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Header