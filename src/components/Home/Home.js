import { GoHome } from "react-icons/go";
import { IoCallOutline, IoStarHalfOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { BsFolder2Open } from "react-icons/bs";
import { IconContext } from "react-icons";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./Home.css";

const Home = () => {
    return (
        <IconContext.Provider value={{size:'30px'}}>
            <div className="home">
                <div className="homeNavBar">
                    <a href="#home"><GoHome/></a>
                    <a href="#about"><IoIosContact/></a>
                    <a href="#skillsId"><IoStarHalfOutline/></a>
                    <a href="#projects"><BsFolder2Open/></a>
                    <a href="#contact"><IoCallOutline/></a>
                </div>

                <div id="home" className="homeContent">
                    <div>
                        <p className="homeContentSmall">LET'S BUILD SOMETHING TOGETHER</p>
                        <h1 className="homeContentBig">Hi, I'm <span className="kelvin">Kelvin</span></h1>
                        <h1 className="homeContentBig">A Front-End Developer</h1>
                        <p className="homeContentSmall">
                            I'm a front-end developer specializing in building beautiful UIs both on mobile and websites. Currently, am focused on building functional and responsive front-end web applications using React JS while learning back-end technologies.
                        </p>
                        <div>
                            <a href="https://www.linkedin.com/in/kelvin-mwangi-722406217" target="_blank" rel="noopener noreferrer">
                             <FaLinkedinIn className="hoverLinkedin" />
                            </a> 

                            <a href="https://github.com/2Kelvin" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="hoverGithub" />
                            </a>
                        </div>
                    </div>
                </div>
        </div>
        </IconContext.Provider>
    );
}

export default Home;