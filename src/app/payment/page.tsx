import React from "react";

const page = () => {
  return (
    <>
      {/* popular-payment-list-section */}
      <div className="popular-payment-list-section pt-100 pb-70 -mt-[200px]">
        <div className="container">
          <div className="section-title section-title-two">
            <h2>Payment Option</h2>
          </div>
          <div className="digital-wallet-content">
            <div className="row">
              <div className="col-12 col-md-6 pb-30">
                <div className="wallet-box">
                  <hr />
                  <div className="sub-section-title">
                    <h5 className="text-left">DESI CORPORATION</h5>
                  </div>
                  <div className="wallet-content">
                    <p>ACCOUNT NO : 914020013038476 (Current Account)</p>
                    <p> IFS CODE :UTIB 0001339</p>
                    <p>Axis Bank Keshod(GJ)</p>
                    <p> Paypal Id : Conscor@gmail.com</p>
                  </div>
                </div>
              </div>    
              <div className="col-12 col-md-6 pb-30">
                <div className="wallet-box">
                  <hr />
                  <div className="sub-section-title">
                    <h5 className="text-left">RAIDLAYER WEBHOST PRIVATE LIMITED</h5>
                  </div>
                  <div className="wallet-content">
                    <p>ACCOUNT NO : 034505500445 (Current Account)</p>
                    <p> IFS CODE : ICIC0000586</p>
                    <p>ICICI Bank Prahalad Nagar, Ahmedabad(GJ)</p>
                    <p> GSTIN : 24AAHCR1394Q1ZS</p>
                  </div>
                </div>
              </div>
              <div className="col-12 pb-30">
                <div className="wallet-box">
                  <hr />
                  <div className="sub-section-title">
                    <h5 className="text-left">JITENDRA R. DADHANIYA</h5>
                  </div>
                  <div className="wallet-content">
                    <p>ACCOUNT NO : 31095651587 (Savings Account)</p>
                    <p>Branch Name : University Road,Ahmedabad</p>
                    <p>IFSC CODE : SBIN 0002651(Branch Code:02651)</p>
                    <p>PAN No : ABUPD6101E</p>
                    <p>State bank of india</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* .end popular-payment-list-section */}
    </>
  );
};

export default page;
