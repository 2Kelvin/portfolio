import "./Skills.css";
import { BsFolder2Open } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiGithub } from "react-icons/si";
import { IoIosContact } from "react-icons/io";
import { IoCallOutline, IoStarHalfOutline } from "react-icons/io5";
import { IconContext } from "react-icons/lib";

const Skills = () => {
    return (
        <IconContext.Provider value={{size: "30px"}}>
            <div className="skills">
                <div className="homeNavBar">
                    <a href="#home"><GoHome/></a>
                    <a href="#about"><IoIosContact/></a>
                    <a href="#skillsId"><IoStarHalfOutline/></a>
                    <a href="#projects"><BsFolder2Open/></a>
                    <a href="#contact"><IoCallOutline/></a>
                </div>

                <div id="skillsId" className="skillsContent">
                    <div className="skillsContentTitle">
                        <h2 className="kelvin">Skills</h2>
                        <h1>What I can Do</h1>
                    </div>
                   
                    <div className="skillsContentTechnologies">
                        <div className="technologyTile">
                            <SiHtml5 style={{color:"orangered", alignSelf:"center"}}/>
                            <p>HTML</p>
                        </div>
                        <div className="technologyTile">
                            <SiCss3 style={{color:"dodgerblue", alignSelf:"center"}}/>
                            <p>CSS</p>
                        </div>
                        <div className="technologyTile">
                            <SiJavascript style={{color:"yellow", alignSelf:"center"}}/>
                            <p>Javascript</p>
                        </div>
                        <div className="technologyTile">
                            <SiReact style={{color:"#61DBFB", alignSelf:"center"}}/>
                            <p>React</p>
                        </div>
                        <div className="technologyTile">
                            <SiGithub style={{color:"black", alignSelf:"center"}}/>
                            <p>Github</p>
                        </div>
                        <div className="technologyTile">
                            <SiReact style={{color:"#61DBFB", alignSelf:"center"}}/>
                            <p>React Native</p>
                        </div>
                   </div>
                </div>
        </div>
        </IconContext.Provider>
    );
}

export default Skills;