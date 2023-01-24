import styles from '../../styles/AllStyles/sidebar.module.css'
const Sidebar = () => {

    // const dropDown = () => {
    //     var item = document.getElementById("item");
    //     // var arrow = document.getElementsByClassName("arrow");
    //     if (item.offsetHeight === "0") {
    //         item.style.offsetHeight = "100px";
    //         // arrow.style.tra = "rotate(3.142rad)";
    //     } else {
    //         item.style.height = "0";
    //     }
    // }



    return (
        <>

            <div className={styles.sidebar__main__div}>
                <div className={styles.sidebar__main__container}>
                    <div className={styles.sidebar__main__container__container}>
                        <div className={styles.sidebar__brand__logo}>
                            <img src="./images/logo.png" alt="" />

                        </div>
                        <div className={styles.sidebar__dashboard__list__container}>

                            <div className={styles.sidebar__dashboard__text}>
                                <img src="./images/dashboard (1) 1.png" alt="" />
                                Dashboard
                            </div>

                            <div className={styles.sidebar__dashboard__user__container}>
                                <div className={styles.sidebar__dashboard__user__dropdown__main}>
                                    <div className={styles.sidebar__dashboard__user__dropdown}>
                                        <img src="./images/group.png" alt="" />
                                        USER
                                        <img src="./images/drop.png" alt="" />
                                    </div>
                                    <div className={styles.sidebar__dashboard__user__dropdown__list} id="item">
                                        <span>All Customers</span>
                                        <span>Manually Add Customers</span>
                                        <span>Free Trial Customers</span>
                                        <span>Active Paid Customers</span>
                                        <span>Dormant Clients</span>
                                        <span>Upcoming Renewals</span>
                                        <span>Create User</span>
                                        <span>All Users</span>
                                        <span>All Unverified Clients</span>
                                    </div>
                                </div>


                                <div className={styles.sidebar__dashboard__user__dropdown__main} style={{marginTop:"2rem"}}>
                                    <div className={styles.sidebar__dashboard__user__dropdown}>
                                        <img src="./images/group.png" alt="" />
                                        ANALYTICS
                                        <img src="./images/drop.png" alt="" />
                                    </div>
                                    <div className={styles.sidebar__dashboard__user__dropdown__list} id="item">
                                        <span>All Customers</span>
                                        <span>Manually Add Customers</span>
                                        <span>Free Trial Customers</span>
                                        <span>Active Paid Customers</span>
                                        <span>Dormant Clients</span>
                                        <span>Upcoming Renewals</span>
                                        <span>Create User</span>
                                        <span>All Users</span>
                                        <span>All Unverified Clients</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sidebar