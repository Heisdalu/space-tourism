import { useHistory, useParams } from "react-router-dom";
import style from "./CrewContent.module.css";
import { crewData } from "../../lib/crew-data";

const CrewContent = (props) => {
  const { name } = useParams();
  const history = useHistory()

  const user = crewData.find((el) => el.id === name);

  if(!user) return history.push('/home')

  return (
    <section className={style.crewMainContent}>
      <h1 className={style.crewTitle}>
        <span className={style.crewSubtitle}>{user.job}</span>
        <span className={style.crewName}>{user.name}</span>
      </h1>

      <p className={style.crewDetail}>{user.detail}</p>
    </section>
  );
};

export default CrewContent;
