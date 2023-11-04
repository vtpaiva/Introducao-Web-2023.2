import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Offer from './Offer.jsx'
import './Cart.css'

import React from 'react';

function CartOffer(props) {
    return (
        <div className='offerContainer'>
            <img src={props.image} alt="" />
            <div className='offerDesc'>
                <span>R$ {props.price}</span>
                <div className='quantityButton'>
                    <button>-</button>
                    <div className='quantity'>{props.quantity}</div>
                    <button>+</button>
                </div>
            </div>
        </div>
    )
}

function Cart(props) {
    return (
        <>
            <Header/>
                <div id='cartContainer'>
                    <div id='cartLeft'>
                        <CartOffer price = '4' image = 'rj.jpg' quantity = '7'/>
                        <CartOffer price = '4' image = 'pr.jpg' quantity = '7'/>
                        <CartOffer price = '4' image = 'pr.jpg' quantity = '7'/>
                    </div>
                    <div id='cartRight'>
                        <div id='cartHotel'>
                            <span>Gostaria de encontrar hotéis para sua estadia?</span>
                            <button>Encontrar hotéis</button>
                        </div>
                        <div id='cartFinish'>
                            <span>Total: R$ 4</span>
                            <button>Finalizar pagamento</button>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    )
}

export {Cart, CartOffer}