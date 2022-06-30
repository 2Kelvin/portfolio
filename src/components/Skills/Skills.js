import "./Skills.css";
import { BsFolder2Open } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { TbBrandReactNative } from "react-icons/tb";
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
                    </div>
                    
                    <div>
                        <h1>What I can Do</h1>
                    </div>
                    
                    <div className="skillsContentTechnologies">
                        <div className="technologyTile">
                            <SiHtml5 style={{color:"orangered"}}/>
                            <p>HTML</p>
                        </div>
                        <div className="technologyTile">
                            <SiCss3 style={{color:"dodgerblue"}}/>
                            <p>CSS</p>
                        </div>
                        <div className="technologyTile">
                            <SiJavascript style={{color:"yellow"}}/>
                            <p>Javascript</p>
                        </div>
                        <div className="technologyTile">
                            <SiReact style={{color:"#61DBFB"}}/>
                            <p>React</p>
                        </div>
                        <div className="technologyTile">
                            <SiGithub style={{color:"black"}}/>
                            <p>Github</p>
                        </div>
                        <div className="technologyTile">
                            <TbBrandReactNative style={{color:"#61DBFB"}}/>
                            <p>React Native</p>
                        </div>
                   </div>
                </div>
        </div>
        </IconContext.Provider>
    );
}

export default Skills;