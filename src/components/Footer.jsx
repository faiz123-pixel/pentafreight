

const indiaOffices = [
  {
    city: "Mumbai",
    address: [
      "902, 'A' Wing, Times Square,",
      "Andheri-Kurla Road, Marol,",
      "Andheri (East), Mumbai 400 059",
      "+91 22-6222-6222",
    ],
  },
  {
    city: "Ahmedabad",
    address: [
      "D21 The Address, True Value",
      "West Gate, SG Highway,",
      "Ahmedabad 380 009",
      "+91 7940227900",
    ],
  },
  {
    city: "Bengaluru",
    address: [
      "205, 2nd floor,",
      "Connection point H.A.L Airport",
      "Exit Road, Bangalore 560 017",
      "+91 80-4112-5590",
    ],
  },
  {
    city: "Chennai",
    address: [
      "Flat no.A1, 1st floor,",
      "No 24 Vembuli Amman Koil Street,",
      "Palavanthangal, Chennai 600114",
      "+91 44-22241462",
    ],
  },
  {
    city: "Delhi",
    address: [
      "Penta Freight Pvt. Ltd.",
      "Samalkha, New Delhi",
      "110037",
      "+91 11-4078-2222",
    ],
  },
  {
    city: "Hyderabad",
    address: [
      "Cargo Satellite Building,",
      "Rajiv Gandhi Airport,",
      "Shamshabad 501218",
      "+91 40-2400-4048",
    ],
  },
  {
    city: "Kolkata",
    address: [
      "131 Jangalpur Road",
      "Near Airport",
      "Kolkata 700081",
      "+91 33-2514-7089",
    ],
  },
];

const usaOffice = {
  city: "Chicago",
  address: [
    "Penta Freight Pvt. Ltd",
    "5100 Newport Dr.",
    "Suite 4, Rolling Meadows,",
    "IL 60008 USA",
    "+040 234 6559 / +224 434 2154",
  ],
};

export default function Footer() {
  return (
    <>
      <section className="footer-section">
        <div className="container">

          {/* INDIA OFFICES */}
          <div className="row g-5">
            <div className="col-lg-3 col-md-6 col-12">
              <h2 className="section-title">
                Our <span>India</span> Offices
              </h2>

              <p className="section-desc">
                Penta Freight delivers seamless logistics across India,
                with branches in key cities for your convenience.
              </p>
            </div>

            {indiaOffices.map((office, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6 col-12"
              >
                <div className="office-card">
                  <h3>{office.city}</h3>

                  {office.address.map((line, i) => (
                    <p key={i} className="address-line">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* USA OFFICE */}
          <div className="row g-5 mt-5">
            <div className="col-lg-3 col-md-6 col-12">
              <h2 className="section-title">
                Our <span>USA</span> Office
              </h2>

              <p className="section-desc">
                Penta Freight has expanded its operations globally,
                beginning with the USA, to offer continuous support
                across continents.
              </p>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="office-card">
                <h3>{usaOffice.city}</h3>

                {usaOffice.address.map((line, i) => (
                  <p key={i} className="address-line">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <hr className="footer-divider" />

          {/* FOOTER BOTTOM */}
          <div className="footer-bottom">
            <div className="copyright">
              © 2026 Penta Freight. All Rights Reserved Developed by Nipralo
            </div>

            <div className="linkedin-icon">
              
            </div>

            <div className="footer-links">
              <a href="/">Privacy Policy</a>
              <span className="dot"></span>
              <a href="/">Terms and Conditions</a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .footer-section{
          background:#f4f4f4;
          padding:80px 0 30px;
        }

        .section-title{
          font-size:3rem;
          font-weight:700;
          margin-bottom:20px;
        }

        .section-title span{
          color:#f47c2c;
        }

        .section-desc{
          color:#555;
          line-height:1.8;
          font-size:18px;
        }

        .office-card{
          min-height:220px;
        }

        .office-card h3{
          font-size:2rem;
          font-weight:700;
          margin-bottom:20px;
          transition:.3s;
        }

        .office-card:hover h3{
          color:#f47c2c;
        }

        .address-line{
          color:#666;
          font-size:18px;
          margin-bottom:8px;
          transition:.3s;
          cursor:pointer;
        }

        .address-line:hover{
          color:#f47c2c;
        }

        .footer-divider{
          margin:50px 0 30px;
          opacity:.15;
        }

        .footer-bottom{
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:20px;
          flex-wrap:wrap;
        }

        .copyright{
          color:#222;
          font-size:16px;
        }

        .linkedin-icon{
          width:42px;
          height:42px;
          border:1px solid #d9d9d9;
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          cursor:pointer;
          transition:.3s;
        }

        .linkedin-icon:hover{
          background:#f47c2c;
          color:#fff;
          border-color:#f47c2c;
        }

        .footer-links{
          display:flex;
          align-items:center;
          gap:15px;
        }

        .footer-links a{
          text-decoration:none;
          color:#222;
          transition:.3s;
        }

        .footer-links a:hover{
          color:#f47c2c;
        }

        .dot{
          width:8px;
          height:8px;
          background:#cfcfcf;
          border-radius:50%;
        }

        @media(max-width:768px){

          .section-title{
            font-size:2.2rem;
          }

          .footer-bottom{
            flex-direction:column;
            text-align:center;
          }

          .footer-links{
            justify-content:center;
            flex-wrap:wrap;
          }
        }
      `}</style>
    </>
  );
}