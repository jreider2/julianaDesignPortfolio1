import React, { useState, useEffect } from 'react';
import Image from "next/image";

import convoImage from '../../public/images/macPlaceHolder.png'
import highlightsImage1 from '../../public/images/macPlaceHolder.png'
import eye from '../../public/images/eye.png'
import speakerIcon from '../../public/images/speakerIcon.png'
import bookOpen from '../../public/images/book-open.png'
import alertIcon from '../../public/images/alert-triangle.png'
import eyeOffIcon from '../../public/images/eye-off.png'
import folderIcon from '../../public/images/folder.png'
import processHorizontal from '../../public/images/processVisualHorizontal.png'
import processVertical from '../../public/images/processVisualVertial.png'

import Header from '../useCaseGenerics/header';
import Overview from '../useCaseGenerics/overview';
import SectionTopper from '../useCaseGenerics/sectionTopper';
import Card from '../useCaseGenerics/card';
import Box from '../useCaseGenerics/box';

import overviewStyles from "../useCaseGenerics/overview.module.css";
import styles from "./useCase.module.css";
import cardStyles from "../useCaseGenerics/card.module.css";

const overviewTextP1= "Students in the MIT Media Lab wanted more information at their fingertips when having conversations with peers, and when listening to research presentations.";
const overviewTextP2= <>I paired with researchers at MIT media lab to create a tool to aid in
    <span className={overviewStyles.emphasis}> seamlessly surfacing additional information during lab meetings.</span>
</>;
const overviewTextP3= <> I worked on the end-to-end design of the desktop application. Our app was presented and used at MIT, 
    <span className={overviewStyles.emphasis}> meaningfully improved the quality of research conversations, </span>
    and is currently being adapted for use with AR by Team Open Smart Glasses.
</>
const overviewTextFull= <>{overviewTextP1} <br/> {overviewTextP2} <br/> {overviewTextP3}</>;

import borderLinePng from '/public/images/line-8.png';
const boarder = <div className={`${styles.borderSize} ${styles.imageContainer}`}>
        <Image src={borderLinePng} fill sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "top" }} />
    </div>


