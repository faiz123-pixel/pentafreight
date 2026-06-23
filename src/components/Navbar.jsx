import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import pentaLogo from "../assets/pentafreight-logo.webp";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      {/* Sticky Logo */}
      <div className="sticky-logo" onClick={() => handleNavigation("/")}>
        <img src={pentaLogo} alt="Pentafreight Logo" />
      </div>

      {/* Desktop Navbar */}
      <nav className="desktop-navbar">
        <ul>
          <li className="active" onClick={() => handleNavigation("/")}>HOME</li>
          <li onClick={() => handleNavigation("/")}>ABOUT US</li>
          <li onClick={() => handleNavigation("/")}>SERVICES</li>

          <li className="logo-desktop" onClick={() => handleNavigation("/pentakuhl")}>
            Penta<span>KUHL</span>
          </li>

          <li onClick={() => handleNavigation("/industries")}>INDUSTRIES</li>
          <li onClick={() => handleNavigation("/")}>CAREERS</li>
          <li onClick={() => handleNavigation("/")}>CONTACT</li>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav className="mobile-navbar">
        <button className="contact-btn">Contact</button>

        <button
          className={`menu-btn ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <ul className="mobile-menu-list">
          <li className="active" onClick={() => handleNavigation("/")}>HOME</li>

          <li onClick={() => handleNavigation("/")}>ABOUT US</li>

          <li className="has-arrow" onClick={() => handleNavigation("/")}>
            SERVICES
            <ChevronRight size={18} />
          </li>

          <li className="has-arrow" onClick={() => handleNavigation("/")}>
            <span className="logo">
              Penta<span>KUHL</span>
            </span>
            <ChevronRight size={18} />
          </li>

          <li onClick={() => handleNavigation("/industries")}>INDUSTRIES</li>
          <li onClick={() => handleNavigation("/")}>CAREERS</li>
          <li onClick={() => handleNavigation("/")}>CONTACT</li>
        </ul>
      </div>

      <style>{`

        /* Sticky Logo */
        .sticky-logo{
          position:fixed;
          left:0;
          top:50%;
          // width:50px;
          height:200px;
          transform:translateY(-50%);
          z-index:999;
          overflow:hidden;
          box-shadow:0 4px 15px rgba(0,0,0,0.2);
          background:#fff;
          display:flex;
          align-items:center;
          justify-content:center;
          transition:all .3s ease;
          cursor:pointer;
          border-radius:0 8px 8px 0;
        }

        .sticky-logo:hover{
          transform:translateY(-50%) scale(1.05);
          box-shadow:0 6px 20px rgba(0,0,0,0.3);
        }

        .sticky-logo img{
          width:100%;
          height:100%;
          object-fit:contain;
          transform-origin:center center;
          border-radius:0;
        }

        .desktop-navbar{
  height:90px;
  background:#f3f3f3;
  display:flex;
  justify-content:center;
  align-items:center;
}

.desktop-navbar ul{
  display:flex;
  align-items:center;
  gap:50px;
  list-style:none;
  margin:0;
  padding:0;
}

.desktop-navbar li{
  font-size:16px;
  font-weight:600;
  cursor:pointer;
          transition:color .25s ease;
        }

        .desktop-navbar li:hover{
          color:#f47c2c;
}

.logo-desktop{
  font-size:28px;
  color:#777;
}

.logo-desktop span{
  color:#2ea8ff;
  font-weight:700;
}

        .mobile-navbar{
          height:90px;
          background:#f3f3f3;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:0 25px;
          position:relative;
          z-index:1001;
        }

        .contact-btn{
          background:#f47c2c;
          color:#fff;
          border:none;
          border-radius:15px;
          padding:12px 20px;
          font-size:18px;
          font-weight:600;
        }

        .menu-btn{
          width:40px;
          height:40px;
          border:none;
          background:none;
          cursor:pointer;
          position:relative;
        }

        .menu-btn span{
          position:absolute;
          width:32px;
          height:3px;
          background:#111;
          left:4px;
          transition:.35s;
        }

        .menu-btn span:nth-child(1){
          top:8px;
        }

        .menu-btn span:nth-child(2){
          top:18px;
        }

        .menu-btn span:nth-child(3){
          top:28px;
        }

        /* Convert to X */

        .menu-btn.active span:nth-child(1){
          transform:rotate(45deg);
          top:18px;
        }

        .menu-btn.active span:nth-child(2){
          opacity:0;
        }

        .menu-btn.active span:nth-child(3){
          transform:rotate(-45deg);
          top:18px;
        }

        .mobile-menu{
  display:block;
  position:fixed;
  top:90px;
  left:0;
  width:100%;
  
  height:calc(100vh - 90px);
  background:#f3f3f3;
  transform:translateX(-100%);
  transition:transform .4s ease;
  z-index:1000;
  overflow-y:auto;
  box-shadow:2px 0 15px rgba(0,0,0,0.15);
}

        .mobile-menu.show{
          transform:translateX(0);
        }

        .mobile-menu ul{
          list-style:none;
          margin:0;
          padding:0;
        }

        .mobile-menu li{
          height:55px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:0 20px;
          border-bottom:1px solid #d7d7d7;
          font-size:18px;
          font-weight:500;
          color:#111;
          transition:color .25s ease;
          cursor:pointer;
        }

        .mobile-menu li:hover{
          color:#f47c2c;
        }

        .mobile-menu li.active{
          color:#f47c2c;
          font-weight:700;
        }

        .logo{
          color:#777;
          font-size:18px;
        }

        .logo span{
          color:#2ea8ff;
          font-weight:700;
        }

        /* Desktop */
.desktop-navbar{
  display:flex;
}

/* Mobile hidden by default */
.mobile-navbar{
  display:none;
}

/* Tablet & Mobile */
@media(max-width:991px){


  .desktop-navbar{
    display:none;
  }

  .mobile-navbar{
    display:flex;
  }

  .mobile-menu.show{
    display:block;
  }
}
      `}</style>
    </>
  );
}
