import style from "./Destination.module.css";

import DestinationImage from "./DestinationImage";
import DestinationNavigation from "./DestinationNavigation";
import DestinationDetail from "./DestinationDetail";
import { Redirect, Route, useRouteMatch } from "react-router-dom";

const Destination = () => {
  const { url, path } = useRouteMatch();

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
