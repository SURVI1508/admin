import styles from '../../styles/AllStyles/header.module.css'
import { TbFileReport } from 'react-icons/tb';
import { FiDownload } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';

import Feature from './Feature'
import Graph from './Graph'
import Onboarding from './Onboarding'
import Renewals from './Renewals'


const Header = () => {
    return (
        <div className={styles.header__main__div}>
            <div className={styles.header__main__container}>
                <div className={styles.header__main__backBtn}>
                    <IoIosArrowBack />
                </div>
                <div className={styles.header__main__text}>
                    <p>DASHBORD</p>
                    <p style={{ fontSize: "20px", color: "#878787", fontWeight: "500" }}>Good Afternoon,Sourav ☀️</p>
                </div>
                <div className={styles.header__main__container__export}>
                    <div className={styles.btn__btn}><TbFileReport />Reports</div>
                    <div className={styles.btn__btn}><FiDownload />Export</div>
                </div>

            </div>
            <div className={styles.feture__card__container}>
                <Feature />
            </div>
            <div className={styles.graph__container}>
                <Graph />
            </div>
            <div className={styles.graph__container}>
                {/* <Onboarding /> */}
            </div>
            <div className={styles.graph__container}>
                <Renewals />
            </div>
        </div>
    )
}

export default Header