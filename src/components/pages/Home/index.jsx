import Photogames from "../Photogame";
import Prvsfooter from "../prvsfooter";
import Book from "./Book";
import Landing from "./Landing";
import Photoicn from "./Photoicn";


const Home = () => {
  return (
    <>
      <Landing />
      <Book />
      <Photoicn/>
      <Photogames/>
      <Prvsfooter/>
    </>
  );
};

export default Home;
