import styles from "./styles.module.scss";
import Button from "../Button";

const Footer = ({ leftTitle, leftSubtitle, buttonText, linksData }) => {
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
            width={"8.54513rem"}
            height={"2.17944rem"}
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
