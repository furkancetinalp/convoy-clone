import Brokers from "./components/Body/Content/Brokers/Brokers";
import Carriers from "./components/Body/Content/Carriers/Carriers";
import Description from "./components/Body/Content/Description/Description";
import MainVideo from "./components/Body/MainVideo/MainVideo";
import Footer from "./components/Footer/Footer";
import AppNav from "./components/Navigation/AppNav";

export default function App() {
  return (
    <div className="flex flex-col">
      <AppNav />
      <MainVideo />
      <Description />
      <Carriers />
      <Brokers />

      <Footer />
    </div>
  );
}
