"use client";

import React, { useState } from "react";
import Link from "next/link";

interface CartItem {
  id: number;
  name: string;
  type: string;
  price: number;
  quantity: number;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "E3-1240V5 v1.3GHz (4 Cores + NG)", type: "Dedicated Hosting", price: 123, quantity: 1 },
    { id: 2, name: "Regular", type: "Shared Hosting", price: 40, quantity: 2 },
    { id: 3, name: "Starter", type: "VPS Hosting", price: 13.99, quantity: 1 },
    { id: 4, name: ".Mobi", type: "Transfer", price: 5.55, quantity: 1 },
    { id: 5, name: "E3-1680V5 v1.4GHz (2 Cores + GM)", type: "Dedicated Hosting", price: 245, quantity: 1 }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };
  return (
    <>
      {/* cart-section */}
      <div className="cart-section pb-70 -mt-[100px]">
        <div className="container">
          <div className="cart-table">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      {item.name} <strong>{item.type}</strong>
                    </td>
                    <td>${item.price}</td>
                    <td>
                      <div className="cart-quantity">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                        <input 
                          type="text" 
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                        />
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <div className="cart-action">
                        <button 
                          className="cart-action-button cart-action-delete"
                          onClick={() => removeItem(item.id)}
                        >
                          <i className="flaticon-trash" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="row justify-content-between">
            <div className="col-sm-12 col-md-4 col-lg-3">
              <div className="cart-update cart-info-item">
                <Link href="/hosting" className="btn btn-blue">
                  Update Cart
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-7 col-lg-5">
              <div className="cart-coupon cart-info-item">
                <form>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Coupon Code"
                    />
                    <button className="btn btn-gradient">Apply Coupon</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-6 pb-30">
              <div className="faq-accordion">
                {/* item goes here */}
                <div className="faq-accordion-item faq-accordion-item-active">
                  {" "}
                  {/* Use "faq-accordion-item-active" this class for toggle accordion */}
                  <div className="faq-accordion-header">
                    <h3 className="faq-accordion-title">
                      What Is Dedicated Hosting?
                    </h3>
                  </div>
                  <div className="faq-accordion-body">
                    <div className="faq-accordion-body-inner">
                      <p className="faq-accordion-para">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniaquis nostrud
                        ullamco nisi ut aliquip. Consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniaquis nostrud ullamco
                        nisi ut aliquip.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="faq-accordion-item">
                  <div className="faq-accordion-header">
                    <h3 className="faq-accordion-title">
                      Does the price grow up with sharing?
                    </h3>
                    <div className="faq-accordion-header-overlay" />
                  </div>
                  <div className="faq-accordion-body">
                    <div className="faq-accordion-body-inner">
                      <p className="faq-accordion-para">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniaquis nostrud
                        ullamco nisi ut aliquip. Consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniaquis nostrud ullamco
                        nisi ut aliquip.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="faq-accordion-item">
                  <div className="faq-accordion-header">
                    <h3 className="faq-accordion-title">
                      What access do I have on a free trial?
                    </h3>
                    <div className="faq-accordion-header-overlay" />
                  </div>
                  <div className="faq-accordion-body">
                    <div className="faq-accordion-body-inner">
                      <p className="faq-accordion-para">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniaquis nostrud
                        ullamco nisi ut aliquip. Consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniaquis nostrud ullamco
                        nisi ut aliquip.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 pb-30">
              <div className="cart-details default-box-shadow">
                <h3 className="cart-details-title">Cart Totals</h3>
                <div className="cart-total-box">
                  {cartItems.map((item) => (
                    <div key={item.id} className="cart-total-item">
                      <h4>{item.name}</h4>
                      <p>${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                  <div className="cart-total-item">
                    <h4>Total</h4>
                    <p>${getTotal()}</p>
                  </div>
                </div>
                <Link href="/checkout" className="btn btn-gradient">
                  Make Payment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* .end cart-section */}
    </>
  );
};

export default CartPage;
