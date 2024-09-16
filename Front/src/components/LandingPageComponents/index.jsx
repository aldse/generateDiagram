import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.scss";
import AlertComponents from "../AlertComponents";
import React, {  useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import blob_bakcground from "../../assets/blob.svg";
import big_blob_bakcground from "../../assets/big_blob.svg";

import Blob from "../CardsLandingPageComponets/cards/Blob";
import Default from "../CardsLandingPageComponets/cards/Default";
import Forms from "../CardsLandingPageComponets/cards/Feedbacks/Forms";
import Feedback from "../CardsLandingPageComponets/cards/Feedbacks/Feedback";
import Navbar from "../CardsLandingPageComponets/elements/Navbar";

import FadeLeft from "../CardsLandingPageComponets/animations/FadeLeft";
import SlideUp from "../CardsLandingPageComponets/animations/SlideUp";
import ZoomIn from "../CardsLandingPageComponets/animations/ZoomIn";
import Footer from "../CardsLandingPageComponets/elements/Footer";
import Responsive from "../CardsLandingPageComponets/Responsive";
import FadeRight from "../CardsLandingPageComponets/animations/FadeRight";
import Translate from "../TranslateComponents/index";

function LandingPageComponents() {
  const alertRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  });

    const footerLinks = [
      {
        title: "Developers Github",
        links: [
          { text: "Benhur Feld", href: "#" },
          { text: "Renato Mendes", href: "#" },
          { text: "Eliana Almeida", href: "#" },
        ],
      },
      {
        title: "Source Code",
        links: [
          { text: "Pydiagram", href: "#" },
          { text: "Backend", href: "#" },
          { text: "Website", href: "#" },
        ],
      },
    ];
    const translate = localStorage.getItem("translate") || "eng";
  return (
        <>
      <AlertComponents ref={alertRef} />
        <div className={styles.body}>
          <div className={styles.body__content}>
            <Navbar />
            {/* <Responsive> */}
            <ZoomIn duration={1500}>
          <Default
            // header="Increase your efficiency with diagram generation"
            header={Translate.getText("headercard1", translate)}
            // subheader="Boost your productivity with our tool designed for fast, dynamic diagram creation."
            subheader={Translate.getText("subheadercard1", translate)}
            // button="See details"
            button={Translate.getText("buttoncard1", translate)}
            // topics={[
            //   "Accelerated Project Timelines",
            //   "Optimized Resource Management",
            // ]}
            topics={[
              {Translate.getText("topics1card1", translate)},
              {Translate.getText("topics2card1", translate)},
             ]}
          />
        </ZoomIn>
        <ZoomIn duration={1500}>
          <Blob
            header={"Transform Your Codebase with Ease"}
            subheader={
              "Transform your code repositories into diagrams to enhance understanding and streamline your workflow. Ensure efficient collaboration and keep your documentation up-to-date with just a few clicks."
            }
            button={"Open an Account"}
            background={blob_bakcground}
            width={"39.0625rem"}
            height={"30.17706rem"}
          />
        </ZoomIn>

        <FadeLeft duration={1000}>
          <Forms header={"Insights and suggestions for project success"} />
        </FadeLeft>
        <FadeLeft duration={1000}>
          <Feedback
            owner={"Benhur Feld"}
            type={"Praise"}
            text={
              "I want to express my appreciation for the excellent work on this project. The results exceeded expectations, demonstrating both high quality and attention to detail. Great job to everyone involved!"
            }
          ></Feedback>
        </FadeLeft>
        <FadeLeft duration={1000}>
          <Feedback
            owner={"Benhur Feld"}
            type={"Praise"}
            text={
              "I want to express my appreciation for the excellent work on this project. The results exceeded expectations, demonstrating both high quality and attention to detail. Great job to everyone involved!"
            }
          ></Feedback>
        </FadeLeft>

        <FadeRight duration={1000}>
          <Default
            header="Visual representation for clarity and collaboration"
            subheader="A visual representation simplifies complex project information,
        supports planning, and tracks progress, enhancing collaboration and
        communication. It ensures clarity and alignment among stakeholders."
            button="See details"
            topics={[
              "Streamlined Workflow and Reduced Errors",
              "Enhanced Collaboration and Iteration",
            ]}
          />
        </FadeRight>
        <FadeRight duration={1000}>
          <Default
            header="Maximizing Project Accuracy and Scalability"
            subheader="Diagrams boost project accuracy and scalability by simplifying
        complex information, enabling precise planning and adjustments. This
        clarity enhances maintenance and overall robustness."
            button="See details"
            topics={[
              "Maintenance and Robustness",
              "Enhanced Scalability for Growing Projects",
              "Improved Accuracy in Documentation",
            ]}
          />
        </FadeRight>

        <FadeLeft duration={1000}>
          <Blob
            header={[
              "Improving Usage Insights",
              <br />,
              "with User Reports and Charts",
            ]}
            subheader={[
              "Visualizing user data through comprehensive graphs and",
              <br />,
              "reports significantly improves insight into project",
              <br />,
              "development.",
            ]}
            button={"See Charts"}
            background={big_blob_bakcground}
            width={"50.88063rem"}
            height={"30.17706rem"}
          />
        </FadeLeft>
        {/* </Responsive> */}
        <Footer
          leftTitle="PYDIAGRAM"
          leftSubtitle="Automates your documentation"
          buttonText="Open an Account"
          linksData={footerLinks}
        />
          </div>
        </div>
    </>
  );
}

export default LandingPageComponents;
