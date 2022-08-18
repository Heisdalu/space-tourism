import { useHistory, useParams } from "react-router-dom";
import style from "./TechnologyContent.module.css";
import { techData } from "../../lib/tech-data";

const TechnologyContent = () => {
  const { id } = useParams();
  const history = useHistory();
  const user = techData.find((el) => el.id === id);

  if(!user) return history.push('/home');
  
  return (
    <div className={style.contentBox}>
      <h1 className={style.contentHeader}>
        <span className={style.contentTitle}>THE TERMINOLOGY…</span>
        <span className={style.contentSubtitle}>{user.title}</span>
      </h1>

      <p className={style.content}>{user.detail}</p>
    </div>
  );
};

export default TechnologyContent;
