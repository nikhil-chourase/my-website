import React from "react";
import "./Projects.css";

import {SiAndroid} from 'react-icons/si';
import {SiIos} from 'react-icons/si';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiAmazons3 } from "react-icons/si";

import {SiFirebase} from 'react-icons/si';
import {SiMongodb} from 'react-icons/si';
import {SiNodedotjs} from 'react-icons/si';
import { SiFlutter} from 'react-icons/si';
import {SiDart} from 'react-icons/si';




export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://github.com/user-attachments/assets/f1a989c9-0f10-43c3-a3db-43adaf837a9a"
                  alt="Fabric Identification and Defect Detection"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2> Cattie </h2>
              <p>
              Cattie is a short video app similar to Instagram Reels or TikTok. It allows users to seamlessly browse and upload short videos to the database. The app includes features such as liking posts, following users, commenting on posts, and liking comments in real-time
              </p>
              <div>
                <SiFlutter />
                <SiFirebase />
                <SiDart />
                <SiAndroid />
                <SiIos />
              </div>
              <div>
                <a
                  href="https://github.com/nikhil-chourase/cattie.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://github.com/user-attachments/assets/72483426-a58c-4068-a6e8-c2287208ffa1"
                  alt="Weather Forecasting"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2> Amazon shopping app </h2>
              <p>
              A shopping app offers a comprehensive e-commerce experience, enabling users to search for products, 
              add them to their cart, rate them in real-time, and complete their purchases. Admins have the ability to list products for sale and update delivery statuses within the app.
              </p>
              <div>
                <SiFlutter />
                <SiNodedotjs />
                <SiDart />
                <SiMongodb />
                <SiJavascript />
              </div>
              
              <div>
                <a
                  href="https://github.com/nikhil-chourase/amazon-shopping.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://github.com/user-attachments/assets/9053599a-177c-46dd-9cd6-a1b48a206506"
                  alt="Portfolio Website"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Portfolio Website</h2>
              <p>
              This is my Portfolio website. It contains everything that i wanted to showcase myself. It is made using React, HTML, CSS, JavaScript and hosted 
              using aws services like S3, Cloudfront, Route53 and Certificate Manager.
              </p>
              <div>
                <FaAws />
                <SiAmazons3 />
                <FaReact />
                <FaHtml5 />
                <FaCss3Alt />
                <SiJavascript />  
              </div>
              <div>
                <a
                  href="https://github.com/thatsyuviii/My-Portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
                <a
                  href="https://fortunetellerr.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See This Live
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>   
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://github.com/user-attachments/assets/2a66a299-97ae-4479-92e7-3be83943cc0f"
                  alt="Fortune Teller"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Clima weather</h2>
              <p>
               It gives info about the weather of current location using APIs, or any desired location entered by the user.

              </p>
              <div>
              <SiFlutter />
                <SiDart />
              </div>
              <div>
                <a
                  href="https://github.com/nikhil-chourase/clima_whether.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
                
              </div>
            </div>
          </div>
        </div>    
      </div>
    </>
  );
};
