"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

interface PlanAttribute {
  attribute: string;
  value: string;
  unit: string;
  order: string;
}

interface Plan {
  _id: string;
  sectionData: {
    emailplan: {
      planname: string;
      description: string;
      type: string[];
      plantable: PlanAttribute[];
    };
  };
}

interface Feature {
  _id: string;
  sectionData: {
    emailfeature: {
      image: string;
      title: string;
      description: string;
      tags: string[];
    };
  };
}

const EMAIL_CATEGORIES = [
  {
    value: "webmail",
    label: "Webmail Hosting",
    types: ["Webmail"],
  },
  {
    value: "google-workspace",
    label: "Google Workspace",
    types: ["Google-Workspace"],
  },
  {
    value: "microsoft-office-365",
    label: "Microsoft Office 365",
    types: ["Microsoft-Office-365"],
  },
  {
    value: "zoho",
    label: "Zoho Email",
    types: ["Zoho"],
  },
];

const EmailPage = () => {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");
  const [selectedCategory, setSelectedCategory] = useState("webmail");
  const [selectedTypes, setSelectedTypes] = useState<string[]>(["Webmail"]);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      const category = EMAIL_CATEGORIES.find(
        (cat) => cat.value === categoryParam
      );
      if (category) {
        setSelectedCategory(categoryParam);
        setSelectedTypes(category.types);
      }
    }
  }, [searchParams]);

  const handleCategoryChange = (categoryValue: string) => {
    const category = EMAIL_CATEGORIES.find(
      (cat) => cat.value === categoryValue
    );
    if (category) {
      setSelectedCategory(categoryValue);
      setSelectedTypes(category.types);
    }
  };

  const handleTypeChange = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const getAllAvailableTypes = () => {
    const allTypes = new Set<string>();
    plans.forEach((plan) => {
      plan.sectionData.emailplan.type.forEach((type) => {
        allTypes.add(type);
      });
    });
    return Array.from(allTypes).sort();
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://neapi.hanaplatform.com/api/dynamic/getdata/public",
        {
          method: "POST",
          headers: {
            "x-api-key": "dhtr348768uhjkh544fg",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            appName: "app6121010948209",
            moduleName: "emailplan",
            query: {},
            projection: {},
            limit: 0,
            skip: 0,
            order: "descending",
            sortBy: "_id",
          }),
        }
      );

      const data = await response.json();
      setPlans(data.data || []);
      setFeatures([]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPlans = plans.filter((plan) =>
    selectedTypes.every((type) =>
      plan.sectionData.emailplan.type.includes(type)
    )
  );

  const filteredFeatures = features.filter((feature) =>
    selectedTypes.every((type) =>
      feature.sectionData.emailfeature.tags.includes(type)
    )
  );

  if (loading) {
    return (
      <>
        <section className="pricing-section -mt-[100px] pb-70">
          <div className="container">
            <div className="section-title section-title-two">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-80 mx-auto animate-pulse"></div>
            </div>
            <div className="row">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="col-sm-12 col-md-6 col-lg-3">
                  <div className="pricing-item pricing-item-two">
                    <div className="pricing-secondary-header">
                      <div className="h-6 bg-gray-200 rounded w-32 mb-2 animate-pulse"></div>
                      <div className="h-10 bg-gray-200 rounded w-24 animate-pulse"></div>
                    </div>
                    <div className="pricing-item-body">
                      <ul className="pricing-body-list pricing-body-list-two">
                        {[...Array(5)].map((_, j) => (
                          <li key={j}>
                            <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                          </li>
                        ))}
                      </ul>
                      <div className="h-10 bg-gray-200 rounded w-full mt-4 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="pricing-section -mt-[100px] pb-70">
        <div className="container">
          <div className="section-title section-title-two">
            <h2>
              {EMAIL_CATEGORIES.find((cat) => cat.value === selectedCategory)
                ?.label || "Email"}{" "}
              Plans
            </h2>
            <p>
              Choose the perfect email hosting plan for your needs with reliable
              email services and professional features.
            </p>
          </div>

          {filteredPlans.length > 0 ? (
            <div className="row">
              {filteredPlans.map((plan) => (
                <div key={plan._id} className="col-sm-12 col-md-6 col-lg-3">
                  <div className="pricing-item pricing-item-two">
                    <div className="pricing-secondary-header">
                      <div className="pricing-header-title">
                        <h3 className="pricing-header-title-text">
                          {plan.sectionData.emailplan.planname}
                        </h3>
                        <p>{plan.sectionData.emailplan.description}</p>
                      </div>
                      <div className="pricing-item-amount">
                        <p>Starting at</p>
                        <h4 className="pricing-item-amount-number">
                          {(() => {
                            const monthlyAttr =
                              plan.sectionData.emailplan.plantable.find(
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
                      {plan.sectionData.emailplan.plantable.length > 0 ? (
                        <ul className="pricing-body-list pricing-body-list-two">
                          {plan.sectionData.emailplan.plantable
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
              <p>
                No data available for{" "}
                {EMAIL_CATEGORIES.find(
                  (cat) => cat.value === selectedCategory
                )?.label || "selected category"}
              </p>
            </div>
          )}
        </div>
      </section>

      {filteredFeatures.length > 0 ? (
        <section className="feature-section bg-off-white-gradient pt-40 pb-70">
          <div className="container">
            <div className="section-title section-title-two">
              <small>Features</small>
              <h2>Email Features</h2>
              <p>
                Discover the powerful features included with your email plan
              </p>
            </div>

            <div className="row">
              {filteredFeatures.map((feature) => (
                <div key={feature._id} className="col-sm-12 col-lg-6">
                  <div className="feature-item fluid-height">
                    <div className="feature-item-inner full-height bg-white">
                      <div className="feature-item-thumb feature-item-thumb-round bg-off-hard-gradient">
                        {feature.sectionData.emailfeature.image ? (
                          <img
                            src={feature.sectionData.emailfeature.image}
                            alt={feature.sectionData.emailfeature.title}
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
                        <h3>{feature.sectionData.emailfeature.title}</h3>
                        <p>{feature.sectionData.emailfeature.description}</p>
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
              <h2>Email Features</h2>
              <p>
                Discover the powerful features included with your email plan
              </p>
            </div>
            <div className="text-center">
              <h5>No email features available for selected types</h5>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default EmailPage;