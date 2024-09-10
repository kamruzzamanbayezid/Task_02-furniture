import Banner from "../Components/Banner/Banner";
import Beautify from "../Components/Beautify/Beautify";
import BrowseTheRange from "../Components/BrowseTheRange/BrowseTheRange";
import Delivery from "../Components/Delivery/Delivery";
import Footer from "../Components/Footer/Footer";
import HowItWork from "../Components/HowItWork/HowItWork";
import InspirationalCollection from "../Components/InspirationalCollection/InspirationalCollection";
import MailoingList from "../Components/MailoingList/MailoingList";

const Home = () => {
      return (
            <div>
                  <Banner />
                  <Delivery />
                  <InspirationalCollection />
                  <Beautify />
                  <BrowseTheRange />
                  <HowItWork />
                  <MailoingList />
                  <Footer />
            </div>
      );
};

export default Home;