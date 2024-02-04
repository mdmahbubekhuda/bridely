import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Reservation from "./Reservation";
import Services from "./Services";
import Team from "./Team";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bridely | Home</title>
      </Helmet>
      <Banner />
      <Services />
      <Team />
      <Reservation />
    </div>
  );
};

export default Home;
