/* eslint-disable jsx-a11y/anchor-is-valid */
import style from './DestinationNavigation.module.css'


const DestinationNavigation  = () => {
  
    return (
      <nav className={style.navigation}>
        <div className={style.navLinkBox}>
          <a href="#" className={style.navLink}>
            MOON
          </a>
        </div>

        <div className={style.navLinkBox}>
          <a href="#" className={style.navLink}>
            MARS
          </a>
        </div>

        <div className={style.navLinkBox}>
          <a href="#" className={style.navLink}>
            EUROPA
          </a>
        </div>

        <div className={style.navLinkBox}>
          <a href="#" className={style.navLink}>
            TITAN
          </a>
        </div>
      </nav>
    );
} 


export default DestinationNavigation;