// TestComponents.jsx

import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

function TestComponents() {
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsFilled(true);
    }, 100); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
    <div className="loader-container">
      <div className={styles.loader}>
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="35.000000pt"
          height="35.000000pt"
          viewBox="0 0 225.000000 225.000000"
          preserveAspectRatio="xMidYMid meet"
          className={styles["svg-fill"]}
        >
          <g
            transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              className={isFilled ? styles["path-animation"] : ""}
              d="M975 2239 c-366 -46 -713 -302 -870 -642 -136 -294 -136 -650 0 -944 103 -224 306 -430 529 -538 557 -270 1232 -36 1501 520 181 372 140 825 -103 1151 -251 337 -643 504 -1057 453z m250 -99 c175 -20 318 -71 456 -161 364 -239 540 -684 434 -1101 -80 -318 -324 -591 -627 -705 -127 -48 -223 -65 -363 -65 -140 0 -236 17 -363 65 -477 179 -755 710 -627 1202 107 411 456 715 876 764 105 12 114 12 214 1z"
              style={{
                strokeDasharray: isFilled ? "1000" : "0",
                strokeDashoffset: isFilled ? "1000" : "0",
              }}
            />
            <path
              className={isFilled ? styles["path-animation"] : ""}
              d="M611 1790 c-210 -166 -325 -402 -325 -665 0 -262 116 -500 325 -665 40 -31 59 -40 90 -40 l39 0 0 195 0 195 385 0 385 0 0 -195 0 -195 39 0 c31 0 50 9 90 40 434 343 435 986 2 1328 -42 33 -61 42 -92 42 l-39 0 0 -195 0 -195 -385 0 -385 0 0 195 0 195 -39 0 c-31 0 -50 -9 -90 -40z m19 -667 l0 -547 -31 30 c-83 78 -166 227 -195 352 -21 87 -21 247 0 334 19 81 62 179 107 245 32 45 107 133 115 133 2 0 4 -246 4 -547z m1129 379 c65 -110 93 -208 99 -344 5 -140 -12 -229 -64 -339 -38 -79 -106 -179 -148 -218 l -26 -24 0 549 1 549 49 -53 c28 -29 68 -83 89 -120z m-249 -377 l0 -215 -385 0 -385 0 0 215 0 215 385 0 385 0 0 -215z"
              style={{
                strokeDasharray: isFilled ? "1000" : "0",
                strokeDashoffset: isFilled ? "1000" : "0",
              }}
            />
          </g>
        </svg>
      </div>
    </div>
    </>
  );
}

export default TestComponents;
