"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

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

const DynamicHostingPage: React.FC = () => {
  const params = useParams();
  const [plans, setPlans] = useState<HostingPlan[]>([]);
  const [features, setFeatures] = useState<HostingFeature[]>([]);
  const [loading, setLoading] = useState(true);

  const hostingType = params.type as string;
  const getTagFromType = (type: string) => {
    const typeMap: { [key: string]: string } = {
      "cloud-hosting": "H Cloud",
      "linux-hosting": "Linux",
      "vps-hosting": "VPS",
      "shared-hosting": "Shared",
      "dedicated-hosting": "Dedicated",
      "wordpress-hosting": "WordPress",
    };
    return typeMap[type] || type.replace("-hosting", "");
  };

  const tagForFeatures = getTagFromType(hostingType);
  const formattedType = hostingType?.replace("-hosting", "").trim();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [plansResponse, featuresResponse] = await Promise.all([
          fetch("/api/hosting-plans"),
          fetch(
            `/api/hosting-features?tag=${encodeURIComponent(tagForFeatures)}`
          ),
        ]);

        const plansData = await plansResponse.json();
        const featuresData = await featuresResponse.json();

        if (plansData.success) {
          const filteredPlans = plansData.data.filter((plan: HostingPlan) =>
            plan.sectionData.hostingplan.type.some((type) => {
              const planType = type.toLowerCase().trim();
              const searchType = formattedType?.toLowerCase();
              // Handle special cases
              if (searchType === "vps" && planType === "vps") return true;
              if (searchType === "cloud" && planType === "cloud") return true;
              if (searchType === "linux" && planType === "linux") return true;
              if (searchType === "shared" && planType === "shared") return true;
              if (searchType === "dedicated" && planType === "dedicated")
                return true;
              if (searchType === "wordpress" && planType === "wordpress")
                return true;
              return planType === searchType;
            })
          );
          setPlans(filteredPlans);
        }

        if (featuresData.success) {
          setFeatures(featuresData.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (hostingType) {
      fetchData();
    }
  }, [hostingType, tagForFeatures]);

  if (loading) {
    return <div className="container py-5">Loading...</div>;
  }

  return (
    <>
      <section className="pricing-section -mt-[90px] pb-70">
        <div className="container">
          <div className="section-title section-title-two">
            <h2>
              {formattedType?.charAt(0).toUpperCase() + formattedType?.slice(1)}{" "}
              Hosting Plans
            </h2>
            <p>
              Choose the perfect {formattedType} hosting plan for your needs
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
                      {plan.sectionData.hostingplan.plantable.map(
                        (attr, index) => (
                          <li key={index}>
                            {attr.attribute}{" "}
                            <span>
                              ({attr.value} {attr.unit})
                            </span>
                          </li>
                        )
                      )}
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

      {features.length > 0 && (
        <section className="feature-section bg-off-white-gradient pt-40 pb-70">
          <div className="container">
            <div className="section-title section-title-two">
              <small>Features</small>
              <h2>
                {formattedType?.charAt(0).toUpperCase() +
                  formattedType?.slice(1)}{" "}
                Features
              </h2>
              <p>
                Discover the powerful features included with your{" "}
                {formattedType} hosting
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
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default DynamicHostingPage;
