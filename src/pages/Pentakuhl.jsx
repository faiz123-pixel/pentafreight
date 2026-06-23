import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import pentakuhlBg from "../assets/industries-bg.jpg";
import homeVideo from "../assets/home-video.mp4";
import backgroundImg from "../assets/background-img.jpg";

const faqs = [
  {
    question: "What is Penta Kuhl?",
    answer:
      "Penta Kuhl is an innovative logistics solution that integrates technology to optimize supply chain management and enhance efficiency.",
  },
  {
    question: "How does Penta Kuhl ensure cargo safety?",
    answer:
      "We utilize advanced tracking systems, secure storage facilities, and stringent handling protocols to ensure the safety of your cargo.",
  },
  {
    question: "What types of cargo can Penta Kuhl handle?",
    answer:
      "Penta Kuhl is equipped to manage various cargo types, including perishable goods, heavy equipment, and general freight.",
  },
  {
    question: "Is there customer support available for Penta Kuhl users?",
    answer:
      "Yes, our dedicated customer support team is available to assist you with any inquiries or issues regarding our services.",
  },
];
const Pentakuhl = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <MainLayout>

      {/* Video Section */}
      <section className="pentakuhl-video-section">
        <video
          src={homeVideo}
          autoPlay
          loop
          muted
          playsInline
          className="pentakuhl-video"
        />
        <div className="video-overlay" />
        <div className="video-content">
          <h2>Ensuring Safe Transport for Temperature-Sensitive Products</h2>
          <hr className="video-divider" />
          <div className="video-bottom-row">
            <div className="video-copy">
              <p>
                
Explore our frequently asked questions to gain clarity about Penta Kuhl’s services and features
              </p>
            </div>
            <div className="video-action">
              <button>Explore</button>
            </div>
          </div>
        </div>
      </section>

      <section className="pentakuhl-middle-section">
        <div className="pentakuhl-middle-content">
          <h3>ABOUT PENTA KUHL</h3>
          <p>
