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
import Navbar from "../../components/CardsLandingPageComponets/elements/Navbar";

import FadeLeft from "../../components/CardsLandingPageComponets/animations/FadeLeft";
import ZoomIn from "../../components/CardsLandingPageComponets/animations/ZoomIn";
import Footer from "../../components/CardsLandingPageComponets/elements/Footer";
import FadeRight from "../../components/CardsLandingPageComponets/animations/FadeRight";
import Translate from "../../components/TranslateComponents/index";

import Video1 from "../../components/CardsLandingPageComponets/cards/Videos/Video1";
import Video2 from "../../components/CardsLandingPageComponets/cards/Videos/Video2";
import Video3 from "../../components/CardsLandingPageComponets/cards/Videos/Video3";

export default function PageInitial() {
  const alertRef = useRef(null);
  useEffect(() => {
    AOS.init();
  });

  const translate = localStorage.getItem("translate") || "eng";
  const footerLinks = [
    {
      title: Translate.getText("title", translate),
      links: [
        { text: "Benhur Feld", href: "#" },
        { text: "Renato Mendes", href: "#" },
        { text: "Eliana Almeida", href: "#" },
      ],
    },
    {
      title: Translate.getText("title22", translate),
      links: [
        { text: "Pydiagram", href: "#" },
        { text: "Backend", href: "#" },
        { text: "Website", href: "#" },
      ],
    },
  ];

  const topics1card1 = [
    Translate.getText("topics1card1", translate),
    Translate.getText("topics2card1", translate),
  ];
  const topics1card5 = [
    Translate.getText("topics1card5", translate),
    Translate.getText("topics2card5", translate),
  ];
  const topics1card7 = [
    Translate.getText("topics1card7", translate),
    Translate.getText("topics2card7", translate),
    Translate.getText("topics3card7", translate),
  ];

  return (
    <>
      <AlertComponents ref={alertRef} />
      <div className={styles.body}>
        <div className={styles.body__content}>
          <Navbar />
          {/* <Responsive> */}
          <ZoomIn duration={1500}>
            <Default
              header={Translate.getText("headercard1", translate)}
              subheader={Translate.getText("subheadercard1", translate)}
              // button="See details"
              button={Translate.getText("buttoncard1", translate)}
              topics={topics1card1}
            />
          </ZoomIn>
          <ZoomIn duration={1500}>
            <Blob
              header={Translate.getText("headercard2", translate)}
              subheader={Translate.getText("subheadercard2", translate)}
              // button={"Open an Account"}
              button={Translate.getText("buttoncard2", translate)}
              background={blob_bakcground}
              width={"39.0625rem"}
              height={"30.17706rem"}
            />
          </ZoomIn>
          <ZoomIn duration={1500}>
            <Video1 />
          </ZoomIn>
          <FadeLeft duration={1000}>
            <Forms header={Translate.getText("headercard3", translate)} />
          </FadeLeft>
          <FadeLeft duration={1000}>
            <Feedback
              owner={"Benhur Feld"}
              type={"Praise"}
              text={Translate.getText("text3", translate)}
            ></Feedback>
          </FadeLeft>
          <FadeLeft duration={1000}>
            <Feedback
              owner={"Benhur Feld"}
              type={"Praise"}
              text={Translate.getText("text4", translate)}
            ></Feedback>
          </FadeLeft>

          <FadeRight duration={1000}>
            <Default
              header={Translate.getText("headercard5", translate)}
              subheader={Translate.getText("subheadercard5", translate)}
              // button="See details"
              button={Translate.getText("buttoncard1", translate)}
              topics={topics1card5}
            />
          </FadeRight>
          <FadeRight duration={1000}>
            <Default
              header={Translate.getText("headercard6", translate)}
              subheader={Translate.getText("subheadercard6", translate)}
              // button="See details"
              button={Translate.getText("buttoncard1", translate)}
              topics={topics1card7}
            />
          </FadeRight>

          <FadeRight duration={1500}>
            <Video2 />
          </FadeRight>

          <FadeLeft duration={1000}>
            <Blob
              header={[
                Translate.getText("header1card8", translate),
                <br key="break2" />,
                Translate.getText("header2card8", translate),
              ]}
              subheader={[
                Translate.getText("subheader1card8", translate),
                <br key="break2" />,
                Translate.getText("subheader2card8", translate),
                <br key="break2" />,
                Translate.getText("subheader3card8", translate),
              ]}
              // button={"See Charts"}
              button={Translate.getText("buttoncard8", translate)}
              background={big_blob_bakcground}
              width={"50.88063rem"}
              height={"30.17706rem"}
            />
          </FadeLeft>

          <FadeLeft duration={1500}>
            <Video3 />
          </FadeLeft>
          {/* </Responsive> */}
          <Footer
            leftTitle="PYDIAGRAM"
            leftSubtitle={Translate.getText("leftSubtitle", translate)}
            buttonText={Translate.getText("buttonText", translate)}
            linksData={footerLinks}
          />
        </div>
      </div>
    </>
  );
}