export default function ConvoscopeUseCase(){
    const [imageSrc, setImageSrc] = useState(processHorizontal);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 714) {
          setImageSrc(processVertical); // Use the vertical image if the viewport width is less than 700
        } else {
          setImageSrc(processHorizontal); // Otherwise, use the horizontal image
        }
      };
  
      // Set the initial image based on the current window size
      handleResize();
  
      // Add event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Cleanup the event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.useCaseContainer}>
            <Header 
                heading="ConvoScope" 
                subheading="Designing an experimental AI interface for MIT Media Lab researchers."
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

            {boarder}

            <SectionTopper
                sectionTitletxt="The Problem"
                sectionSubtitleTxt="Researchers had trouble surfacing relevant information on-the-fly when discussing unfamiliar or new topics."
                // topParagraphHTML={null}
            />

            {boarder}

            <SectionTopper
                sectionTitletxt="Highlights"
                sectionSubtitleTxt="Information must be easy to access, legible and useful."
                topParagraphHTML={<div className={'bodyText'}>With ConvoScope, users don’t waste time entering requests into a search tool. When activated, 
                    the tool listens to the users’ conversation and, with the help of AI, automatically outputs 
                    succinct information, aiding in a <span className={`emphasis`}>deeper understanding of the topic at hand.</span></div>}
            />

            <Card
                p1= {<div><span className={`emphasis`}>Main screen -</span> Cards flow in from the top, and are pushed out the bottom.</div> }
                // bullet1="AI listens to conversation"
                // bullet2="Surfaces relevant information"
                image1={highlightsImage1}
                image2={highlightsImage1}
                bullets={
                <div className={`bodyText ${styles.bulletContainer}`}>
                        <div>
                            <span className={`emphasis ${styles.marginBottom}`}>Key Features</span><br />
                            • Information is easy to access<br />
                            • Definition of key terms<br />
                            • Fact checks + corrections<br />
                            • Expert opinions<br />
                            • Oppositional theories + more<br />
                        </div>
                        <div>
                            <div className={`emphasis ${styles.marginBottom}`}>Quick to Scan</div><br />
                            • Cards provide visual separation<br />
                            • Limit of 7-12 words per card body<br />
                            • Typography chosen carefully for legibility<br />
                            • Absence of clutter<br />
                            • Throttled quantity of cards produced<br />
                        </div>
                    </div>}
            />

            {/* Speaker mode icons  */}
            <div className={styles.speakerModsWrapper}>
                <div className={styles.middleModContainner}>
                    <div className={styles.sModsPicContainer}>
                        <Image
                            src={speakerIcon}
                            alt="Use Case Image"
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain"
                            }} />
                    </div>
                    <div className={`emphasis ${styles.modeTitle}`}>Speaker Mode</div>
                    <div className={`bodyText ${styles.modeBody}`}>Participants only see cards<br/>selected by the Speaker</div>
                </div>
                <div className={styles.middleModContainner}>
                    <div className={styles.sModsPicContainer}>
                        <Image
                            src={eye}
                            alt="Use Case Image"
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain"
                            }} />
                    </div>
                    <div className={`emphasis ${styles.modeTitle}`}>Default Mode</div>
                    <div className={`bodyText ${styles.modeBody}`}>All participants see the<br/>full set of cards
                    </div> 
                </div>
            </div>

            <Card
                p1= {<div><span className={`emphasis`}>Speaker View–</span> In Speaker Mode, the speaker selects the cards to highlight.</div> }
            >
                <div className={styles.imageWrapper2}>
                    <Image
                        src={highlightsImage1}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2}`}>
                    <div><span className={`emphasis`}>Participant view–</span> Participants will see only the selected cards.</div>
                </div>

                <div className={styles.imageWrapper2}>
                    <Image
                        src={highlightsImage1}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom2}`}>
                    <div>The rationed output will help highlight the most useful information and minimize distractions.</div>
                </div>

            </Card>

            <Card
                p1= {<div><span className={`emphasis`}>“Hey Convo” –</span> Voice interface available for users to ask burning questions.</div> }
            >
                <div className={`${styles.imageWrapper2} ${styles.marginBottom2}`}>
                    <Image
                        src={highlightsImage1}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>
            </Card>

            {boarder}

            <SectionTopper
                sectionTitletxt="Research"
                sectionSubtitleTxt="An empathetic and research driven approach."
                topParagraphHTML={<div className={'bodyText'}>I conducted user interviews, created personas, incrementally iterated on the design,
                integrated SME and user feedback to hone the best product possible.</div>}
            />

            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={styles.sectionSubheading}>
                    Questions Included
                </div>

                <div className={`bodyText ${styles.indent} ${styles.marginTop2}`}>
                • What  is the biggest pain point related to participating in research discussions?<br />
                • What other solutions or workarounds have you tried?<br />
                • What do you like about how you currently solve your pain point?<br />
                • Do you feel this design was made for you? Why or why not?<br />
                • What's the single most important thing we could do to make ConvoScope better?<br />
                </div>
            </div>

            <Card>
                <div className={`${styles.mainInsightTitle} ${styles.marginTop}`}>
                    Main Insight
                </div>
                <div className={`${styles.cardCallout} ${styles.marginBottom2}`}>
                    Current tooling produced <span className={`${styles.whiteTxt}`}>too much irrelevant information</span> to sort through in a timely manor.
                </div>
            </Card>

            <div className={`sectionOutterContainer ${styles.marginTopNone}`}>
                <div className={styles.sectionSubheading}>
                    Additional Insights
                </div>

                <div className={`bodyText ${styles.marginTop2}`}>
                    Users were much more likely to quickly find the info they needed if the output in the app was <span class="emphasis"> collected, curated, and concise.</span>
                </div>
            </div>

            <Box className={styles.marginTop} txt='During discussion students routinely wanted access to supplemental information quickly' icon={bookOpen}>
            </Box>
            <Box className={styles.marginTopSlim} txt='Flow should not be disrupted' icon={alertIcon}>
            </Box>
            <Box className={styles.marginTopSlim} txt='Hide irrelevant information so no time is wasted reading it' icon={eyeOffIcon}>
            </Box>
            <Box className={styles.marginTopSlim} txt='Desire all information to be collected in a single location' icon={folderIcon}>
            </Box>

            {/* Persona Title */}
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading} ${styles.marginBottom}`}>
                    Persona
                </div>
                
            </div>{/* Persona image */}
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={highlightsImage1}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>

            {boarder} 
            
            <SectionTopper
                sectionTitletxt="Ideation"
                sectionSubtitleTxt="Honing in on an impactful solution– step by step."
                topParagraphHTML={<div className={'bodyText'}>Before diving into the more detailed designs, I started with some quick iterations with hand drawn ideas, and moved onto low fidelity wireframes in figma.</div>}
            />

            {/* Minimal Lo-fi Designs Title */}
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading} ${styles.marginBottom}`}>
                    Minimal Lo-fi Designs
                </div>
            </div>{/* Minimal Lo-fi Designs image */}
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={highlightsImage1}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>

            {/* Wire frames Title */}
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading} ${styles.marginBottom}`}>
                    Wire frames
                </div>
            </div>{/* Wire frames image */}
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={highlightsImage1}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>

            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading} ${styles.marginBottom}`}>
                    Iterations and Deliverables
                </div>
                {/* Speaker mode icons  */}
            </div>
            <div className={styles.speakerModsWrapper}>
                    <div className={styles.middleModContainner}>
                        <div className={styles.sModsPicContainer}>
                            <Image
                                src={speakerIcon}
                                alt="Use Case Image"
                                sizes="100vw"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "contain"
                                }} />
                        </div>
                        <div className={`emphasis ${styles.modeTitle}`}>Weekly Demos</div>
                        <div className={`bodyText ${styles.modeBody}`}>Presentations of current designs<br/>and prototypes</div>
                    </div>
                    <div className={styles.middleModContainner}>
                        <div className={styles.sModsPicContainer}>
                            <Image
                                src={eye}
                                alt="Use Case Image"
                                sizes="100vw"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "contain"
                                }} />
                        </div>
                        <div className={`emphasis ${styles.modeTitle}`}>Iterative Feedback</div>
                        <div className={`bodyText ${styles.modeBody}`}>Gathered continuous feedback<br/>from users and devs
                        </div> 
                    </div>
                    <div className={styles.middleModContainner}>
                        <div className={styles.sModsPicContainer}>
                            <Image
                                src={speakerIcon}
                                alt="Use Case Image"
                                sizes="100vw"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "contain"
                                }} />
                        </div>
                        <div className={`emphasis ${styles.modeTitle}`}>Artifacts Delivered</div>
                        <div className={`bodyText ${styles.modeBody}`}>Figma designs, animations,<br/>and style guides</div>
                    </div>  
                </div>
                {/* <div className={styles.speakerModsWrapper}>
                    <div className={styles.middleModContainner}>
                        <div className={styles.sModsPicContainer}>
                            <Image
                                src={speakerIcon}
                                alt="Use Case Image"
                                sizes="100vw"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "contain"
                                }} />
                        </div>
                        <div className={`emphasis ${styles.modeTitle}`}>Artifacts Delivered</div>
                        <div className={`bodyText ${styles.modeBody}`}>Figma designs, animations,<br/>and style guides</div>
                    </div>           
                </div> */}

            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading} `}>
                    Process
                </div>
             </div> {/*Process image infographic  */}
            <div className={`${styles.imageWrapper2} ${styles.marginSides1} ${styles.processImgCon} `}>
                    <Image
                        src={imageSrc}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>

            {boarder}

            <SectionTopper
                sectionTitletxt="Initial Directions"
                sectionSubtitleTxt="The look and feel of the app was undefined as of yet."
                topParagraphHTML={<div className={'bodyText'}>The main stakeholder wanted an other-worldly feel that would also feel like a fit in an academic serious context, but we needed to narrow it down. We started with a branding exercise where we <span className={`emphasis`}> defined and refined</span> our general style direction.</div>}
            />

            {boarder}

            <SectionTopper
                sectionTitletxt="Testing + Improvementst"
                sectionSubtitleTxt="The path of successful design never did run smooth."
                topParagraphHTML={<div className={'bodyText'}>In order to have the best product possible, listening, responding and prioritizing feedback are paramount. During the course of design iterations,<span className={`emphasis`}>  I updated the design based on feedback in order to have the largest impact. </span> Following are a handful of those improvements.</div>}
            />

            {boarder}

        </div>
    );
};