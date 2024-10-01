import styles from "./styles.module.scss";
import Button from "../Button";

import { useEffect, useState } from "react";

const Footer = ({ leftTitle, leftSubtitle, buttonText, linksData }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const width = windowWidth < 810 ? "16.8793vw" : "7.12094vw";
  const height = windowWidth < 810 ? "4.30507vw" : "1.8162vw";

  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__left_content}>
          <div className={styles.footer__left_content__title}>{leftTitle}</div>
          <div className={styles.footer__left_content__subtitle}>
            {leftSubtitle}
          </div>
          <Button
            text={buttonText}
            width={width}
            height={height}
            theme={"dark"}
          />
        </div>
        <div className={styles.footer__right_content}>
          {linksData.map((section, index) => (
            <div key={index} className={styles.footer__links_section}>
              <div className={styles.footer__links_section__title}>
                {section.title}
              </div>
              <div className={styles.footer__links_section__list}>
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    className={styles.footer__links_section__list__item}
                    href={link.href}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
