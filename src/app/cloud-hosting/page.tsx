"use client";

import React, { useEffect, useState } from "react";
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

interface HostingFeature {
  _id: string;
  sectionData: {
    hostingfeature: {
      image: string;
      title: string;
      description: string;
      tags: string[];
    };
  };
}

const Page = () => {
  const [plans, setPlans] = useState<HostingPlan[]>([]);
  const [features, setFeatures] = useState<HostingFeature[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [plansResponse, featuresResponse] = await Promise.all([
          fetch('/api/hosting-plans'),
          fetch('/api/hosting-features?tag=H Cloud')
        ]);
        
        const plansData = await plansResponse.json();
        const featuresData = await featuresResponse.json();
        
        if (plansData.success) {
          const cloudPlans = plansData.data.filter((plan: HostingPlan) =>
            plan.sectionData.hostingplan.type.some(type => 
              type.toLowerCase().trim() === 'cloud'
            )
          );
          setPlans(cloudPlans);
        }
        
        if (featuresData.success) {
          setFeatures(featuresData.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="container py-5">Loading...</div>;
  }

  return (
    <>
      <section className="pricing-section pb-70">
        <div className="container">
          <div className="section-title section-title-two">
            <h2>Cloud Hosting Plans</h2>
            <p>
              Choose the perfect cloud hosting plan for your needs with scalable resources and reliable performance.
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
                      <p>Perfect for your cloud hosting needs</p>
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

                    <a href="/cart" className="btn btn-gradient">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {features.length > 0 && (
        <section className="feature-section bg-off-white-gradient pt-40 pb-70">
          <div className="container">
            <div className="section-title section-title-two">
              <small>Features</small>
              <h2>Cloud Hosting Features</h2>
              <p>Discover the powerful features included with your cloud hosting</p>
            </div>

            <div className="row">
              {features.map((feature) => (
                <div key={feature._id} className="col-sm-12 col-lg-6">
                  <div className="feature-item fluid-height">
                    <div className="feature-item-inner full-height bg-white">
                      <div className="feature-item-thumb feature-item-thumb-round bg-off-hard-gradient">
                        {feature.sectionData.hostingfeature.image ? (
                          <img
                            src={feature.sectionData.hostingfeature.image}
                            alt={feature.sectionData.hostingfeature.title}
                            width={60}
                            height={60}
                          />
                        ) : (
                          <div style={{ width: 60, height: 60, backgroundColor: '#f0f0f0' }}></div>
                        )}
                      </div>

                      <div className="feature-item-content">
                        <h3>{feature.sectionData.hostingfeature.title}</h3>
                        <p>{feature.sectionData.hostingfeature.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      <Features/>
    </>
  );
};

export default Page;
