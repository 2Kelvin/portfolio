import './Socials.css';
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";


export default function Socials() {
    return (
        <div className='socials'>
            <a href='https://www.linkedin.com/in/kelvin-njihia' target='blank'>
                <CiLinkedin className='socialIcon linkedIn' />
            </a>
            <a href='https://github.com/2Kelvin' target='blank'>
                <FaGithubSquare className='socialIcon github' />
            </a>
        </div>
    );
}