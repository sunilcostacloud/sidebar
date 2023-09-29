import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import SidebarItems from "./SidebarItems";

function Sidebar(props) {
    // console.log("checking", props)

    const location = props.history.location;
    const [activeIndex, setActiveIndex] = useState(0);

    function changeActiveIndex(newIndex) {
        setActiveIndex(newIndex);
    }

    function getPath(path) {
        if (path.charAt(0) !== "/") {
            return "/" + path;
        }
        return path;
    }

    useEffect(() => {
        const activeItem = SidebarItems.findIndex(
            (item) => getPath(item.route) === getPath(location.pathname)
        );
        changeActiveIndex(activeItem);
    }, [location]);

    return (
        <>
            <div className={styles.SidebarParent}>
                <div className={styles.SidebarContainer}>
                    {SidebarItems.map((item, index) => (
                        <Link to={item.route} key={item.name} className={styles.SidebarLink}>

                            <div onClick={() => setActiveIndex(index)}
                                className={`${styles.SidebarItem} ${index === activeIndex ? styles.active : ""
                                    }`}
                            >
                                <p>{item.name}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className={styles.SidebarBehindTheScenes} />
            </div >
        </>
    );
}

export default Sidebar;
