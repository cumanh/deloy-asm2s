import Navbar from "./Navbar";
import Header from "./Header";
import CitiHomepage from "./CitiHomepage";
import HotelHomestay from "./HotelHomepage";
import HotelDetail from "./HotelDetail";
import Form from "./FormInput";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <CitiHomepage />
      <HotelHomestay />
      <HotelDetail />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
