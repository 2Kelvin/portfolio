import './CardProject.css';
import { LuGithub } from "react-icons/lu";
import { RiExternalLinkLine } from "react-icons/ri";

export default function CardProject({ appType, appName, githubLink, description, appTags, appUrl }) {
    return (
        <div className='projectCard'>
            <div className='topOfCard'>
                <code>{appType}</code>

                {appUrl !== '' && <a href={appUrl} target='blank' className='linkUrl'>
                    <RiExternalLinkLine className='externalAppLink' />
                </a>}
            </div>

            <div className='appHeadingDiv'>
                <h3>{appName}</h3>
                <a href={githubLink} target='blank'><LuGithub className='githubIcon' /></a>
            </div>

            <div className='appDescription'>{description}</div>

            <div className='appLanguages'>
                <div className='langSubdiv'>
                    {appTags.map((tag) => <code>{tag}</code>)}
                </div>
            </div>
        </div>
    );
}