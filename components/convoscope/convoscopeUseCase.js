import React from 'react';

import convoImage from '../../public/images/macPlaceHolder.png'

import Header from '../useCaseGenerics/header';
import Overview from '../useCaseGenerics/overview';

import overviewStyles from "../useCaseGenerics/overvievw.module.css";
import styles from "./convoscopeUseCase.module.css";

const overviewTextP1= "Students in the MIT Media Lab wanted more information at their fingertips when having conversations with peers, and when listening to research presentations.";

const overviewTextP2= <>I paired with researchers at MIT media lab to create a tool to aid in
    <span className={overviewStyles.emphasis}> seamlessly surfacing additional information during lab meetings.</span>
</>;
                
const overviewTextP3= <> I worked on the end-to-end design of the desktop application. Our app was presented and used at MIT, 
    <span className={overviewStyles.emphasis}> meaningfully improved the quality of research conversations, </span>
    and is currently being adapted for use with AR by Team Open Smart Glasses.
</>

const overviewTextFull= <>{overviewTextP1} <br/> {overviewTextP2} <br/> {overviewTextP3}</>;

const borderLinePng = "/images/line-8.png";


export default function ConvoscopeUseCase(){
    return (
        <div className={styles.useCaseContainer}>
            {/* <h1>Convoscope Use Case header test</h1> */}
            <Header 
                heading="ConvoScope" 
                subheading="Designing an experimental AI interface for MIT Media Lab researchers"
                image={convoImage}
                />
            <Overview
                myRole="Lead Product Designer – "
                responsibilities="Interaction Design, UX Design, Visual Design, User Flows, Prototyping"
                timeline="Q3, Q4 2023 Design Stage"
                status="Currently in development"
                team="Ayon Bhattacharya, UX
                Cayden Pierce, PM + SE Lead
                Alex Israelov, Head of Apps
                Kenji Phang, SE"
                overviewText={overviewTextFull}
            />
            {/* <Image
                src={borderLinePng}
                alt="Border line"
                layout="responsive"
                width="608.75" // Example width in pixels
                height="0.625" // Example height in pixels, adjust according to your aspect ratio
            /> */}
        </div>
    );
};