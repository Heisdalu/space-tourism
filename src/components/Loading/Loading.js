import style from "./Loading.module.css";
import Logo from "../../assets/Logo";

const Loading = () => {
  return (
    <div className={style.loadingContainer}>
      <span className={style.loading_gif}>
        <Logo />
      </span>
    </div>
  );
};


export default Loading;