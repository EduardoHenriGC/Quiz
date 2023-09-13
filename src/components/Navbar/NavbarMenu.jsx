import Link from "next/link";
import styles from "../../styles/Navbar/NavbarMenu.module.css";

export default function NavbarMenu({ toggleList, isOpen }) {
  return (
    <ul className={isOpen ? styles.menuListOpen : styles.menuListClosed}>
    
      <li><Link onClick={toggleList} href="/">Home</Link></li>
    </ul>
  );
}
