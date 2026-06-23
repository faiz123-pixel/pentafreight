import MainLayout from "../layouts/MainLayout";
import industriesBg from "../assets/industries-bg.jpg";
import { useState } from "react";

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

const faqs = [
  {
    question: "What industries do you serve?",
    answer:
      "We serve various industries including pharmaceuticals, chemicals, energy, packaging, textiles, and more, offering tailored logistics solutions for each.",
  },
  {
    question: "How do you handle temperature-sensitive shipments?",
    answer:
      "We provide temperature-controlled solutions to ensure the safe transport of sensitive goods, especially for the pharmaceutical industry.",
  },
  {
    question: "What sets your logistics apart?",
    answer:
      "We offer customized, transparent solutions with competitive rates and a deep understanding of industry-specific needs.",
  },
  {
    question: "How do you ensure compliance with regulations?",
    answer:
      "We comply with international guidelines, working closely with authorities to ensure smooth and legal shipments.",
  },
];

const Industries = () => {
    const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


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
       <section className="faq-section">
  <div className="faq-container">
    <div className="faq-left">
      <h2>
        Frequently Asked <span>Questions</span>
      </h2>

      <p>
        Find answers to common industry questions, ensuring clarity on our
        services, processes, and solutions.
      </p>
    </div>

    <div className="faq-right">
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <button
            className="faq-btn"
            onClick={() => toggleFAQ(index)}
          >
            <h3>{faq.question}</h3>

            <span
              className={`faq-icon ${
                openIndex === index ? "open" : ""
              }`}
            >
              ❯
            </span>
          </button>

          {openIndex === index && (
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>
<section className="industry-banner" style={{
  backgroundImage: `url(${industriesBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
}}>
  <div className="industry-content">
    <h2>Tailored Logistics for Every Industry</h2>

    <p>
      Delivering tailored supply chain solutions to meet the unique needs of
      industries worldwide.
    </p>

    <button>Contact Us Today</button>
  </div>
</section>
      </MainLayout>

      <style>{`
.industry-banner {
  width: 100%;
  height: 40vh;
  min-height: 300px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  z-index: 1;
}

.industry-content {
  text-align: center;
  padding: 40px;
}

.industry-content h2 {
  color: #fff;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
}

.industry-content p {
  color: #fff;
  font-size: 20px;
  margin-bottom: 30px;
}

.industry-content button {
  background: #f47c2c;
  color: #fff;
  border: none;
  padding: 12px 30px;
  border-radius: 6px;
  cursor: pointer;
}
.faq-section {
  background: #f5f5f5;
  padding: 100px 20px;
}

.faq-container {
  max-width: 1400px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.faq-left h2 {
  font-size: 30px;
  font-weight: 400;
  line-height: 1.1;
  margin-bottom: 30px;
  color: #000;
}

.faq-left h2 span {
  color: #8c8c8c;
}

.faq-left p {
  font-size: 15px;
  line-height: 1.8;
  color: #6f7782;
  max-width: 500px;
}

.faq-item {
  border-top: 1px solid #d9d9d9;
}

.faq-item:last-child {
  border-bottom: 1px solid #d9d9d9;
}

.faq-btn {
  width: 100%;
  border: none;
  background: transparent;
  padding: 15px 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
}

.faq-btn h3 {
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin: 0;
}

.faq-icon {
  font-size: 18px;
  color: #8c8c8c;
  transition: all 0.3s ease;
  transform: rotate(90deg);
}

.faq-icon.open {
  transform: rotate(-90deg);
}

.faq-answer {
  // padding-bottom: 10px;
  animation: fadeIn 0.3s ease;
}

.faq-answer p {
  margin: 0;
  font-size: 15px;
  line-height: 1.8;
  color: #556273;
  max-width: 90%;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 992px) {
  .faq-container {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .faq-left h2 {
    font-size: 40px;
  }

  .faq-btn h3 {
    font-size: 18px;
  }

  .faq-answer p {
    font-size: 15px;
  }
}
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
