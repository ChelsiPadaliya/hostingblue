import Image from "next/image";

const Choose = () => {
  const section = {
    smallTitle: "Why best",
    mainTitle: "Why choose us",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis",
  };

  const items = [
    {
      id: 1,
      title: "Dedicated support",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elt ttotam rem aperiam dolore magnam luptatem.",
      image: "/assets/images/choose-2-1.png",
      alt: "Dedicated support",
      cardClass: "box-card-primary",
    },
    {
      id: 2,
      title: "Data security",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elt ttotam rem aperiam dolore magnam luptatem.",
      image: "/assets/images/choose-2-2.png",
      alt: "Data security",
      cardClass: "box-card-secondary",
    },
    {
      id: 3,
      title: "Data migration",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elt ttotam rem aperiam dolore magnam luptatem.",
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
