import styles from "./styles.module.scss";
import roberto from "../../assets/Roberto.png";
import logo from "../../assets/logolegenda.png";
import { Image } from "react-bootstrap";

function HomeComponents() {
  return (
    <div className={styles.container}>
      <div className={styles.white}>
      <Image
            src={logo}
            width="700px"
            height="300px"
            className="d-inline-block align-top"
            alt="Logo"
          />
        <div className={styles.imagecontainer}>
          <Image
            src={roberto}
            width="700px"
            height="700px"
            className="d-inline-block align-top"
            alt="Roberto"
          />
        </div>
      </div>
      <div className={styles.blue}></div>
    </div>
  );
}

export default HomeComponents;
