import Subheading from '../Subheading/Subheading';
import './Skills.css';
import { BsPlus } from "react-icons/bs";


export default function Skills() {
    return (
        <section className='skillsContainer'>
            <Subheading subheadingName='Skills' />

            <p>
                I'm a strong <span className='progLang'>JavaScript</span> developer. I love building web and mobile applications. I'm adept at working with and consuming <span className='progLang'>Rest API</span> and <span className='progLang'>GraphQL</span> data on the client-side. My niche and everyday go-to programming tools are:
            </p>

            <ul className='myList'>
            <li> <BsPlus className='plus' /> React</li>
            <li> <BsPlus className='plus' /> CSS</li>
            <li> <BsPlus className='plus' /> NodeJS</li>
            <li> <BsPlus className='plus' /> MySQL</li>
            <li> <BsPlus className='plus' /> Express</li>
            <li> <BsPlus className='plus' /> Git</li>
            <li> <BsPlus className='plus' /> React Native</li>
            <li> <BsPlus className='plus' /> Linux</li>
            <li> <BsPlus className='plus' /> Figma</li>
            </ul>

            <p>
                I'm also a <span className='progLang'>fullstack developer</span> graduate from <a href='https://www.alxafrica.com/' target='blank'>ALX Africa</a> with a very solid understanding and experience in building both client-side and server side applications and working with servers and databases. Programming languages, concepts and tools used to build projects during this rigorous program are:
            </p>

            <ul className='alxList'>
                <li> <BsPlus className='plus' /> C</li>
                <li> <BsPlus className='plus' />Python</li>
                <li> <BsPlus className='plus' />MySQL</li>
                <li> <BsPlus className='plus' />NodeJS</li>
                <li> <BsPlus className='plus' />MongoDB</li>
                <li> <BsPlus className='plus' />DSA</li>
                <li> <BsPlus className='plus' />Shell</li>
                <li> <BsPlus className='plus' />Redis</li>
                <li> <BsPlus className='plus' />Devops</li>
            </ul>

            <p>
                I also have experience <span className='progLang'>collaborating</span> with other developers building singular applications on Github.
            </p>
        </section>
    );
}