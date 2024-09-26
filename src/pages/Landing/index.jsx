import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.scss";
import AlertComponents from "../../components/AlertComponents";
import React, { useRef, useEffect } from "react";

import blob_bakcground from "../../assets/blob.svg";
import big_blob_bakcground from "../../assets/big_blob.svg";

import Blob from "../../components/CardsLandingPageComponets/cards/Blob";
import Default from "../../components/CardsLandingPageComponets/cards/Default";
import Forms from "../../components/CardsLandingPageComponets/cards/Feedbacks/Forms";
import Feedback from "../../components/CardsLandingPageComponets/cards/Feedbacks/Feedback";
import Video1 from "../../components/CardsLandingPageComponets/cards/Videos/Video1";
import Video2 from "../../components/CardsLandingPageComponets/cards/Videos/Video2";
import Video3 from "../../components/CardsLandingPageComponets/cards/Videos/Video3";

import Navbar from "../../components/CardsLandingPageComponets/elements/Navbar";
import Footer from "../../components/CardsLandingPageComponets/elements/Footer";

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
        { text: "Benhur Feld", href: "#" },
        { text: "Renato Mendes", href: "#" },
        { text: "Eliana Almeida", href: "#" },
      ],
    },
    {
      title: Translate.getText("title22", language),
      links: [
        { text: "Pydiagram", href: "#" },
        { text: "Backend", href: "#" },
        { text: "Website", href: "#" },
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
              width={"32.5520833333vw"}
              height={"25.14755vw"}
            />
          </ZoomIn>
          <ZoomIn duration={1500}>
            <Video1 />
          </ZoomIn>
          <FadeLeft duration={1000}>
            <Forms header={Translate.getText("headercard3", language)} />
          </FadeLeft>
          <FadeLeft duration={1000}>
            <Feedback
              owner={"Benhur Feld"}
              type={"Praise"}
              text={Translate.getText("text3", language)}
            ></Feedback>
          </FadeLeft>
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
            <Video2 />
          </FadeRight>

          <FadeLeft duration={1000}>
            <Blob
              header={[
                Translate.getText("header1card8", language),
                <br key="break2" />,
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
              height={"25.14755vw"}
            />
          </FadeLeft>

          <FadeLeft duration={1500}>
            <Video3 />
          </FadeLeft>
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