At Pentakuhl , we specialize in providing durable, effective packaging solutions that maintain temperature stability during transit, protecting your valuable products. Our innovative designs cater to various industries, including pharmaceuticals, food, and biotechnology.          </p>
        </div>
      </section>

       <div
              className="background-img-section"
              style={{ backgroundImage: `url(${backgroundImg})` }}
            >
              <div className="background-img-overlay" />
              <div className="background-img-content">
                <h2>Biothermal</h2>
                <p>
                  Authorized Distributors for Pelican BioThermaltm Products.
                </p>
                <button className="background-img-button">Read More</button>
              </div>
            </div>

      {/* FAQ Section */}

      <section className="faq-section">
        <div className="faq-container">

          <div className="faq-left">
            <h2>
              Frequently Asked <span>Questions</span>
            </h2>

            <p>
            Explore our frequently asked questions to gain clarity about Penta Kuhl’s services and features.
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

      {/* CTA Banner */}

      <section
        className="pentakuhl-banner"
        style={{
          backgroundImage: `url(${pentakuhlBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="banner-content">
          <h2>Protecting What Matters Most</h2>

          <p>
            Get in touch to ensure safe and temperature-stable transit for your sensitive products.
          </p>

          <button>Contact Us Today</button>
        </div>
      </section>

    </MainLayout>
    <style>{`
    /* =========================
   HERO SECTION
========================= */

.pentakuhl-container {
  width: 100%;
  position: relative;
}

.pentakuhl-background {
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.pentakuhl-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
}

.pentakuhl-content {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.content-box {
  width: 100%;
  height: 100%;

  background: rgba(255, 255, 255, 0.85);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  padding: 40px;
  box-sizing: border-box;
}

.content-box h1 {
  font-size: 60px;
  font-weight: 700;
  color: #f47c2c;
  margin-bottom: 20px;
}

.content-box p {
  max-width: 900px;
  font-size: 20px;
  line-height: 1.8;
  color: #444;
}

/* =========================
   FAQ SECTION
========================= */

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
  font-size: 48px;
  font-weight: 400;
  line-height: 1.2;
  color: #000;
  margin-bottom: 25px;
}

.faq-left h2 span {
  color: #8b8b8b;
}

.faq-left p {
  font-size: 18px;
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

  padding: 22px 0;

  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  text-align: left;
}

.faq-btn h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #000;
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
  padding-bottom: 20px;
  animation: fadeIn 0.3s ease;
}

.faq-answer p {
  margin: 0;

  font-size: 16px;
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

/* =========================
   VIDEO SECTION
========================= */

.pentakuhl-video-section {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 420px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pentakuhl-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.video-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 1;
}

.video-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  width: 60%;
  padding: 40px 24px;
  color: #fff;
}

.pentakuhl-middle-section {
  width: 100%;
  padding: 80px 20px;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
}

.pentakuhl-middle-content {
  max-width: 900px;
  text-align: center;
}

.pentakuhl-middle-content h3 {
  margin: 0;
  font-size: 18px;
  color: #f47c2c;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.pentakuhl-middle-content p {
  margin: 0;
  font-size: 24px;
  line-height: 1.8;
  color: #2c2c2c;
}

.video-content h2 {
  font-size: 42px;
  font-weight: 700;
  margin: 0 0 18px;
}

.video-divider {
  width: 100px;
  height: 3px;
  background: #f47c2c;
  border: none;
  margin: 0 0 30px;
}

.video-bottom-row {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.video-copy {
  flex: 1 1 55%;
}

.video-copy p {
  margin: 0;
  font-size: 18px;
  line-height: 1.9;
  max-width: 720px;
}

.video-action {
  flex: 0 0 auto;
}

.video-action button {
  background: #f47c2c;
  color: #fff;
  border: none;
  padding: 16px 38px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.video-action button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(244, 124, 44, 0.35);
}

.background-img-section {
  position: relative;
  width: 100%;
  height: 50vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
}

.background-img-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
}

.background-img-content {
  position: relative;
  z-index: 1;
  max-width: 760px;
  width: 100%;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px 20px;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.22);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.background-img-content h2 {
  font-size: 48px;
  margin: 0;
  color: #ff7a2a;
  font-weight: 700;
}

.background-img-content p {
  font-size: 18px;
  line-height: 1.9;
  margin: 0;
  max-width: 680px;
}

.background-img-button {
  align-self: center;
  background: #f47c2c;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 14px 34px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.background-img-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(244, 124, 44, 0.35);
}

/* =========================
   CTA BANNER
========================= */

.pentakuhl-banner {
  width: 100%;
  height: 40vh;
  min-height: 320px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
}

.pentakuhl-banner::before {
  content: "";

  position: absolute;
  inset: 0;

  background: rgba(0, 0, 0, 0.45);
}

.banner-content {
  position: relative;
  z-index: 2;

  text-align: center;
  padding: 20px;
}

.banner-content h2 {
  color: #fff;
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 20px;
}

.banner-content p {
  color: #fff;
  font-size: 20px;
  line-height: 1.7;
  max-width: 900px;
  margin: 0 auto 30px;
}

.banner-content button {
  background: #f47c2c;
  color: #fff;

  border: none;
  border-radius: 6px;

  padding: 14px 32px;

  font-size: 16px;
  font-weight: 600;

  cursor: pointer;
  transition: 0.3s ease;
}

.banner-content button:hover {
  background: #e46c1d;
}

/* =========================
   TABLET
========================= */

@media (max-width: 992px) {
  .faq-container {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .faq-left h2 {
    font-size: 38px;
  }

  .content-box h1 {
    font-size: 48px;
  }

  .banner-content h2 {
    font-size: 32px;
  }
}

/* =========================
   MOBILE
========================= */

@media (max-width: 768px) {
  .pentakuhl-background {
    background-attachment: scroll;
    height: 70vh;
  }

  .content-box {
    padding: 25px;
  }

  .content-box h1 {
    font-size: 36px;
  }

  .content-box p {
    font-size: 16px;
    line-height: 1.6;
  }

  .faq-left h2 {
    font-size: 32px;
  }

  .faq-left p {
    font-size: 15px;
  }

  .faq-btn h3 {
    font-size: 17px;
  }

  .faq-answer p {
    font-size: 15px;
  }

  .banner-content h2 {
    font-size: 26px;
  }

  .banner-content p {
    font-size: 16px;
  }

  .banner-content button {
    padding: 12px 24px;
    font-size: 15px;
  }
}
    `}

    </style>
    </>
  );
};

export default Pentakuhl;