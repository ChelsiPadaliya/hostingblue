import Image from "next/image";

const Choose = () => {
  const section = {
    smallTitle: "Why best",
    mainTitle: "Why choose us",
    description:
      "Hostingblue offers affordable, reliable, and secure web hosting solutions with high uptime, strong performance, expert support, and scalable plans.",
  };

  const items = [
    {
      id: 1,
      title: "Dedicated support",
      text: "Our expert support team provides fast, reliable, and professional assistance for technical issues, account management, and service-related queries.",
      image: "/assets/images/choose-2-1.png",
      alt: "Dedicated support",
      cardClass: "box-card-primary",
    },
    {
      id: 2,
      title: "Data security",
      text: "We use advanced security measures to protect your data, ensuring safety, reliability, and continuous protection against unauthorized access and threats.",
      image: "/assets/images/choose-2-2.png",
      alt: "Data security",
      cardClass: "box-card-secondary",
    },
    {
      id: 3,
      title: "Data migration",
      text: "We provide secure and seamless data migration services, ensuring safe transfer of websites, files, emails, and databases with minimal downtime.",
      image: "/assets/images/choose-2-3.png",
      alt: "Data migration",
      cardClass: "box-card-warning",
    },
  ];

  return (
    <section className="choose-section pb-50">
      <div className="container">
        {/* Section Title */}
        <div className="section-title section-title-two text-center">
          <small>{section.smallTitle}</small>
          <h2>{section.mainTitle}</h2>
          <p>{section.description}</p>
        </div>

        {/* Cards */}
        <div className="row justify-content-center">
          {items.map((item) => (
            <div key={item.id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <div className="box-card box-card-2 fluid-height h-100">
                <div
                  className={`box-card-inner ${item.cardClass} full-height h-100`}
                >
                  <div className="box-card-content text-center d-flex flex-column justify-content-center h-100">
                    <div className="box-card-thumb mb-4">
                      <div className="relative w-60 h-60 mx-auto">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          unoptimized
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    </div>

                    <div className="box-card-details">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;
