import './AllProjects.css';
import { allProjects } from '../../dataProjects';
import CardProject from '../CardProject/CardProject';


export default function AllProjects() {
    return (
        <section className='allProjects'>
            {allProjects.map((project) =>
                <CardProject
                    key={project.id}
                    appType={project.appType}
                    appName={project.appName}
                    githubLink={project.githubLink}
                    description={project.description}
                    appTags={project.tags}
                    appUrl={project.appUrl}
                />
            )}
        </section>
    );
}