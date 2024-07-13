import React from "react";
import "./Techstacks.css";
import { SiFlutter} from 'react-icons/si';
import {SiDart} from 'react-icons/si';

// import {SiGitlab} from 'react-icons/si';

import {SiMongodb} from 'react-icons/si';

import {SiNodedotjs} from 'react-icons/si';



import {SiFigma} from 'react-icons/si';


import {SiCanva} from 'react-icons/si';



import {SiAndroid} from 'react-icons/si';
import {SiIos} from 'react-icons/si';

import {SiFirebase} from 'react-icons/si';


import {SiJava} from 'react-icons/si';
import {SiJson} from 'react-icons/si';
import {SiTailwindcss} from 'react-icons/si';

import { FaPython } from "react-icons/fa";
// import { SiGnubash } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";







export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiFlutter />
            <h5>Flutter</h5>
          </div>
          <div>
            <SiJava />
            <h5>Java</h5>
          </div>

          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          
          <div>
            <SiJavascript />
            <h5>JavaScript</h5>
          </div>

          <div>
            <SiDart />
            <h5>Dart</h5>
          </div>

          <div>
            <SiFirebase />
            <h5>Firebase</h5>
          </div>

          <div>
            <SiNodedotjs />
            <h5>Node.js</h5>
          </div>

          <div>
            <SiMongodb />
            <h5>Mongodb</h5>
          </div>
          
          

          
          
          <div>
            <FaHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <FaCss3Alt />
            <h5>CSS</h5>
          </div>

        
          


          <div>
            <FaPython />
            <h5>Python</h5>
          </div>



          <div>
            <SiMysql />
            <h5>MySQL</h5>
          </div>
          <div>
            <FaGitAlt />
            <h5>Git</h5>
          </div>
          <div>
            <FaGithub />
            <h5>Github</h5>
          </div>
          <div>
            <SiAndroid />
            <h5>Android</h5>
          </div>

          <div>
            <SiIos />
            <h5>Ios</h5>
          </div>

          <div>
            <SiTailwindcss />
            <h5>Tailwindcss</h5>
          </div>
          <div>
            <SiJson />
            <h5>Json</h5>
          </div>
          <div>
            <SiFigma />
            <h5>Figma</h5>
          </div>

          <div>
            <SiCanva />
            <h5>Canva</h5>
          </div>

          
        </div>
      </div>
    </>
  );
};
