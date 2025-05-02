import React, { useContext, useEffect, useState } from 'react'
import Products from './Products'
import axios from 'axios';
import { ProductContext } from '../context/ProductContext';
import SingleProduct from './SingleProduct';
import StaticLang from '../utils/StaticLang';

const ShopPage = () => {
    const [products] = useContext(ProductContext);
    const [categoryEn, setCategoryEn] = useState([]);
    const [categoryAz, setCategoryAz] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [active, setActive] = useState("");
    useEffect(() => {
        axios.get("https://mocki.io/v1/c7136c5a-f83c-4978-9616-dd95c74a9128")
            .then(res => setCategoryEn(res.data.categoryEn)
            )
    }, []);
    useEffect(() => {
        axios.get("https://mocki.io/v1/c7136c5a-f83c-4978-9616-dd95c74a9128")
            .then(res => setCategoryAz(res.data.categoryAz)
            )
    }, []);
    const filterProductsEn = (categoryEn) => {
        const filteredProducts = products.filter(p => p.categoryEn === categoryEn)
        setFilteredData(filteredProducts);
        setActive(categoryEn);
    }
    const filterProductsAz = (categoryAz) => {
        const filteredProducts = products.filter(p => p.categoryAz === categoryAz)
        setFilteredData(filteredProducts);
        setActive(categoryAz);
    }
    return (
        <>
            <div className="first-shop">
                <h1><StaticLang az="Məhsullar" en="Products" /></h1>
            </div>
            <div className="container-fluid">
                <div className="second-shop">
                    <div className="left-list-part">
                        <div className="second-list">
                            <h4><StaticLang en="Shop by Categories" az="Kateqoriyalar üzrə alış-veriş edin"/></h4>
                            <hr />
                            <ul>
                                <StaticLang en={categoryEn.map((item, index) => (
                                    <li onClick={() => { filterProductsEn(item) }} className={`${active === item ? "list-item" : ""}`} key={index}>{item}</li>
                                ))} az={categoryAz.map((item, index) => (
                                    <li onClick={() => { filterProductsAz(item) }} className={`${active===item?"list-item":""}`} key={index}>{item}</li>
                                ))}/>

                                <li style={{ color: "#e94a85" }} onClick={() => { filterProductsEn() }}><StaticLang en="All Products" az="Bütün Məhsullar"/></li>
                            </ul>
                        </div>
                        <div className="second-list">
                            <h4><StaticLang en="Highlights" az="Vurğulamalar"/></h4>
                            <hr />
                            <ul>
                                <li><StaticLang en="All Products" az="Bütün Məhsullar"/></li>
                                <li><StaticLang en="Best Seller" az="Ən Yaxşı Satıcı"/></li>
                                <li><StaticLang en="New Arrivals" az="Yeni Gələnlər"/></li>
                                <li><StaticLang en="Sale" az="Satış"/></li>
                                <li><StaticLang en="Hot Items" az="Öndə Gedən Əşyalar"/></li>
                            </ul>
                        </div>
                        <div className="third-list">
                            <h4><StaticLang en="Filter by Color" az="Rəngə görə Çeşidləyin"/></h4>
                            <hr />
                            <a href="#"><div style={{ backgroundColor: "#1e73be" }} className="color-div"></div></a>
                            <a href="#"><div style={{ backgroundColor: "#964b00" }} className="color-div"></div></a>
                            <a href="#"><div style={{ backgroundColor: "#228b22" }} className="color-div"></div></a>
                            <a href="#"><div style={{ backgroundColor: "#ff7f50" }} className="color-div"></div></a>
                            <a href="#"><div style={{ backgroundColor: "#fe5bac" }} className="color-div"></div></a>
                            <a href="#"><div style={{ backgroundColor: "#a020f0" }} className="color-div"></div></a>
                            <a href="#"><div style={{ backgroundColor: "#dd4444" }} className="color-div"></div></a>
                            <a href="#"><div style={{ backgroundColor: "#ff0" }} className="color-div"></div></a>
                        </div>
                        <div className="fourth-list">
                            <h4><StaticLang en="Filter by Size" az="Ölçüyə görə Çeşidləyin"/></h4>
                            <hr />
                            <button className='btn btn-outline-dark mx-2'>S (1)</button>
                            <button className='btn btn-outline-dark mx-2'>M (1)</button>
                            <button className='btn btn-outline-dark mx-2'>XL (1)</button>
                        </div>
                        <div className="first-list">
                            <h4><StaticLang en="Brands" az="Brend Markalar"/></h4>
                            <hr />
                            <ul>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="">Cartify (2)</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="">EcomZone (3)</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="">EcoShop (2)</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="">MegaMart (1)</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="">QuickCart (1)</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="">SmartShop (3)</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="">StyleHub (1)</label>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <label htmlFor="">TrendMart (2)</label>
                                </li>
                            </ul>
                        </div>
                        <div className="second-list">
                            <h4><StaticLang en="Price Filter" az="Vurğulamalar"/></h4>
                            <hr />
                            <ul>
                                <li><StaticLang en="All" az="Hamısı"/></li>
                                <li>$0 - $20</li>
                                <li>$20 - $40</li>
                                <li>$40 - $60</li>
                                <li>$60+</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-product-part">
                        {filteredData.length === 0 ? <Products /> : <div className='container'>
                            <div className="row g-4">
                                {filteredData.map((item, index) => (
                                    <SingleProduct key={index} productInfo={item} />
                                ))}
                            </div>
                        </div>}

                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopPage