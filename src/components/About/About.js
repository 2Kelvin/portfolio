import { BsFolder2Open } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { IoIosContact } from "react-icons/io";
import { IoCallOutline, IoStarHalfOutline } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import lapttopImg from "./../../images/macL.jpg";
import "./About.css";

const About = () => {
    return (
        <IconContext.Provider value={{size: "30px"}}>
            <div className="about">
                <div className="homeNavBar">
                    <a href="#home"><GoHome/></a>
                    <a href="#about"><IoIosContact/></a>
                    <a href="#skillsId"><IoStarHalfOutline/></a>
                    <a href="#projects"><BsFolder2Open/></a>
                    <a href="#contact"><IoCallOutline/></a>
                </div>

                <div id="about" className="aboutContent">
                    <div className="aboutContentDiv">
                        <div className="aboutInfo">
                            <h2 className="kelvin">About</h2>
                            <h1>Who I Am</h1>
                            <p>
                                I am not your normal developer.
                            </p>
                            <p>
                                I have spent the last 12 years in the fire service working as a professional firefighter & paramedic. I have always had a knack for technology and working with computers. In 2019, I satrted working with HTML & CSS to make some minor edits on a small business website that I was operating. What I thought was just a few small edits turned into a love for programming.
                            </p>
                            <p>
                                Fascinated with how intricate programming can be, I was quickly drawn to learn more. I started learning JavaScript and was even more enthusiased with making websites interactive. I then started freelancing for e-commmerce companies on the Shopify platform. I am now spending my time builsing projects with React JS, Firebase and learning new technologies.
                            </p>
                            <p>Scroll down to check out some of my latest projects.</p>
                        </div>

                        <div className="aboutImg">
                            <img src={lapttopImg} alt="laptop" />
                        </div>
                    </div>
                </div>
        </div>
        </IconContext.Provider>
    );
}

export default About;