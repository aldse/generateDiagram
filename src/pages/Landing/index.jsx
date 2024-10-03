import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.scss";
import AlertComponents from "../../components/AlertComponents";
import React, { useRef, useEffect } from "react";

import blob_bakcground from "../../assets/blob.svg";
import big_blob_bakcground from "../../assets/big_blob.svg";

import background_video from "../../assets/video/gif2.gif";
import integrated_video from "../../assets/video/gif1.gif";
import diagram_video from "../../assets/video/DiagramaEn.mp4";

import Blob from "../../components/cards/Blob";
import Default from "../../components/cards/Default";
import Forms from "../../components/cards/feedbacks/Forms";
import Feedback from "../../components/cards/feedbacks/Feedback";
import Video from "../../components/cards/Videos/Video";
import Gif from "../../components/cards/Videos/Gif";

import Navbar from "../../components/elements/Navbar";
import Footer from "../../components/elements/Footer";

import FadeLeft from "../../components/animations/FadeLeft";
import ZoomIn from "../../components/animations/ZoomIn";
import FadeRight from "../../components/animations/FadeRight";

import Translate from "../../components/TranslateComponents/index";

export default function PageInitial() {
  const alert_ref = useRef(null);
  useEffect(() => {
    AOS.init();
  });

  const language = localStorage.getItem("translate") || "eng";

  const footer_links = [
    {
      title: Translate.getText("title", language),
      links: [
        { text: "Benhur Feld", href: "https://github.com/benhuuur" },
        { text: "Renato Mendes", href: "https://github.com/mendes-11" },
        { text: "Eliana Almeida", href: "https://github.com/aldse" },
      ],
    },
    {
      title: Translate.getText("title22", language),
      links: [
        {
          text: "Pydiagram",
          href: "https://github.com/benhuuur/pydiagram-server",
        },
        {
          text: "Backend",
          href: "https://github.com/mendes-11/generateDiagramaBackend",
        },
        { text: "Website", href: "https://github.com/aldse/generateDiagram" },
      ],
    },
  ];

  const topics1card1 = [
    Translate.getText("topics1card1", language),
    Translate.getText("topics2card1", language),
  ];
  const topics1card5 = [
    Translate.getText("topics1card5", language),
    Translate.getText("topics2card5", language),
  ];
  const topics1card7 = [
    Translate.getText("topics1card7", language),
    Translate.getText("topics2card7", language),
    Translate.getText("topics3card7", language),
  ];

  return (
    <>
      <AlertComponents ref={alert_ref} />
      <div className={styles.body}>
        <Navbar />
        <div className={styles.container}>
          <ZoomIn duration={1500}>
            <Default
              header={Translate.getText("headercard1", language)}
              subheader={Translate.getText("subheadercard1", language)}
              button={Translate.getText("buttoncard1", language)}
              topics={topics1card1}
            />
          </ZoomIn>
          <ZoomIn duration={1500}>
            <Blob
              header={Translate.getText("headercard2", language)}
              subheader={Translate.getText("subheadercard2", language)}
              button={Translate.getText("buttoncard2", language)}
              background={blob_bakcground}
              width={"32.5521vw"}
              height={"25.1475vw"}
            />
          </ZoomIn>
          <ZoomIn duration={1500}>
            <Gif
              background={integrated_video}
              width={"32.5521vw"}
              height={"25.1475vw"}
            />
          </ZoomIn>
          <div className={styles.none}>
            <FadeLeft duration={1000}>
              <Forms header={Translate.getText("headercard3", language)} />
            </FadeLeft>
          </div>
          <div className={styles.none}>
            <FadeLeft duration={1000}>
              <Feedback
                owner={"Benhur Feld"}
                type={"Praise"}
                text={Translate.getText("text3", language)}
              ></Feedback>
            </FadeLeft>
          </div>
          <FadeLeft duration={1000}>
            <Feedback
              owner={"Benhur Feld"}
              type={"Praise"}
              text={Translate.getText("text4", language)}
            ></Feedback>
          </FadeLeft>

          <FadeRight duration={1000}>
            <Default
              header={Translate.getText("headercard5", language)}
              subheader={Translate.getText("subheadercard5", language)}
              button={Translate.getText("buttoncard1", language)}
              topics={topics1card5}
            />
          </FadeRight>
          <FadeRight duration={1000}>
            <Default
              header={Translate.getText("headercard6", language)}
              subheader={Translate.getText("subheadercard6", language)}
              button={Translate.getText("buttoncard1", language)}
              topics={topics1card7}
            />
          </FadeRight>

          <FadeRight duration={1500}>
            <Gif
              background={background_video}
              width={"32.5521vw"}
              height={"25.1475vw"}
              header={Translate.getText("titleCard", language)}
              subheader={Translate.getText("textCard", language)}
              button={Translate.getText("buttonCard", language)}
            />
          </FadeRight>

          <FadeLeft duration={1000}>
            <Blob
              header={[
                Translate.getText("header1card8", language),
                // <br key="break2" />,
                Translate.getText("header2card8", language),
              ]}
              subheader={[
                Translate.getText("subheader1card8", language),
                <br key="break2" />,
                Translate.getText("subheader2card8", language),
                <br key="break2" />,
                Translate.getText("subheader3card8", language),
              ]}
              button={Translate.getText("buttoncard8", language)}
              background={big_blob_bakcground}
              width={"42.400525vw"}
              height={"25.5208333333vw"}
            />
          </FadeLeft>

          <div className={styles.none}>
            <FadeLeft duration={1500} >
              <Video
                src={diagram_video}
                width={"55.2083333333vw"}
                height={"25.5208333333vw"}
              />
            </FadeLeft>
          </div>
        </div>
        <Footer
          leftTitle="PYDIAGRAM"
          leftSubtitle={Translate.getText("leftSubtitle", language)}
          buttonText={Translate.getText("buttonText", language)}
          linksData={footer_links}
        />
      </div>
    </>
  );
}
