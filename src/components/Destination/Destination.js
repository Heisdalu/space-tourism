import style from "./Destination.module.css";
import { Redirect, Route, useRouteMatch } from "react-router-dom";
import DestinationImage from "./DestinationImage";
import DestinationNavigation from "./DestinationNavigation";
import DestinationDetail from "./DestinationDetail";
import { DESTINATION_BG } from "../../lib/bg";
import useBg from "../../hooks/use-Bg";

const Destination = () => {
  const { url, path } = useRouteMatch();

  useBg(DESTINATION_BG);

  

  return (
    <div className={style.destinationContainer}>
      <h1 className={style.title}>PICK YOUR DESTINATION</h1>
      <div className={style.destinationContent}>
        <Route path={`${path}`} exact>
          <Redirect to={`${url}/moon`} />
        </Route>

        {/* dynamic images */}
        <Route path={`${path}/:id`}>
          <DestinationImage />
        </Route>

        <div className={style.destinationMain}>
          <DestinationNavigation />

          {/* dynamic contents */}
          <Route path={`${path}/:id`}>
            <DestinationDetail />
          </Route>
        </div>
      </div>
    </div>
  );
};

export default Destination;
