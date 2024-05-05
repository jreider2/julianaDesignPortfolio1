import React, { useState, useEffect } from 'react';
import Image from "next/image";

import eye from '../../public/images/eye.png'
import speakerIcon from '../../public/images/SpeakerIcon.png'
import bookOpen from '../../public/images/book-open.png'
import alertIcon from '../../public/images/alert-triangle.png'
import eyeOffIcon from '../../public/images/eye-off.png'
import folderIcon from '../../public/images/folder.png'
import processHorizontal from '../../public/images/processHorizontal2.png'
import processVertical from '../../public/images/processVertial2.png'
import artifactsIcon from '../../public/images/artifactsIcon.png'
import feedbackIcon from '../../public/images/feedbackIcon.png'
import thumbsDownIcon from '../../public/images/thumbsDownIcon.png'
import thumbsUpIcon from '../../public/images/thumbsUpIcon.png'
import styleTyleMain from '../../public/images/StyleTile.png'
import tempImg from '../../public/images/mainScrene.png'
import dataPic1 from '../../public/images/dataViz.png'
import speakerHighlight from '../../public/images/speakerHighlight.png'
import participantView from '../../public/images/participantView.png'
import teaserImage from '../../public/images/TeaserImage.png'
import convoPersona from '../../public/images/ResearcherPersona.png'
import wireframes from '../../public/images/wireframes2.png'
import branding from '../../public/images/brandingConvo.png'
import itterationsGreen from '../../public/images/itterationsGreen.png'
import firstPassBlue from '../../public/images/firstPassBlue.png'
import firstPassGreen from '../../public/images/firstPassGreen.png'
import beforeContrast from '../../public/images/beforeContrast.png'
import statsInWords from '../../public/images/statsInWords.png'
import transcriptBefore from '../../public/images/transcriptBefore.png'
import agentsBefore from '../../public/images/agentsBefore.png'
import agentsAFter from '../../public/images/agentsAFter.png'
import data1 from '../../public/images/data1.png'
import data2 from '../../public/images/data2.png'
import data3 from '../../public/images/data3.png'
import data4 from '../../public/images/data4.png'
import heyConvo from '../../public/images/heyConvo.png'
import landingPage from '../../public/images/landingPage.png'
import speakerView from '../../public/images/speakerView.png'
import webpage from '../../public/images/webpage.png'

import Header from '../useCaseGenerics/header';
import Overview from '../useCaseGenerics/overview';
import SectionTopper from '../useCaseGenerics/sectionTopper';
import Card from '../useCaseGenerics/card';
import Box from '../useCaseGenerics/box';
import NumberedList from '../useCaseGenerics/numberedList';
import BackButton from '../useCaseGenerics/backButton';

import styles from "./useCase.module.css";

// data
import { text } from '../constants/cometConstants.js';
import { takeaways, overviewTextFull, boarder, boarder2} from '../constants/convoscopeConstants';


