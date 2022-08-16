
import style from './DestinationSubDetail.module.css';

const DestinationSubDetail = (props) => {

    return (
      <div className={style.subDetailBox}>
        <section className={style.subDetail}>
          <h2 className={style.subDetailTitle}>AVG. DISTANCE</h2>
          <p className={style.subDetailValue}>{props.distance}</p>
        </section>
        <section className={style.subDetail}>
          <h2 className={style.subDetailTitle}>Est. travel time</h2>
          <p className={style.subDetailValue}>{props.time}</p>
        </section>
      </div>
    );
}

export default DestinationSubDetail