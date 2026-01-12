"use client";

import React, { useState } from "react";

interface OrderItem {
  id: number;
  name: string;
  type: string;
  price: number;
}

interface BillingData {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  country: string;
  company: string;
  address: string;
  city: string;
  state: string;
  postcode: string;
  orderNotes: string;
}

interface PaymentData {
  method: string;
  cardName: string;
  cardNumber: string;
  expireDate: string;
  cvn: string;
}

const CheckoutPage = () => {
  const [billingData, setBillingData] = useState<BillingData>({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    country: "",
    company: "",
    address: "",
    city: "",
    state: "",
    postcode: "",
    orderNotes: ""
  });

  const [paymentData, setPaymentData] = useState<PaymentData>({
    method: "",
    cardName: "",
    cardNumber: "",
    expireDate: "",
    cvn: ""
  });

  const [alertsEnabled, setAlertsEnabled] = useState(false);

  const orderItems: OrderItem[] = [
    { id: 1, name: "E3-1240V5 v1.3GHz (4 Cores + NG)", type: "Dedicated Hosting", price: 123 },
    { id: 2, name: "Regular", type: "Shared Hosting", price: 80 },
    { id: 3, name: "Starter", type: "VPS Hosting", price: 13.99 },
    { id: 4, name: ".Mobi", type: "Transfer", price: 5.55 },
    { id: 5, name: "E3-1680V5 v1.4GHz (2 Cores + GM)", type: "Dedicated Hosting", price: 245 }
  ];

  const total = orderItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  const handleBillingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Billing Data:", billingData);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Payment Data:", paymentData);
    alert("Payment processed successfully!");
  };
  return (
    <>
      {/* checkout-section */}
      <div className="checkout-section pb-70 -mt-[100px]">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-6 pb-30">
              <div className="checkout-item">
                <div className="sub-section-title">
                  <h3>Billing Details</h3>
                </div>
                <div className="checkout-form">
                  <form onSubmit={handleBillingSubmit}>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group mb-20">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="flaticon-envelope" />
                              </span>
                            </div>
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              required
                              placeholder="Email Address*"
                              value={billingData.email}
                              onChange={(e) => setBillingData({...billingData, email: e.target.value})}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group mb-20">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="flaticon-phone" />
                              </span>
                            </div>
                            <input
                              type="tel"
                              name="phone"
                              className="form-control"
                              required
                              placeholder="Phone Number*"
                              value={billingData.phone}
                              onChange={(e) => setBillingData({...billingData, phone: e.target.value})}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-check mb-20">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check1"
                            checked={alertsEnabled}
                            onChange={(e) => setAlertsEnabled(e.target.checked)}
                          />
                          <label className="form-check-label" htmlFor="check1">
                            Get alert of product updates &amp; offers
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-20">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="flaticon-user" />
                              </span>
                            </div>
                            <input
                              type="text"
                              name="firstName"
                              className="form-control"
                              required
                              placeholder="First Name*"
                              value={billingData.firstName}
                              onChange={(e) => setBillingData({...billingData, firstName: e.target.value})}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-20">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="flaticon-user" />
                              </span>
                            </div>
                            <input
                              type="text"
                              name="lastName"
                              className="form-control"
                              required
                              placeholder="Last Name*"
                              value={billingData.lastName}
                              onChange={(e) => setBillingData({...billingData, lastName: e.target.value})}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group mb-20">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="flaticon-location" />
                              </span>
                            </div>
                            <select 
                              name="country" 
                              className="form-control"
                              value={billingData.country}
                              onChange={(e) => setBillingData({...billingData, country: e.target.value})}
                            >
                              <option value="">Your Country*</option>
                              <option value="USA">USA</option>
                              <option value="UK">UK</option>
                              <option value="Germany">Germany</option>
                              <option value="India">India</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group mb-20">
                          <div className="input-group">
                            <input
                              type="text"
                              name="company"
                              className="form-control"
                              placeholder="Company Name"
                              value={billingData.company}
                              onChange={(e) => setBillingData({...billingData, company: e.target.value})}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group mb-20">
                          <div className="input-group">
                            <input
                              type="text"
                              name="address"
                              className="form-control"
                              required
                              placeholder="Address*"
                              value={billingData.address}
                              onChange={(e) => setBillingData({...billingData, address: e.target.value})}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group mb-20">
                          <div className="input-group">
                            <input
                              type="text"
                              name="city"
                              className="form-control"
                              required
                              placeholder="Town/City*"
                              value={billingData.city}
                              onChange={(e) => setBillingData({...billingData, city: e.target.value})}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-20">
                          <div className="input-group">
                            <input
                              type="text"
                              name="state"
                              className="form-control"
                              required
                              placeholder="State / Country*"
                              value={billingData.state}
                              onChange={(e) => setBillingData({...billingData, state: e.target.value})}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-20">
                          <div className="input-group">
                            <input
                              type="text"
                              name="postcode"
                              className="form-control"
                              required
                              placeholder="Postcode / Zip*"
                              value={billingData.postcode}
                              onChange={(e) => setBillingData({...billingData, postcode: e.target.value})}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group mb-20">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="flaticon-envelope" />
                              </span>
                            </div>
                            <textarea
                              name="orderNotes"
                              className="form-control"
                              rows={5}
                              placeholder="Order Notes*"
                              value={billingData.orderNotes}
                              onChange={(e) => setBillingData({...billingData, orderNotes: e.target.value})}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 pb-30">
              <div className="checkout-item">
                <div className="sub-section-title">
                  <h3>Your Orders</h3>
                </div>
                <div className="checkout-details mb-30">
                  <div className="cart-total-box">
                    <div className="cart-total-item">
                      <h4 className="checkout-total-title">Product Name</h4>
                      <p className="checkout-total-title">Total</p>
                    </div>
                    {orderItems.map((item) => (
                      <div key={item.id} className="cart-total-item">
                        <h4>
                          {item.name} <strong>{item.type}</strong>
                        </h4>
                        <p>${item.price}</p>
                      </div>
                    ))}
                    <div className="cart-total-item">
                      <h4 className="checkout-total-title">Total</h4>
                      <p className="checkout-total-title">${total}</p>
                    </div>
                  </div>
                </div>
                <div className="checkout-payment-area default-box-shadow">
                  <div className="sub-section-title mb-20">
                    <h3>What&apos;s Payment Method</h3>
                  </div>
                  <div className="checkout-form">
                    <form onSubmit={handlePaymentSubmit}>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-check mb-10">
                            <input
                              type="radio"
                              className="form-check-input"
                              id="check2"
                              name="paymentMethod"
                              value="bank"
                              onChange={(e) => setPaymentData({...paymentData, method: e.target.value})}
                            />
                            <label className="form-check-label" htmlFor="check2">
                              Bank Transfer
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="form-check mb-10">
                            <input
                              type="radio"
                              className="form-check-input"
                              id="check3"
                              name="paymentMethod"
                              value="paypal"
                              onChange={(e) => setPaymentData({...paymentData, method: e.target.value})}
                            />
                            <label className="form-check-label" htmlFor="check3">
                              Paypal
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="form-check mb-20">
                            <input
                              type="radio"
                              className="form-check-input"
                              id="check4"
                              name="paymentMethod"
                              value="visa"
                              onChange={(e) => setPaymentData({...paymentData, method: e.target.value})}
                            />
                            <label className="form-check-label" htmlFor="check4">
                              Visa
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <h3 className="cart-details-title mb-20">Card Details</h3>
                        </div>
                        <div className="col-sm-12">
                          <div className="form-group mb-20">
                            <div className="input-group">
                              <input
                                type="text"
                                name="cardName"
                                className="form-control"
                                required
                                placeholder="Name On The Card*"
                                value={paymentData.cardName}
                                onChange={(e) => setPaymentData({...paymentData, cardName: e.target.value})}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="form-group mb-20">
                            <div className="input-group">
                              <input
                                type="text"
                                name="cardNumber"
                                className="form-control"
                                required
                                placeholder="Card Number*"
                                value={paymentData.cardNumber}
                                onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                          <div className="form-group mb-20">
                            <div className="input-group">
                              <input
                                type="text"
                                name="expireDate"
                                className="form-control"
                                required
                                placeholder="Expire Date*"
                                value={paymentData.expireDate}
                                onChange={(e) => setPaymentData({...paymentData, expireDate: e.target.value})}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                          <div className="form-group mb-20">
                            <div className="input-group">
                              <input
                                type="text"
                                name="cvn"
                                className="form-control"
                                required
                                placeholder="CVN*"
                                value={paymentData.cvn}
                                onChange={(e) => setPaymentData({...paymentData, cvn: e.target.value})}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <button className="btn btn-gradient full-width" type="submit">
                            Make Payment
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* .end checkout-section */}
    </>
  );
};

export default CheckoutPage;
