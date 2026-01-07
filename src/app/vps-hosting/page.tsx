"use client";

import React, { useEffect, useState } from "react";

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
      description?: string;
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
          fetch("https://neapi.hanaplatform.com/api/dynamic/getdata/public", {
            method: "POST",
            headers: {
              "x-api-key": "dhtr348768uhjkh544fg",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              appName: "app6121010948209",
              moduleName: "hostingplan",
              query: {},
              projection: {},
              limit: 0,
              skip: 0,
              order: "descending",
              sortBy: "_id",
            }),
          }),
          fetch("https://neapi.hanaplatform.com/api/dynamic/getdata/public", {
            method: "POST",
            headers: {
              "x-api-key": "dhtr348768uhjkh544fg",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              appName: "app6121010948209",
              moduleName: "hostingfeature",
              query: {},
              projection: {},
              limit: 0,
              skip: 0,
              order: "descending",
              sortBy: "_id",
            }),
          }),
        ]);

        const plansData = await plansResponse.json();
        const featuresData = await featuresResponse.json();

        if (plansData.success) {
          const vpsPlans = plansData.data
            .filter((plan: HostingPlan) =>
              plan.sectionData.hostingplan.type.some(
                (type) => type.toLowerCase().trim() === "vps"
              )
            )
            .sort(
              (a: HostingPlan, b: HostingPlan) =>
                parseInt(a.sectionData.hostingplan.order) -
                parseInt(b.sectionData.hostingplan.order)
            );
          setPlans(vpsPlans);
        }

        if (featuresData.success) {
          const vpsFeatures = featuresData.data.filter(
            (feature: HostingFeature) =>
              feature.sectionData.hostingfeature.tags.some((tag) =>
                tag.toLowerCase().includes("vps")
              )
          );
          setFeatures(vpsFeatures);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
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
      <section className="pricing-section -mt-[100px] pb-70">
        <div className="container">
          <div className="section-title section-title-two">
            <h2>VPS Hosting Plans</h2>
            <p>
             Choose the perfect VPS hosting plan for your needs
            </p>
          </div>

          {plans.length > 0 ? (
            <div className="row">
              {plans.map((plan) => (
                <div key={plan._id} className="col-sm-12 col-md-6 col-lg-3">
                  <div className="pricing-item pricing-item-two">
                    <div className="pricing-secondary-header">
                      <div className="pricing-header-title">
                        <h3 className="pricing-header-title-text">
                          {plan.sectionData.hostingplan.planname}
                        </h3>
                        <p>{plan.sectionData.hostingplan.description}</p>
                      </div>
                      <div className="pricing-item-amount">
                        <p>Starting at</p>
                        <h4 className="pricing-item-amount-number">
                          {(() => {
                            const monthlyAttr =
                              plan.sectionData.hostingplan.plantable.find(
                                (attr) =>
                                  attr.attribute.toLowerCase() === "monthly"
                              );
                            return monthlyAttr ? (
                              <>
                                <small>{monthlyAttr.unit}</small>
                                {monthlyAttr.value}
                                <span>/Month</span>
                              </>
                            ) : (
                              <>
                                <small>₹</small>0<span>/Month</span>
                              </>
                            );
                          })()}
                        </h4>
                      </div>
                    </div>

                    <div className="pricing-item-body">
                      {plan.sectionData.hostingplan.plantable.length > 0 ? (
                        <ul className="pricing-body-list pricing-body-list-two">
                          {plan.sectionData.hostingplan.plantable
                            .filter(
                              (attr) =>
                                attr.attribute.toLowerCase() !== "monthly"
                            )
                            .map((attr, index) => (
                              <li key={index}>
                                {attr.value} {attr.unit} {attr.attribute}
                              </li>
                            ))}
                        </ul>
                      ) : (
                        <p className="text-center">No features available</p>
                      )}

                      <a href="/cart" className="btn btn-gradient">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-5">
              <h5>No VPS Hosting Plans Available</h5>
            </div>
          )}
        </div>
      </section>

      {features.length > 0 ? (
        <section className="feature-section bg-off-white-gradient pt-40 pb-70">
          <div className="container">
            <div className="section-title section-title-two">
              <small>Features</small>
              <h2>VPS Hosting Features</h2>
              <p>
                Discover the powerful features included with your VPS hosting
              </p>
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
                          <div
                            style={{
                              width: 60,
                              height: 60,
                              backgroundColor: "#f0f0f0",
                            }}
                          ></div>
                        )}
                      </div>

                      <div className="feature-item-content">
                        <h3>{feature.sectionData.hostingfeature.title}</h3>
                        <p>{feature.sectionData.hostingfeature.description}</p>
                        {feature.sectionData.hostingfeature.tags.length > 0 && (
                          <div className="feature-tags">
                            {feature.sectionData.hostingfeature.tags.map(
                              (tag, index) => (
                                <span
                                  key={index}
                                  className="badge badge-secondary me-1"
                                >
                                  {tag}
                                </span>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="feature-section bg-off-white-gradient pt-40 pb-70">
          <div className="container">
            <div className="section-title section-title-two">
              <small>Features</small>
              <h2>VPS Hosting Features</h2>
              <p>
                Discover the powerful features included with your VPS hosting
              </p>
            </div>
            <div className="text-center">
              <h5>No VPS Hosting Features Available</h5>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Page;
