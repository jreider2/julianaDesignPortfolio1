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
import agentsAFter from '../../public/images/agentsAfter.png'
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
import { text, takeaways } from '../constants/thoughtFilterConstants.js';
import { boarder, boarder2} from '../constants/convoscopeConstants';


export default function ThoughtFilterUseCase(){
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
                heading="ThoughtFilter" 
                subheading="Designing an experimental AI interface for MIT Media Lab researchers."
                // image={testVid}
                image={teaserImage}
                />
            <Overview
                myRole="Product Designer – "
                responsibilities="Interaction Design, UX Design, Visual Design, User Flows, User Research, and Prototyping"
                timeline="Q4 2024 Design Stage"
                status="Currently in Development"
                team={<div>Ayon Bhattacharya, SE Architect<br />
                Carrie Pack SME
                </div>}
                overviewText={text}
            />

            {boarder}

            <SectionTopper
                sectionTitletxt="The Problem"
                sectionSubtitleTxt="Freelance copywriters aim to create engaging think pieces, but often spend most of their time on repetitive long tail articles about uninspiring topics."
                topParagraphHTML={<div className={'bodyText'}>And yet, source control is a necessary tool used everyday by most software engineers and is <span className={`emphasis`}>essential to master</span> as an SE student. Many of our users were <span className={`emphasis`}>fed up with existing tooling</span> and found git onerous. They felt git CLI was clunky when performing actions such as undoing mistakes, managing stashes, and viewing committed or staged changes.</div>}
            />

            {boarder}

            <SectionTopper
                sectionTitletxt="Highlights"
                sectionSubtitleTxt="Enhanced workflow efficiency and content quality."
                topParagraphHTML={<div className={'bodyText'}>This tool not only addresses the critical pain points in content marketing, such as keyword optimization and efficient content reuse but also <span className={`emphasis`}>integrates seamlessly</span> into the daily routines of content creators.</div>}
            />

            <Card
                p1= {<div><span className={`emphasis`}>Input Form-</span> This feature includes a form equipped with essential parameters, allowing users to quickly generate keywords and upload relevant research documents. It facilitates a seamless transition to generating your first draft without any friction.</div> }
                // bullet1="AI listens to conversation"
                // bullet2="Surfaces relevant information"
                image1={tempImg}
                //image2={dataPic1}
                // video1="/video/cardFlowStartVid.mp4"
                bullets={null}
            ></Card>

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
                    <div className={`emphasis ${styles.modeTitle}`}>Filter History</div>
                    <div className={`bodyText ${styles.modeBody}`}>Quickly locate old files that<br/>need to be reworked</div>
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
                    <div className={`emphasis ${styles.modeTitle}`}>Search History</div>
                    <div className={`bodyText ${styles.modeBody}`}>Search previous content<br/>by keywords and more
                    </div> 
                </div>
            </div>

            <Card
                p1= {<div><span className={`emphasis`}>Editing-</span> AI-generated suggestions designed to help you refine your document more efficiently.</div> }
                // bullet1="AI listens to conversation"
                // bullet2="Surfaces relevant information"
                image1={tempImg}
                //image2={dataPic1}
                // video1="/video/cardFlowStartVid.mp4"
                bullets={null}
            ></Card>

            <Card
                p1= {<div><span className={`emphasis`}>Project history page–</span> Easily access old content .</div> }
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
                    <div><span className={`emphasis`}>Filter and search–</span> This feature includes a search and filter function on the project history page, enhancing usability. [Gif?]. It's especially useful for content marketers who frequently need to find and refresh older content.</div>
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
                sectionSubtitleTxt="An in-depth exploration into the challenges and workflows of content marketers."
                topParagraphHTML={<div className={'bodyText'}>In this study, I identified typical workflows and key issues. Direct feedback from users  throughout the design process, provided valuable insights.</div>}
            />

            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={styles.sectionSubheading}>
                Workflow Insights
                </div>

                <div className={`bodyText ${styles.indent} ${styles.marginTop2}`}>
                • <span className={`emphasis`}>Content Creation:</span> our target users typically utilize a systematic approach starting from research notes, followed by building structured outlines. <br />
                • <span className={`emphasis`}>Content Reuse:</span> content marketers are constantly asked to refresh old content to ensure quality and relevance.<br />
                • <span className={`emphasis`}>AI Utilization:</span> There is a notable lack of AI tools that effectively integrate keyword optimization without compromising originality.<br />
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
                Content marketers, especially freelancers, face immense pressure to deliver a <span className={`${styles.whiteTxt}`}>high volume of quality content.</span>
                </div>
            </Card>

            <div className={`sectionOutterContainer ${styles.marginTopNone}`}>
                <div className={styles.sectionSubheading}>
                    Key Challenges
                </div>

                {/* <div className={`bodyText ${styles.marginTop2}`}>
                Morem ipsum dolor sit amet, consectetur adipiscing elit <span class="emphasis"> CHANGE ICONS BELOW.</span>
                </div> */}
            </div>

            <Box className={styles.marginTop2} txt='<span className={overviewStyles.emphasis}>Overload:</span> Content marketers, especially freelancers, face immense pressure to deliver a high volume of content (up to 80 pieces per month).' icon={bookOpen}>
            </Box>
            <Box className={styles.marginTopSlim} txt='<span className={overviewStyles.emphasis}>Context Switching:</span> Frequently shifting between different tasks is challenging.' icon={alertIcon}>
            </Box>
            <Box className={styles.marginTopSlim} txt="<span className={overviewStyles.emphasis}>SEO and Keyword Optimization:</span> must balance keyword use while avoiding poaching or stuffing, and keeping up with Google's algorithm." icon={eyeOffIcon}>
            </Box>
            <Box className={styles.marginTopSlim} txt='<span className={overviewStyles.emphasis}>Time Management:</span> Transforming an idea into polished content or the common task of content reuse is time-consuming.' icon={folderIcon}>
            </Box>

            {/* Persona Title */}
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading} ${styles.marginBottom}`}>
                    Persona
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
                sectionSubtitleTxt="Progressing towards a powerful solution through iterative design."
                topParagraphHTML={<div className={'bodyText'}>Before diving into the more detailed designs, I started with some quick iterations with hand drawn ideas, and moved onto low fidelity wireframes in figma. </div>}
            />

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
                Hand-drawn initial concepts. Low-fidelity sketches are used to explore initial ideas quickly.
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
                Before advancing to intricate design concepts, I began with rapid iterations of hand-drawn sketches and progressed to creating low-fidelity wireframes in Figma.
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
                <div className={styles.middleModContainner}>
                    <div className={`${styles.sModsPicContainer} ${styles.modHeightLimit}`}>
                        <Image
                            src={artifactsIcon}
                            alt="Use Case Image"
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain"
                            }} />
                    </div>
                    <div className={`emphasis ${styles.modeTitle}`}>Collaborative Development</div>
                    <div className={`bodyText ${styles.modeBody}`}>Planned a series of meetings with <br/>developers to ensure quality</div>
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
                sectionSubtitleTxt="Ready. Set. Brainstorm!"
                topParagraphHTML={<div className={'bodyText'}>Time for a branding exsercise. I utilized branding exercises to <span className={`emphasis`}>define the application's visual</span> and interactive <span className={`emphasis`}>identity</span> ensuring consistency and alignment with user needs and preferences.</div>}
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

            {/* Styles and design language */}
            <Card
                p1= {<div><span className={`emphasis`}>Honing a design language– </span> I refined the design language of the application through extensive style iterations, focusing on crafting a warm, inviting, and friendly aesthetic that aligns with our branding discussions.</div>}
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
                <div><span className={`emphasis`}>Initial Directions– </span>  I finally landed on this color that is reminiscent of antique Paper or paper in classic books, which aligns with sense of warmth and knowledge I wanted to bring to the product.</div>
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
                    <div> At one point I explored a significantly more playful style, containing more saturated colors and sketch shape graphics, (shown below), but left it behind in favor of more professional style in order to give users a greater confidence in the rigor of the tool and to avoid distracting design that would impede the use of the tool itself.</div>
                </div>
                
                <div className={`${styles.imageWrapper2} ${styles.marginBottom2}`}>
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
            </Card>

            {boarder}

            <SectionTopper
                sectionTitletxt="Testing + Improvements"
                sectionSubtitleTxt="Revise, Revise, Revise."
                topParagraphHTML={<div className={`bodyText`}>To create the optimal product, it's crucial to actively listen to, and prioritize user feedback.<span className={`emphasis`}> Throughout the design process, I made strategic updates </span>based on this input to maximize the product's impact. Below are some key improvements made during these iterations.</div>}
            />

            {/* Before and After: Core Navigation */}
            <div className={`sectionOutterContainer ${styles.marginTop5}`}>
                <div className={`${styles.sectionSubheading}`}>
                Core Navigation
                </div>
            </div>
            <Box className={`${styles.marginTop2}`} txt={<><span className={`emphasis`}>Before: </span> The Navigation was hidden away.</>} icon={thumbsDownIcon}>
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
            <Box className={`${styles.marginTop}`} txt={<><span className={`emphasis`}>After: </span> I  revised the core navigation paradigm to feel more familiar and stable throughout the app.  </>} icon={thumbsUpIcon}>
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


            {/* Before and After: Versioning */}
            <div className={`sectionOutterContainer ${styles.marginTop5}`}>
                <div className={`${styles.sectionSubheading}`}>
                Versioning
                </div>
            </div>
            <Box className={`${styles.marginTop}`} txt={<><span className={`emphasis`}>After:</span> Put emphasis on the current work instead of the full set of variations since I determined that was more valuable for the users.</>}  icon={thumbsUpIcon}>
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
            

            {/* Before and After: Editing improvements*/}
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading}`}>
                Editing improvements
                </div>
            </div>
            <Box className={`${styles.marginTop2}`} txt={<><span className={`emphasis`}>Before: </span> Manual and didn’t take advantage of the power of AI to optimize the editing process. </>} icon={thumbsDownIcon}>
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
            <Box className={`${styles.marginTop}`} txt={<><span className={`emphasis`}>After: </span> Revised the editing screen to include sleek AI editing tools which made using the app to be more of a joyful and focused writing experience. </>} icon={thumbsUpIcon}>
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
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`bodyText ${styles.marginTop2}`}>
                Inspiration from great writing tools like notion, ghost, obsidian and IAwriter.
                </div>
            </div>

            

            {/* Before and After: Project History Page development */}
                        <div className={`sectionOutterContainer ${styles.marginTop5}`}>
                <div className={styles.sectionSubheading}>
                Project History Page development
                </div>
            </div>
            <Box className={`${styles.marginTop2}`} txt={<><span className={`emphasis`}>Before: </span>The application had not addressed the common user habit of switching between many different articles.</>} icon={thumbsDownIcon}>
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
            <Box className={`${styles.marginTop}`} txt={<><span className={`emphasis`}>After:</span> tbd.</>}  icon={thumbsUpIcon}>
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
                sectionSubtitleTxt="Excitement for what I’d designed."
                topParagraphHTML={<div className={`bodyText`}><span className={`emphasis`}></span>The final design of the tool successfully addressed the critical challenges highlighted during the research phase, offering tailored solutions that enhance both efficiency and user satisfaction.</div>}
            />
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={styles.sectionSubheading}>
                subheading
                </div>
            </div>
 
            {/* 5 major screens */}
            <Card
                p1= {<div><span className={`emphasis`}>Comprehensive AI Tool– </span> An AI tool that assists with keyword research, optimizes content without keyword stuffing, and provides recommendations for SEO enhancements.</div> }
            >
                <div className={`${styles.imageWrapper2}`}>
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
                    <div><span className={`emphasis`}>Something–</span> Something Something Something. Something Something. </div>
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
            <Card
                p1= {<div>Editing and Optimization: Simplifying the keyword optimization process and integrating document generation to minimize context switching and improve efficiency.</div> }
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
            </Card>
            <Card
                p1= {<div>Fit into existing workflow: research notes should be used as input. The tool should output structured outlines and/or completed articles. The tool ideally would also function as a refreshing tool for the common task of content reuse. </div> }
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
            </Card>
            <Card
                p1= {<div>Show 
                    Video of the prototypes not shown yet
                    Onboarding experience 
                    End to end flow? </div> }
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
            </Card>

            <div className={`sectionOutterContainer ${styles.marginTopSlim}`}>
                <div className={styles.sectionSubheading}>
                    Style guide
                </div>
                <div className={`bodyText ${styles.marginTop2}`}>
                something<span class="emphasis"> something</span> Somthing.
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
        
            {boarder}

            <SectionTopper
                sectionTitletxt="Reflections"
                sectionSubtitleTxt="The only real mistake is the one from which we learn nothing.     "
                topParagraphHTML={<div className={`bodyText`}>tbd<span className={`emphasis`}> tbd.</span></div>}
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

            <Card className={`${styles.marginBottomNone}`}
            >
                <div className={`${styles.cardCallout} ${styles.marginBottom2} ${styles.marginTop}`}>
                This is just the tip of the iceberg. Feel free to <span className={`${styles.whiteTxt}`}>check out some of my other work! </span>
                </div>
            </Card>

            <BackButton />

        </div>
    );
};