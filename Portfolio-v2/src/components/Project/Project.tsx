// import { Container } from "./styles";
// import githubIcon from "../../assets/github.svg"
// // import DownloadApp from '../../assets/download.webp'
// import externalLink from "../../assets/external-link.svg"
// import ScrollAnimation from "react-animate-on-scroll";


// export function Project() {
//   return (
//     <Container id="project">
//       <h2>My Projects</h2>
//       <div className="projects">

//         <ScrollAnimation animateIn="flipInX">
//           <div className="project">
//             <header>
//               <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
//                 <title>Folder</title>
//                 <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
//               </svg>
//               <div className="project-links">
//                 <a href="https://github.com/CodeVinayak/MultilingualVQA" target="_blank" rel="noreferrer">
//                   <img src={githubIcon} alt="GitHub" />
//                 </a>
//               </div>
//             </header>
//             <div className="body">
//               <h3>Multilingual VQA Vision-Language Model</h3>
//               <p>
//                 Fine-tuned Qwen2.5-VL for visual question answering across 14 languages with optimized preprocessing.
//               </p>
//             </div>
//             <footer>
//               <ul className="tech-list">
//                 <li>Python</li>
//                 <li>Qwen2.5-VL</li>
//                 <li>Unsloth</li>
//               </ul>
//             </footer>
//           </div>
//         </ScrollAnimation>

//         <ScrollAnimation animateIn="flipInX">
//           <div className="project">
//             <header>
//               <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
//               <div className="project-links">
//                 <a href="https://github.com/CodeVinayak/Serverless-Voting-Application" target="_blank" rel="noreferrer">
//                   <img src={githubIcon} alt="Visit site" /></a>
//                 {/* <a href="https://vote.vinayaksingh.com" target="_blank" rel="noreferrer">
//                   <img src={externalLink} alt="Visit site" />
//                 </a>  */}
//                 </div>
//             </header>
//             <div className="body">
//               <h3>Serverless Voting Application for Programming Languages</h3>
//               <p> Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI, leveraging serverless architecture for scalability and cost-efficiency. </p>
//             </div>
//             <footer> <ul className="tech-list"> <li>AWS Lambda</li> <li>API Gateway</li> <li>DynamoDB</li> </ul> </footer>
//           </div>
//         </ScrollAnimation>

//         <ScrollAnimation animateIn="flipInX">
//           <div className="project">
//             <header>
//               <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
//               <div className="project-links">
//                 <a href="https://github.com/CodeVinayak/AI-Chatbot-Assistant" target="_blank" rel="noreferrer">
//                   <img src={githubIcon} alt="Visit site" /> </a>
//                 <a href="https://ai-chatbot-t8fn.onrender.com" target="_blank" rel="noreferrer">
//                   <img src={externalLink} alt="Visit site" /></a>
//               </div>
//             </header>
//             <div className="body">
//               <h3>GeniusBot: AI-Powered Assistance with PDF Insight</h3>
//               <p>
//                 Developed an interactive chatbot application using Streamlit, OpenAI's GPT-3.5-turbo language model, and PyPDF2 for PDF text extraction, enabling users to ask context-based questions on uploaded PDFs and general queries.
//               </p>
//             </div>
//             <footer>
//               <ul className="tech-list">
//                 <li>Streamlit</li>
//                 <li>PyPDF2</li>
//                 <li>LangChain</li>
//               </ul>
//             </footer>
//           </div>
//         </ScrollAnimation>


//         <ScrollAnimation animateIn="flipInX">
//           <div className="project">
//             <header>
//               <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
//               <div className="project-links">
//                 <a href="https://github.com/CodeVinayak/MediBook-Medical-Appointment-Scheduler-with-Health-History" target="_blank" rel="noreferrer">
//                   <img src={githubIcon} alt="Visit site" />
//                 </a>
//                 <a href="https://medibook.vinayaksingh.com" target="_blank" rel="noreferrer">
//                   <img src={externalLink} alt="Visit site" />
//                 </a>
//               </div>
//             </header>
//             <div className="body">
//               <h3>MediBook: Medical Appointment Scheduler with Health History</h3>
//               <p>Developed a secure medical appointment management platform with CRUD functionality, utilizing role-based access control, encryption techniques, and a robust MySQL database with normalized schema design and stored procedures for efficient scheduling, data privacy, and reliable retrieval of patient records.</p>
//             </div>
//             <footer>
//               <ul className="tech-list">
//                 <li>PHP</li>
//                 <li>HTML</li>
//                 <li>CSS</li>
//                 <li>MySQL</li>
//               </ul>
//             </footer>
//           </div>
//         </ScrollAnimation>

