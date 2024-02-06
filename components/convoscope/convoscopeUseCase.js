import React from 'react';

import convoImage from '../../public/images/macPlaceHolder.png'

import Header from '../useCaseGenerics/header';
import Overview from '../useCaseGenerics/overview';

import oStyles from "../useCaseGenerics/overvievw.module.css";
import styles from "./convoscopeUseCase.module.css";

const overviewTextP1= <div>Students in the MIT Media Lab wanted more information at their fingertips when having conversations with peers, and when listening to research presentations.</div>;

const overviewTextP2= <div>I paired with researchers at MIT media lab to create a tool to aid in
    <span className={oStyles.emphais}> seamlessly surfacing additional information during lab meetings.</span>
</div>;
                
const overviewTextP3= <div> I worked on the end-to-end design of the desktop application. Our app was presented and used at MIT, 
    <span className={oStyles.emphais}> meaningfully improved the quality of research conversations, </span>
    and is currently being adapted for use with AR by Team Open Smart Glasses.
</div>

const overviewTextFull= <p className={oStyles.body}>{overviewTextP1} <br/> {overviewTextP2} <br/> {overviewTextP3}</p>;


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
        </div>
    );
};

//                 