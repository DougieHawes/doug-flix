import { Link1 } from "../utils/links";

import "./style.scss";

const Home = () => {
  return (
    <div className="home">
      <Link1 link="/recent-movies" text="RECENT-MOVIES" />
      <Link1 link="/recent-shows" text="RECENT-SHOWS" />
      <Link1 link="/all-time-movies" text="ALL-TIME-MOVIES" />
      <Link1 link="/all-time-shows" text="ALL-TIME-SHOWS" />
      <Link1 link="/all-time-boxoffice" text="ALL-TIME-BOXOFFICE" />
      <Link1 link="/coming-soon" text="COMING-SOON" />
    </div>
  );
};

export default Home;
