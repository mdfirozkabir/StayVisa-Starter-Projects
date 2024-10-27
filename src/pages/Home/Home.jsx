import Categories from "../../components/Rooms/Categories/Categories"
import Rooms from "../../components/Rooms/Rooms"
import { useSearchParams } from "react-router-dom";

const Home = () => {

  return (
    <div>
      {/* Categories section */}
      <Categories />
      {/* Rooms sections */}
      <Rooms />
    </div>
  )
}

export default Home
