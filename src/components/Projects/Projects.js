import AllProjects from '../AllProjects/AllProjects';
import Subheading from '../Subheading/Subheading';
import './Projects.css';

export default function Projects() {
    return (
        <section className='projectsContainer'>
            <Subheading subheadingName='Projects' />
            <AllProjects />
        </section>
    );
}