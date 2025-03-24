import React from 'react'
const CartWidget = ({ mobile }) => {
    const classNames = mobile
    ? 'd-lg-none mt-2 ms-auto'
    : 'nav-item ms-3 d-none d-lg-block';

    return (
        <div className={classNames}>
            <a className="nav-link" href="#">
            <img src="/src/img/cart.png" alt="Carrito" height="24" />
            </a>
        </div>
    );
};

export default CartWidget