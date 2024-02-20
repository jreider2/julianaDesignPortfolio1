import overviewStyles from "../useCaseGenerics/overview.module.css";
import styles from "../convoScope/useCase.module.css";
import Image from "next/image";

// constants/convoscopeConstants.js
export const takeaways = [
    "First takeaway from the project.",
    "Second insight you gained.",
    "Another important point to remember.",
    // Add as many as needed
  ];
  

const overviewTextP1= "Students in the MIT Media Lab wanted more information at their fingertips when having conversations with peers, and when listening to research presentations.";
const overviewTextP2= <>I paired with researchers at MIT media lab to create a tool to aid in
    <span className={overviewStyles.emphasis}> seamlessly surfacing additional information during lab meetings.</span>
</>;
const overviewTextP3= <> I worked on the end-to-end design of the desktop application.<br/><br/> Our app was presented and used at MIT, 
    <span className={overviewStyles.emphasis}> meaningfully improved the quality of research conversations, </span>
    and is currently being adapted for use with AR by Team Open Smart Glasses.
</>

export const overviewTextFull= <>{overviewTextP1} <br/><br/> {overviewTextP2} <br/><br/> {overviewTextP3}</>;

import borderLinePng from '/public/images/line-8.png';

export const boarder = <div className={`${styles.borderSize} ${styles.imageContainer}`}>
        <Image src={borderLinePng} fill sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "top" }} />
    </div>