import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart'
import Swal from 'sweetalert2';
import StaticLang from '../utils/StaticLang';

const Cart = () => {

    const { items, updateItemQuantity, removeItem, isEmpty, cartTotal, emptyCart } = useCart();
    return (
        <>
            <div className="first-shop">
                <h1><StaticLang az="Səbətim" en="My Cart" /></h1>
            </div>
            {isEmpty ? <div className="empty-cart">
                <h1 className='empty'><StaticLang en="Your cart is currently empty" az="Səbətiniz hazırda boşdur" />!</h1>
                <Link to='/shop' className='empty-btn'><StaticLang en="Return to shop" az="Mağazaya qayıdın" /></Link>
            </div> : <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"><StaticLang az="Nömrə" en="No." /></th>
                            <th scope="col"><StaticLang az="Şəkil" en="Photo" /></th>
                            <th scope="col"><StaticLang az="Məhsulun Adı" en="Product Name" /></th>
                            <th scope="col"><StaticLang az="Qiymət" en="Price" /></th>
                            <th scope="col"><StaticLang az="Miqdar" en="Quantity" /></th>
                            <th scope="col"><StaticLang az="Ara Cəmi" en="Subtotal" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <img src={item.image} width={80} alt="" />
                                </td>
                                <td><StaticLang en={item.nameEn} az={item.nameAz} /></td>
                                <td>${item.price}</td>
                                <td>
                                    <button onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)} className='counter-btn'>-</button>
                                    <span className='mx-2'>{item.quantity}</span>
                                    <button onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)} className='counter-btn'>+</button>
                                </td>
                                <td>${item.price * item.quantity}</td>
                                <td>
                                    <button onClick={() => {
                                        removeItem(item.id)
                                    }} className='delete-btn'>X</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h3 className='total-price'><StaticLang az="Ümumi Məbləğ" en="Total Price" />: <span>${cartTotal}</span> </h3>
                <button
                    className="clear-all-btn"
                    onClick={() => {
                        Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!",
                        }).then((result) => {
                            if (result.isConfirmed) {
                                emptyCart();
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success",
                                });
                            }
                        });
                    }}
                ><StaticLang az="Hamısını Sil" en="Clear All" /></button>
            </div>
            }






        </>
    )
}

export default Cart