//         <ScrollAnimation animateIn="flipInX">
//           <div className="project">
//             <header>
//               <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
//                 <title>Code</title>
//                 <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
//               </svg>
//               <div className="project-links">
//                 <a href="https://github.com/CodeVinayak/Real-Time-Hand-Gesture-Driven-3D-Object-Manipulation" target="_blank" rel="noreferrer">
//                   <img src={githubIcon} alt="Visit site" />
//                 </a>
//                 <a href="https://youtu.be/NOm-3MynPLE" target="_blank" rel="noreferrer">
//                   <img src={externalLink} alt="Visit site" />
//                 </a>
//               </div>
//             </header>
//             <div className="body">
//               <h3>Real-Time Hand Gesture-Driven 3D Object Manipulation</h3>
//               <p>Developed a real-time hand gesture recognition system for intuitive 3D object manipulation. Leveraged a multimodal approach integrating OpenCV for video processing, MediaPipe for hand detection/landmark extraction, and scikit-learn for machine learning model training. Achieved 95.2% accuracy in hand gesture classification with efficient real-time performance.</p>
//             </div>
//             <footer>
//               <ul className="tech-list">
//                 <li>OpenCV</li>
//                 <li>MediaPipe</li>
//                 <li>scikit-learn</li>
//               </ul>
//             </footer>
//           </div>
//         </ScrollAnimation>

//         <ScrollAnimation animateIn="flipInX">
//           <div className="project">
//             <header>
//               <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
//                 <title>Folder</title>
//                 <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
//               </svg>
//               <div className="project-links">
//                 <a href="https://github.com/CodeVinayak/Jupyter-Notebook/tree/main/Credit%20Risk%20Analysis" target="\_blank" rel="noreferrer">
//                   <img src={githubIcon} alt="Visit site" />
//                 </a>
//                 {/* <a href="https://github.com/CodeVinayak/Jupyter-Notebook/blob/main/Credit%20Risk%20Analysis/Credit_Risk_Analysis.ipynb" target="\_blank" rel="noreferrer">
//                   <img src={externalLink} alt="Visit site" />
//                 </a> */}
//               </div>
//             </header>
//             <div className="body">
//               <h3>Credit Risk Analysis Project</h3>
//               <p>
//                 Developed a highly accurate credit risk classification model using XGBoost, achieving 100% precision, recall, and F1-scores for predicting loan defaults.Implemented rigorous data preprocessing, feature engineering, and hyperparameter tuning on imbalanced credit risk data, employing ensemble methods, cross-validation, and model interpretation techniques.
//               </p>
//             </div>
//             <footer>
//               <ul className="tech-list">
//                 <li>XGBoost</li>
//                 <li>Pandas</li>
//                 <li>Matplotlib</li>
//               </ul>
//             </footer>
//           </div>
//         </ScrollAnimation>


//       </div>
//     </Container>
//   );
// }
import { Container } from "./styles"
import githubIcon from "../../assets/github.svg"
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll"

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>

      <div className="projects">

        {/* Project 1 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>

              <div className="project-links">
                <a href="https://github.com/TusharSharma77/jsetu" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://jeevansetu-nine.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Live" />
                </a>
              </div>
            </header>

            <div className="body">
              <h3>JeevanSetu (Next.js + TypeScript)</h3>
              <p>
                A modern healthcare-focused web application built using Next.js, React, and TypeScript. 
                It features a clean UI, responsive design, and optimized routing to ensure smooth navigation 
                and performance across devices.
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>Next.js</li>
                <li>React</li>
                <li>TypeScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Project 2 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>

              <div className="project-links">
                <a href="https://github.com/TusharSharma77/VILLASRENTEL" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>

            <div className="body">
              <h3>VillasRentel (React Frontend)</h3>
              <p>
                A frontend villa rental application built with React, focusing on component-based architecture 
                and responsive UI design. The project simulates a real-world property listing interface.
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>JavaScript</li>
                <li>CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Project 3 - Ongoing */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>

              <div className="project-links">
                <a href="https://github.com/TusharSharma77/food-delivery-website" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>

            <div className="body">
              <h3>Food Delivery Website (MERN Stack – Ongoing)</h3>
              <p>
                An ongoing full-stack MERN food delivery application. The project includes user authentication, 
                dynamic food listings, cart functionality, and backend APIs using Node.js, Express, and MongoDB.
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>MongoDB</li>
                <li>Express</li>
                <li>React</li>
                <li>Node.js</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Project 4 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>

              <div className="project-links">
                <a href="https://github.com/TusharSharma77/chatapp" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>

            <div className="body">
              <h3>Chat Application (Backend In Progress)</h3>
              <p>
                A chat application project focused on backend development and real-time communication concepts. 
                The backend is currently under development, serving as a learning project for server-side logic.
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>Node.js</li>
                <li>Express</li>
                <li>Socket.IO</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  )
}
