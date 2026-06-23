import MainLayout from "../layouts/MainLayout";
import industriesBg from "../assets/industries-bg.jpg";

const industriesData = [
  {
    id: 1,
    title: "Pharmaceuticals",
    description:
      "The pharmaceutical industry requires highly customized supply chain solutions. Our temperature-controlled warehouse ensures seamless end-to-end service, prioritizing transparency and attention to detail for precise and reliable shipments.",
    icon: "💊",
  },
  {
    id: 2,
    title: "Chemicals",
    description:
      "We follow IATA guidelines for chemical imports and exports, offering competitive options. With strong authority relations and continuous monitoring, we ensure a smooth, compliant, and efficient supply chain experience.",
    icon: "🧪",
  },
  {
    id: 3,
    title: "Textiles",
    description:
      "We are sensitive to the tightly controlled consignments and seasonality within the textile industry. We optimize your supply chain through our distribution and consolidation services. Our door to door offerings and constant shipment tracking allow you to efficiently monitor your consignments.",
    icon: "🥗",
  },
  {
    id: 4,
    title: "Energy",
    description:
    "As an organization we have kept up with the growing consumption of renewable energy through our forward looking perspective. We have supported the transport of cutting edge tools used to generate renewable energy by coming up with creative methods to serve emerging markets.",
    icon: "💻",
  },
  {
    id: 5,
    title: "Automobile",
    description:
    "Our adaptable nature allows us to handle inventory of any dimension and value for the automobile industry. We demonstrate the same flexibility by catering to the dynamic market trends of this industry across our global network.",
    icon: "🚗",
  },
  {
    id: 6,
    title: "Packaging",
    description:
    "The packaging industry needs forwarders with a widespread reach. We are able to offer this through our global partnerships and diverse network of carriers. Our experienced team uses this network to provide you with timely and affordable solutions.",
    icon: "📦",
  },
  {
    id: 7,
    title: "Time Critical Cargo",
    description:
    "We leverage strong carrier relations to secure priority pricing while ensuring swift, efficient operations for time-critical cargo.",
    icon: "📦",
  },
  {
    id: 8,
    title: "Glassware",
    description:
    "Our team is acquainted with the extensive reach and distribution network of the glassware industry. We couple our global supply chain knowledge with material handling expertise to ensure your shipments are transported reliably and efficiently.",
    icon: "📦",
  },
  {
    id: 9,
    title: "Electronics",
    description:
    "We ensure the safe and efficient transport of electronic goods, protecting sensitive components from damage and delays. Our logistics solutions help businesses meet market demands while optimizing supply chain costs.",
    icon: "📦",
  },
];

const Industries = () => {
  return (
    <>
      <MainLayout>
        <div className="industries-container">
          <div
            className="industries-background"
            style={{
              backgroundImage: `url(${industriesBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="industries-overlay"></div>

            <div className="industries-content">
              <div className="content-box">
                <h1>Industries</h1>
                <p>
                  Over the past two decades we have been coming up with
                  innovative ways to enable global trade across various
                  industries.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* INDUSTRIES CARDS */}
        <section className="industries-cards-section">
          <div className="cards-container">
            {industriesData.map((industry) => (
              <div key={industry.id} className="industry-card">
                <div className="card-icon">{industry.icon}</div>
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </div>
            ))}
          </div>
        </section>
      </MainLayout>

      <style>{`

.industries-background {
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.industries-content {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.content-box {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 40px;
  text-align: center;
  box-sizing: border-box;
}

.content-box h1 {
  font-size: 60px;
  color: #f47c2c;
  margin-bottom: 20px;
}

.content-box p {
  max-width: 900px;
  font-size: 20px;
  line-height: 1.8;
  color: #444;
}



        .industries-container {
          width: 100%;
          position: relative;
        }

        .industries-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
        }

      
        .industries-cards-section {
          padding: 80px 20px;
          background: #ffffff;
        }

        .cards-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }

        .industry-card {
          background: linear-gradient(
            135deg,
            #f47c2c 0%,
            #ff8c42 100%
          );
          border-radius: 20px;
          padding: 40px;
          color: #fff;
          transition: 0.3s ease;
          cursor: pointer;
        }

        .industry-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(244, 124, 44, 0.3);
        }

        .card-icon {
          font-size: 50px;
          margin-bottom: 20px;
        }

        .industry-card h3 {
          font-size: 28px;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .industry-card p {
          font-size: 16px;
          line-height: 1.7;
        }

        @media (max-width: 1024px) {
          .cards-container {
            grid-template-columns: 1fr 1fr;
          }
        }

       @media (max-width: 768px) {
  .industries-background {
    background-attachment: scroll;
    height: 70vh;
  }

  .content-box {
    width: calc(100% - 30px);
    padding: 30px 20px;
  }

  .content-box h1 {
    font-size: 36px;
  }

  .content-box p {
    font-size: 16px;
    line-height: 1.6;
  }

  .cards-container {
    grid-template-columns: 1fr;
  }

  .industry-card {
    padding: 30px;
  }
}
      `}</style>
    </>
  );
};

export default Industries;
