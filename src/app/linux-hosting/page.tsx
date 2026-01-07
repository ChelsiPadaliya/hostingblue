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

const Page: React.FC = () => {
  const [plans, setPlans] = useState<HostingPlan[]>([]);
  const [features, setFeatures] = useState<HostingFeature[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [plansResponse, featuresResponse] = await Promise.all([
          fetch('/api/hosting-plans'),
          fetch('https://neapi.hanaplatform.com/api/dynamic/getdata/public', {
            method: 'POST',
            headers: {
              'x-api-key': 'dhtr348768uhjkh544fg',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "appName": "app6121010948209",
              "moduleName": "hostingfeature",
              "query": {},
              "projection": {},
              "limit": 0,
              "skip": 0,
              "order": "descending",
              "sortBy": "_id"
            })
          })
        ]);
        
        const plansData = await plansResponse.json();
        const featuresData = await featuresResponse.json();
        
        if (plansData.success) {
          const filteredPlans = plansData.data.filter((plan: HostingPlan) =>
            plan.sectionData.hostingplan.type.some(type => 
              type.toLowerCase().includes('linux')
            )
          );
          setPlans(filteredPlans);
        }
        
        if (featuresData.success) {
          const filteredFeatures = featuresData.data.filter((feature: HostingFeature) =>
            feature.sectionData.hostingfeature.tags.some(tag => 
              tag.toLowerCase().includes('linux')
            )
          );
          setFeatures(filteredFeatures);
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
      <section className="pricing-section -mt-[90px] pb-70">
        <div className="container">
          <div className="section-title section-title-two">
            <h2>Linux Hosting Plans</h2>
            <p>
              Choose the perfect Linux hosting plan for your needs
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

                    <a href="cart.html" className="btn btn-gradient">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section py-5">
        <div className="container">
          <div className="section-title section-title-two">
            <h2>Linux Features</h2>
            <p>Discover the powerful features included with our Linux hosting</p>
          </div>
          {features.length > 0 ? (
            <div className="row">
              {features.map((feature) => (
                <div key={feature._id} className="col-md-4 mb-4">
                  <div className="feature-item">
                    {feature.sectionData.hostingfeature.image && (
                      <img src={feature.sectionData.hostingfeature.image} alt={feature.sectionData.hostingfeature.title} className="img-fluid mb-3" />
                    )}
                    <h4>{feature.sectionData.hostingfeature.title}</h4>
                    <p>{feature.sectionData.hostingfeature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-5">
              <h3>Features Not Available</h3>
              <p>Linux hosting features are currently not available. Please check back later.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Page;