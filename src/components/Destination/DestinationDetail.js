import { useParams, useHistory } from "react-router-dom";
import { destinationContent } from "../../lib/data";
import style from "./DestinationDetail.module.css";
import DestinationSubDetail from "./DestinationSubDetail";

const DestinationDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const data = destinationContent.find((el) => el.id === id);

  if (!data) return history.push("/home");

  
  return (
    <section className={style.destnationDetailBox}>
      <div className={style.mainDetail}>
        <h1 className={style.mainDetailTitle}>{data.title}</h1>
        <p className={style.mainDetailContent}>{data.content}</p>
      </div>
      <DestinationSubDetail distance={data.distance} time={data.time} />
    </section>
  );
};

export default DestinationDetail;
