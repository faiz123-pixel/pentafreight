import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      <main style={{ minHeight: "100vh" }} className="main-content">
        {children}
      </main>

      <Footer />

      <style>{`
        .main-content {
          position:relative;
          z-index:20;
        }

        @media(max-width:991px){
          .main-content{
            padding-top:80px !important;
          }
        }
      `}</style>
    </>
  );
};

export default MainLayout;