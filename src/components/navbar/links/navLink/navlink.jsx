import Link from "next/link";
import styles from "./navlink.module.css"

const NavLink = ({item}) => {
    return (
        <Link href={item.path} className={styles.container}>{item.title}</Link>
     );
}
 
export default NavLink;