export default function CometUseCase(){
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
                heading="Comet" 
                subheading="Reimagining the source code management experience."
                // image={testVid}
                image={teaserImage}
                />
            <Overview
                myRole="Product Designer – "
                responsibilities="UX Design, Visual Design, Information Architecture, User Flows, User Research"
                timeline="Q4 2024"
                status="MVP Design Complete"
                team={<div>Me, Myself, and I
                </div>}
                overviewText={text}
            />

            {boarder}

            <SectionTopper
                sectionTitletxt="The Problem"
                sectionSubtitleTxt="Using git CLI can be fraught, confusing, and downright annoying."
                topParagraphHTML={<div className={'bodyText'}>And yet, source control is a necessary tool used everyday by most software engineers and is <span className={`emphasis`}>essential to master</span> as an SE student. Many of our users were <span className={`emphasis`}>fed up with existing tooling</span> and found git onerous. They felt git CLI was clunky when performing actions such as undoing mistakes, managing stashes, and viewing committed or staged changes.</div>}
            />

            {boarder}

            <SectionTopper
                sectionTitletxt="Highlights"
                sectionSubtitleTxt="The power you need coupled with the ease you desire."
                topParagraphHTML={<div className={'bodyText'}>With ConvoScope, users don’t waste time entering requests into a search tool. When activated, 
                    the tool listens to the users’ conversation and, with the help of AI, automatically outputs 
                    succinct information, aiding in a <span className={`emphasis`}>approachable, forgiving and straightforward.</span></div>}
            />

            <Card
                p1= {<div><span className={`emphasis`}>Branch Management Dropdown -</span> In Comet it’s simple to find all the actions related to branch management in one place.</div> }
                // bullet1="AI listens to conversation"
                // bullet2="Surfaces relevant information"
                image1={tempImg}
                //image2={dataPic1}
                // video1="/video/cardFlowStartVid.mp4"
                bullets={null}
            >
                <div className={`bodyText ${styles.cardBody2}`}>
                    <div>In the branch dropdown users can view the current branch, checkout any existing branch, create a new branch or merge branches.</div>
                </div>
            </Card>

            {/* Speaker mode icons  */}
            <div className={`${styles.speakerModsWrapper}`}>
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
                    <div className={`emphasis ${styles.modeTitle}`}>Forem ipsum</div>
                    <div className={`bodyText ${styles.modeBody}`}>Forem ipsum dolor<br/>Fsit amet consectetur</div>
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
                    <div className={`emphasis ${styles.modeTitle}`}>Forem ipsum</div>
                    <div className={`bodyText ${styles.modeBody}`}>Forem ipsum dolor<br/>Forem ipsum dolor sit
                    </div> 
                </div>
            </div>

            <Card
                p1= {<div><span className={`emphasis`}>Easy Undo–</span>  If a mistake is made, it’s quick to undo it via the undo button. This is an alternative to looking up less frequently used git commands and hoping to avoid unintentionally destructive git commands that sometimes can be stumbled over.</div> }
            >
                <div className={styles.imageWrapper2}>
                    <Image
                        src={speakerHighlight}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2}`}>
                    <div><span className={`emphasis`}>Undo Context Menu–</span> Upon reviewing the commit history, it’s simple revert or rename commits.</div>
                </div>

                <div className={styles.imageWrapper2}>
                    <Image
                        src={participantView}
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
                sectionSubtitleTxt="A detective story for the ages."
                topParagraphHTML={<div className={'bodyText'}>To truly understand my users and avoid assumptions based on personal experience, I conducted interviews, and iteratively refined the design using user feedback. I interviewed engineers at various skill levels to<span className={`emphasis`}> identify friction points</span>  for both beginners and advanced git users, exploring whether their challenges intersected.</div>}
            />

            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={styles.sectionSubheading}>
                    Questions Included
                </div>

                <div className={`bodyText ${styles.indent} ${styles.marginTop2}`}>
                • Tell me how you accomplish source code management today.<br />
                • What is the hardest thing about your current workflow?<br />
                • What do you do to solve this problem for yourself today?<br />
                </div>
                <br />
                <br />
                <div className={styles.sectionSubheading}>
                Key quotes
                </div>

                <div className={`bodyText ${styles.indent} ${styles.marginTop2}`}>
                • I need to quickly use git so I can shift focus to more important tasks.<br />
                • There are no guard rails for the [git CLI]. I’m always wondering what is best practice. <br />
                • I have to look up syntax all the time.<br />
                • Version control wasn't taught in school. It was just expected that we know how to do it. <br />
                </div>
            </div>

            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={styles.sectionSubheading}>
                    Main Insight
                </div>
            </div>
            <Card
            className={`${styles.marginTop3}`}>
                <div className={`${styles.cardCallout} ${styles.marginBottom2} ${styles.marginTop}`}>
                Git is a means to an end. It is a tool used to get the more important deep work done. It should be quick, <span className={`${styles.whiteTxt}`}>easy to leverage, and as frictionless process as possible.</span>
                </div>
            </Card>

            <div className={`sectionOutterContainer ${styles.marginTopNone}`}>
                <div className={styles.sectionSubheading}>
                    Additional Insights
                </div>

                <div className={`bodyText ${styles.marginTop2}`}>
                Morem ipsum dolor sit amet, consectetur adipiscing elit <span class="emphasis"> CHANGE ICONS BELOW.</span>
                </div>
            </div>

            <Box className={styles.marginTop2} txt='<span className={overviewStyles.emphasis}>Git is hard to learn and master.</span> Users had difficulty remembering Git commands and sequences, especially infrequently used commands or when learning git for the first time.' icon={bookOpen}>
            </Box>
            <Box className={styles.marginTopSlim} txt='<span className={overviewStyles.emphasis}>Undoing mistakes</span> with git CLI can be arduous and cause trepidation.' icon={alertIcon}>
            </Box>
            <Box className={styles.marginTopSlim} txt='<span className={overviewStyles.emphasis}>The CLI tucks away info that users want quick access too.</span> For example, which files that are staged, or already committed. This style makes it difficult to see line by line code changes in the current WIP or in the user’s history.' icon={eyeOffIcon}>
            </Box>
            <Box className={styles.marginTopSlim} txt='<span className={overviewStyles.emphasis}>Want to be able to manage stashing and stashes easily and quickly.</span> Stashing is annoying but necessary for in many cases.' icon={folderIcon}>
            </Box>
            <Box className={styles.marginTopSlim} txt='FIX THE STYLING<span className={overviewStyles.emphasis}> Need to see current changes at a glance Something.</span>' icon={folderIcon}>
            </Box>

            {/* Persona Title */}
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading} ${styles.marginBottom}`}>
                    Research Collation
                </div>
                
            </div>{/* Persona image */}
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={convoPersona}
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
                sectionSubtitleTxt="Go slow to go fast."
                topParagraphHTML={<div className={'bodyText'}>First, I had to clarify which features should make it into the MVP. Then I moved onto quick iterations of designs.</div>}
            />

           {/* User Flows */}
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={styles.sectionSubheading}>
                    User Flows
                </div>
                <div className={`bodyText ${styles.marginTop2}`}>Leveraging detailed user insights, I identified the most common and essential use case flows. I also documented <span class="emphasis">  sequences in which actions were typically taken</span> so I could create an application that fit into the existing workflow.
                </div>
            </div>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={wireframes}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`bodyText ${styles.marginTop2}`}>
                Building out these flows in visual graphs helped me start to conceptualize the possible the information architecture of the application. I wanted to ensure the IA was intuitive and would <span class="emphasis"> minimize flow disruption.</span>
                </div>
            </div>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={wireframes}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`bodyText ${styles.marginTop2}`}>
                Once I understood the flows, I mapped out a spectrum of feature priorities from high to low. This process also clarified which features were vital and which could be deferred.
                </div>
            </div>


            {/* Minimal Lo-fi Sketches*/}
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading} ${styles.marginBottom}`}>
                Minimal Lo-fi Sketches
                </div>
            </div>{/* Wireframes image */}
            
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={wireframes}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>

            <div className={`sectionOutterContainer`}>
                <div className={`bodyText ${styles.marginTop2}`}>
                With a clear vision of the MVP featureset and typical use cases in mind, I began with rapid, hand-drawn sketches to maintain flexibility before moving on to low-fidelity wireframes in Figma. This approach allowed for quick comparisons and adjustments, optimizing the design process.
                </div>
            </div>

            {/* Wireframes Title */}
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading} ${styles.marginBottom}`}>
                    Wireframes
                </div>
            </div>{/* Wireframes image */}
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={wireframes}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            <div className={`sectionOutterContainer`}>
                <div className={`bodyText`}>
                Next steps were wireframes to to play with the design in a more detailed manor.
                </div>
            </div>
            

            {/* Iterations and deliverables Infographic*/}
            <div className={`sectionOutterContainer ${styles.marginTop5}`}>
                <div className={`${styles.sectionSubheading} ${styles.marginBottom}`}>
                    Iterations and Deliverables
                </div>
            </div>
            <div className={`${styles.speakerModsWrapper} ${styles.marginBottomNone} ${styles.marginTop5} ${styles.marginVpTopSmall}`}>
                <div className={styles.middleModContainner}>
                    <div className={`${styles.sModsPicContainer} ${styles.modHeightLimit}`}>
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
                    <div className={`emphasis ${styles.modeTitle}`}>Design Files</div>
                    <div className={`bodyText ${styles.modeBody}`}>Utilized Figma and FigJam for<br/>all design artifacts</div>
                </div>
                <div className={styles.middleModContainner}>
                    <div className={`${styles.sModsPicContainer} ${styles.modHeightLimit}`}>
                        <Image
                            src={feedbackIcon}
                            alt="Use Case Image"
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain"
                            }} />
                    </div>
                    <div className={`emphasis ${styles.modeTitle}`}>Iterative Feedback</div>
                    <div className={`bodyText ${styles.modeBody}`}>Gathered continuous feedback<br/>from users
                    </div> 
                </div>
            </div>

            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading} `}>
                    Process
                </div>
            </div> {/*Process image infographic  */}
            <div className={`${styles.imageWrapper2} ${styles.marginSides1} ${styles.marginBottomNone} ${styles.processContainer}`}>
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

            {/* {boarder} */}
            {boarder2}

            <SectionTopper
                sectionTitletxt="Initial Directions"
                sectionSubtitleTxt="From general to specific."
                topParagraphHTML={<div className={'bodyText'}>I started the brainstorming by jotting down as many varied descriptors as possible, letting it be a stream of consciousness exercise. There was no wrong answer. From that larger list of general adjectives, I grabbed the ones that had potential, and gathered them into themes.  </div>}
            />

            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={branding}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>

            <div className={`sectionOutterContainer`}>
                <div className={`bodyText`}>
                Narrowing down the list still further, I landed on the descriptors of Powerful, Sleek, and Approachable. I then used these words to focus and guide my styling
                </div>
            </div>

            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading} `}>
                Color + Theme
                </div>
            </div> 

            {/* Styles and design language */}
            <Card
                p1= {<div><span className={`emphasis`}>Sleek– </span> I opted for the light theme, over a dark one, to evoke an atmosphere of simplicity and, in turn, create an impression of ease of use.</div>}
                className={`${styles.marginBottomNone}`}
            >
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={firstPassGreen}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2}`}>
                    <div>The light, bright theme, coupled with the design’s general spaciousness, imparts an air of sleek cleanliness and reflects organization and reliability. The lack of clutter was also an attempt to minimize distraction, given as this app is a means to an end.</div>
                </div>

                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={firstPassBlue}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}>Powerful–</span><br />
                • Straight lines and overall limited use of rounded corners <br />
                • A feeling of something serious with structure<br />
                • Comes across as dynamic and powerful </div>
                </div>
                
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={itterationsGreen}   
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}>Approachable</span> I chose  pink and purple specifically for approachability, keeping in mind the users that were new to source control in general. 
                    <br/><br/>
                    The colors were also chosen for their contrast against the structural elements, aiding in drawing the user’s eyes to things like CTAs and other interactive elements. </div>
                </div>
            </Card>

            {boarder}

            <SectionTopper
                sectionTitletxt="Testing + Improvements"
                sectionSubtitleTxt="When you really want great design, you will find it waiting for you—after many revisions."
                topParagraphHTML={<div className={`bodyText`}>To create the optimal product, it's crucial to actively listen to, and prioritize user feedback.<span className={`emphasis`}> Throughout the design process, I made strategic updates </span>based on this input to maximize the product's impact. Below are some key improvements made during these iterations.</div>}
            />

            {/* Before and After: Primary CTA Button */}
            <div className={`sectionOutterContainer ${styles.marginTop5}`}>
                <div className={`${styles.sectionSubheading}`}>
                    Primary CTA Button
                </div>
            </div>
            <Box className={`${styles.marginTop2}`} txt={<><span className={`emphasis`}>Before: </span> The large saturated commit button, which was the main CTA for the changes screne, was actually drawing too much focus it reached the level of distracting. </>} icon={thumbsDownIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={beforeContrast}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            <Box className={`${styles.marginTop}`} txt={<><span className={`emphasis`}>After: </span>I made the CTA smaller. This allowed for a balance to be struck. The eye was still drawn to the primary CTA without it being overly distracting.</>} icon={thumbsUpIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={statsInWords}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            
            {/* Before and After: Streamling the tree design*/}
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading}`}>
                Streamling the tree design
                </div>
            </div>
            <div className={`sectionOutterContainer`}>
                <div className={`bodyText`}>
                Initially I assumed the users would want to look at a visual representation of the tree of the various versions, which can show exactly when branches were forked off of other branches and when and which branches they were merged back into.
                </div>
            </div>

            <Box className={`${styles.marginTop2}`} txt={<><span className={`emphasis`}>Before: </span> I included a graphical representation of the tree branches of all the forks for a given repository, available in the commit history screen.</>} icon={thumbsDownIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={agentsBefore}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            <Box className={`${styles.marginTop}`} txt={<><span className={`emphasis`}>After: </span> Later, I saw that much the info portrayed in the tree went used. Therefore, I represented the remaining relevent data in a more simplified sleek mannor instead.</>} icon={thumbsUpIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={agentsAFter}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>


            {/* Before and After: Clean it up */}
                        <div className={`sectionOutterContainer ${styles.marginTop5}`}>
                <div className={styles.sectionSubheading}>
                color Refinement
                </div>
            </div>
            <Box className={`${styles.marginTop2}`} txt={<><span className={`emphasis`}>Before: </span>The colors in light mode were too saturated and distracting.</>} icon={thumbsDownIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={transcriptBefore}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            <Box className={`${styles.marginTop}`} txt={<><span className={`emphasis`}>After:</span>  I brightened up the colors which better reflected my themes of sleekness and approachability.</>}  icon={thumbsUpIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={tempImg}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            <Box className={`${styles.marginTop2}`} txt={<><span className={`emphasis`}>Before: </span>the code background was the same color as the commit panel background. But the UI felt muddled overall.</>} icon={thumbsDownIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={transcriptBefore}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            <Box className={`${styles.marginTop}`} txt={<><span className={`emphasis`}>After:</span> I landed on a brighter look that made the app feel sharper overall.</>}  icon={thumbsUpIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={tempImg}
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
                sectionTitletxt="Final Design"
                sectionSubtitleTxt="I was proud of what I had created."
                topParagraphHTML={<div className={`bodyText`}><span className={`emphasis`}></span>After many iterations and experimentations, here are some of the elements I wish to highlight.</div>}
            />
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={styles.sectionSubheading}>
                    Major Screens
                </div>
            </div>

            {/* 5 major screens */}
            <Card
                p1= {<div><span className={`emphasis`}>Landing Page– </span> Start a new session or view archive of past sessions.</div> }
            >
                <div className={`${styles.imageWrapper2} ${styles.marginBottom2}`}>
                    <Image
                        src={landingPage}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}>Data Visualizations–</span> Make statistics and data display in a more visual format for quicker consumption. </div>
                </div>
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={data1}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={data2}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={data3}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>
                <div className={`${styles.imageWrapper2} `}>
                    <Image
                        src={data4}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}>Hey Convo–</span> Ask convo anything!</div>
                </div>
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={heyConvo}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}>See More Info–</span> Click the "More" button for a card to display the source webpage.</div>
                </div>
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={webpage}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}>Speaker View–</span> Participants only see info the speaker selects.</div>
                </div>
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={speakerView}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>                    


                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}>Sign Up–</span> Sign Up Flow and First time Use. </div>
                </div>
                <div className={`${styles.imageWrapper2} ${styles.marginBottom2}`}>
                    {/* <Image
                        src={tempImg}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} /> */}

                    <video controls autoplay loop muted width="100%" height="auto">
                        <source src="/video/SignUpFlow.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

            </Card>

            <div className={`sectionOutterContainer ${styles.marginTopSlim}`}>
                <div className={styles.sectionSubheading}>
                    Style guide
                </div>
                <div className={`bodyText ${styles.marginTop2}`}>
                I created a style that evoked academia, while also reflecting a moody otherworldly, biological atmosphere requested by the stakeholder. For example, the puffiness of the icons and rounded corners felt more based in nature than harsh edges would. In additon, the font helped<span class="emphasis">  evoke the science fiction vibes that</span> we desired.
                </div>
            </div>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={styleTyleMain}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>

            {/* animations */}
            <div className={`sectionOutterContainer ${styles.marginTop5}`}>
                <div className={styles.sectionSubheading}>
                    Animations
                </div>
                <div className={`bodyText ${styles.marginTop2}`}>
                Annimations were included to both evoke the sense of otherwordliness, and natural phamana, and to <span class="emphasis"> communicate to the user something was happening.</span> First example of this is the "Hey Convo" feature.
                </div>
                <div className={`bodyText ${styles.marginTop2}`}>
                 In order to avoid the user disrupting their flow and resorting to using other tools, such as as search engine, it was essential to have a feature<span class="emphasis">  allowing impromptu questions.</span> The given animation convays the active listening of ConvoScope, inspired by "Hey Siri."
                </div>
            </div>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2} ${styles.marginBottomNone}`}>
                <video controls autoplay loop muted width="100%" height="auto">
                    <source src="/video/HeyConvoVid.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className={`sectionOutterContainer ${styles.marginTop2}`}>
                <div className={`bodyText ${styles.marginTop2}`}>
                An simpler, yet purposeful, annimation is used for the start button during a ConvoScope session. The button pulses like a beating heart to help <span class="emphasis">indicate the session is in progress,</span> even if no cards have apeared yet. The speed was carefully chosen to be slow enough to not be distracting, but fast enough to be noticed.
                </div>
            </div>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2} ${styles.marginBottomNone}`}>
                <video controls autoplay loop muted width="100%" height="auto">
                    <source src="/video/pulsingVid.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className={`sectionOutterContainer ${styles.marginTop2}`}>
                <div className={`bodyText ${styles.marginTop2}`}>
                Another animation worth discussion is on the login screen. The main purpose here is to use an animation inspired by heavenly bodies to <span class="emphasis"> set the tone of the application</span> immediately. The same animation is used at the start of every session.
                </div>
            </div>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2} ${styles.marginBottomNone}`}>
                <video controls autoplay loop muted width="100%" height="auto">
                    <source src="/video/LoginAnimation.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {boarder}

            <SectionTopper
                sectionTitletxt="Reflections"
                sectionSubtitleTxt="Learn by Doing."
                topParagraphHTML={<div className={`bodyText`}>During this design project, I grew my skills an incredible amount. From components, to finding the middle ground with stakeholders,<span className={`emphasis`}> my mind is awash with possibilities </span>for the future.</div>}
            />

            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={styles.sectionSubheading}>
                Take-aways
                </div>

                <div className={`bodyText ${styles.indent} ${styles.marginTop2}`}>
                {/* insert numbered list here */}
                        <NumberedList takeaways={takeaways}>
                        </NumberedList>
                </div>
            </div>

            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={styles.sectionSubheading}>
                    Smart Glasses, Here I Come
                </div>
            </div>
            <Card className={`${styles.marginBottomNone}`}
            >
                <div className={`${styles.cardCallout} ${styles.marginBottom2} ${styles.marginTop}`}>
                The next iteration will involve creating a <span className={`${styles.whiteTxt}`}>smart glasses</span> interface. <span className={`${styles.whiteTxt}`}>I’m pumped for my next learning journey!</span>
                </div>
            </Card>
            {/* <div className={`sectionOutterContainer ${styles.marginTopNone}`}>
                <div className={`bodyText ${styles.marginTop2}`}>
                Smart glasses require highly focused design work in a constrained environment. Finding ways of <span class="emphasis"> emphasizing hierarchy </span> through spacing, emphasis, and visual interest will be essential.
                </div>
            </div> */}

            {/* {boarder} */}

            <BackButton />

            {/* <TeaserCard title="Thought Filter" description="First designer for a B2B content marketing SaaS tool." image="/images/macx2.png" link={"/thoughtFilter"}></TeaserCard> */}

        </div>
    );
};