import style from './DestinationDetail.module.css';

const DestinationDetail = () => {
    return (
      <section className={style.destnationDetailBox}>
        <div className={style.mainDetail}>
          <h1 className={style.mainDetailTitle}>MOON</h1>
          <p className={style.mainDetailContent}>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
        </div>
        <div className={style.subDetailBox}>
          <section className={style.subDetail}>
            <h2 className={style.subDetailTitle}>AVG. DISTANCE</h2>
            <p className={style.subDetailValue}>384,400KM</p>
          </section>
          <section className={style.subDetail}>
            <h2 className={style.subDetailTitle}>Est. travel time</h2>
            <p className={style.subDetailValue}>3 DAYS</p>
          </section>
        </div>
      </section>
    );
}


export default DestinationDetail;