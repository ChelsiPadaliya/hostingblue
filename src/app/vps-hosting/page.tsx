"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Features from "../home/features";

interface PlanAttribute {
  attribute: string;
  value: string;
  unit: string;
  order: string;
}

interface HostingPlan {
  _id: string;
  sectionData: {
    hostingplan: {
      planname: string;
      type: string[];
      plantable: PlanAttribute[];
      order: string;
    };
  };
}

const Page = () => {
  const [plans, setPlans] = useState<HostingPlan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch('/api/hosting-plans');
        const data = await response.json();
        
        if (data.success) {
          const vpsPlans = data.data.filter((plan: HostingPlan) =>
            plan.sectionData.hostingplan.type.some(type => 
              type.toLowerCase().trim() === 'vps'
            )
          );
          setPlans(vpsPlans);
        }
      } catch (error) {
        console.error('Error fetching plans:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  if (loading) {
    return <div className="container py-5">Loading...</div>;
  }

  return (
    <>
      <section className="pricing-section pb-70">
        <div className="container">
          <div className="section-title section-title-two">
            <h2>VPS Hosting Plans</h2>
            <p>
              Choose the perfect VPS hosting plan for your needs
            </p>
          </div>

          <div className="row">
            {plans.map((plan) => (
              <div key={plan._id} className="col-sm-12 col-md-6 col-lg-3">
                <div className="pricing-item pricing-item-two">
                  <div className="pricing-secondary-header">
                    <div className="pricing-header-title">
                      <h3 className="pricing-header-title-text">
                        {plan.sectionData.hostingplan.planname}
                      </h3>
                      <p>Perfect for your hosting needs</p>
                    </div>
                    <div className="pricing-item-amount">
                      <p>Starting at</p>
                      <h4 className="pricing-item-amount-number">
                        <small>$</small>9.99<span>/Month</span>
                      </h4>
                    </div>
                  </div>

                  <div className="pricing-item-body">
                    <ul className="pricing-body-list pricing-body-list-two">
                      {plan.sectionData.hostingplan.plantable.map((attr, index) => (
                        <li key={index}>
                          {attr.attribute} <span>({attr.value} {attr.unit})</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/cart" className="btn btn-gradient">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Features/>
    </>
  )
};

export default Page;
