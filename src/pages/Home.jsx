import MainLayout from "../layouts/MainLayout";
import homeVideo from "../assets/home-video.mp4";
import airplaneImage from "../assets/airplan-img.jpg";
import backgroundImg from "../assets/background-img.jpg";

const Home = () => {
  return (
    <MainLayout>
      <div className="fullscreen-video-container">
        <video
          src={homeVideo}
          autoPlay
          loop
          muted
          playsInline
          className="fullscreen-video"
        />
      </div>


      <div
        className="about-section"
        style={{ backgroundImage: `url(${airplaneImage})` }}
      >
      <div className="overlay">
        <div className="content-wrapper">
          <div className="left-content">
            <h3>ABOUT US</h3>
            <div className="line"></div>
            <h2>PENTA FREIGHT</h2>
          </div>

          <div className="right-content">
            <p>
              Penta Freight provides reliable <strong>logistics solutions</strong>,
              specializing in temperature-sensitive shipments. We ensure safe,
              <strong> on-time delivery</strong> worldwide. Trust us for seamless
              supply chain management.
            </p>
          </div>
        </div>
      </div>
    </div>
     <div
        className="background-img-section"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="background-img-overlay" />
        <div className="background-img-content">
          <h2>Our Philosophy</h2>
          <p>
            Customer satisfaction drives everything we do. Every shipment is a promise,
             and we deliver it with precision, care, and professionalism. With expert resources, we ensure safe,
             timely transport, building lasting partnerships founded on trust and excellence.
          </p>
          <button className="background-img-button">Read More</button>
        </div>
      </div>
      <div
        className="background-img-section"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="background-img-overlay" />
        <div className="background-img-content">
          <h2>Our Global Footprint</h2>
        </div>
      </div>

      <style>{`
        .fullscreen-video-container {
          position:relative;
          width:100vw;
          height:100vh;
          overflow:hidden;
          margin:0;
          padding:0;
          max-width:none;
        }

        .fullscreen-video {
          width:100%;
          height:100%;
          object-fit:cover;
          display:block;
        }

        .new-section {
          position:relative;
          width:100%;
          height:100vh;
          background-size:cover;
          background-position:center;
          background-repeat:no-repeat;
          display:flex;
          align-items:center;
          justify-content:center;
          padding:0 20px;
        }

        .new-section-overlay {
          position:absolute;
          inset:0;
          background:rgba(0,0,0,0.36);
        }

        .new-section-content {
          position:relative;
          z-index:1;
          max-width:760px;
          width:100%;
          text-align:center;
          color:#fff;
          display:flex;
          flex-direction:column;
          gap:24px;
          padding:40px 20px;
          border-radius:16px;
          background:rgba(0,0,0,0.2);
          box-shadow:0 15px 40px rgba(0,0,0,0.2);
        }

        .new-section-content h2 {
          font-size:48px;
          margin:0;
          color:#ff7a2a;
          font-weight:700;
        }

        .new-section-content p {
          font-size:18px;
          line-height:1.9;
          margin:0 auto;
          max-width:680px;
        }

        .new-section-button {
          align-self:center;
          background:#f47c2c;
          color:#fff;
          border:none;
          border-radius:10px;
          padding:14px 34px;
          font-size:16px;
          font-weight:700;
          cursor:pointer;
          transition:transform .25s ease, box-shadow .25s ease;
        }

        .new-section-button:hover {
          transform:translateY(-2px);
          box-shadow:0 10px 25px rgba(244,124,44,0.35);
        }

        .background-img-section {
          position:relative;
          width:100%;
          height:50vh;
          background-size:cover;
          background-position:center;
          background-repeat:no-repeat;
          display:flex;
          align-items:center;
          justify-content:center;
          padding:0 20px;
        }

        .background-img-overlay {
          position:absolute;
          inset:0;
          background:rgba(0,0,0,0.35);
        }

        .background-img-content {
          position:relative;
          z-index:1;
          max-width:760px;
          width:100%;
          text-align:center;
          color:#fff;
          display:flex;
          flex-direction:column;
          gap:24px;
          padding:40px 20px;
          border-radius:16px;
          background:rgba(0,0,0,0.22);
          box-shadow:0 15px 40px rgba(0,0,0,0.2);
        }

        .background-img-content h2 {
          font-size:48px;
          margin:0;
          color:#ff7a2a;
          font-weight:700;
        }

        .background-img-content p {
          font-size:18px;
          line-height:1.9;
          margin:0 auto;
          max-width:680px;
        }

        .background-img-button {
          align-self:center;
          background:#f47c2c;
          color:#fff;
          border:none;
          border-radius:10px;
          padding:14px 34px;
          font-size:16px;
          font-weight:700;
          cursor:pointer;
          transition:transform .25s ease, box-shadow .25s ease;
        }

        .background-img-button:hover {
          transform:translateY(-2px);
          box-shadow:0 10px 25px rgba(244,124,44,0.35);
        }

        .about-section {
          position:relative;
          width:100%;
          height:100vh;
          background-size:cover;
          background-position:center;
          background-repeat:no-repeat;
          display:flex;
          align-items:center;
          justify-content:flex-start;
          padding:0 10vw;
        }

        .overlay {
          position:absolute;
          inset:0;
          background:rgba(0,0,0,0.45);
        }

        .content-wrapper {
          position:relative;
          display:grid;
          grid-template-columns:220px minmax(320px,1fr);
          gap:36px;
          max-width:900px;
          width:100%;
          color:#fff;
          z-index:1;
          align-items:center;
        }

        .left-content h3 {
          font-size:16px;
          letter-spacing:3px;
          margin-bottom:12px;
          text-transform:uppercase;
          color:#f47c2c;
        }

        .line {
          width:60px;
          height:3px;
          background:#f47c2c;
          margin-bottom:12px;
        }

        .left-content h2 {
          font-size:32px;
          margin:0;
          line-height:1.1;
        }

        .right-content p {
          font-size:18px;
          line-height:1.85;
          margin:0;
          max-width:520px;
        }

        @media(max-width:991px) {
          .about-section {
            align-items:flex-start;
            justify-content:center;
            padding:60px 20px;
          }

          .content-wrapper {
            grid-template-columns:1fr;
            gap:24px;
          }

          .left-content h2 {
            font-size:32px;
          }
        }
      `}</style>
    </MainLayout>
  );
};

export default Home;