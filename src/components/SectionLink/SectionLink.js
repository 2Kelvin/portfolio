import { useState } from 'react';
import './SectionLink.css';


export default function SectionLink({ nameOfSection }) {
    const [isHovered, setIsHovered] = useState(false);
    const theID = `#${nameOfSection.toLowerCase()}`

    return (
        <div className='eachSectionLink'>
            <hr style={{
                backgroundColor: isHovered && 'var(--myGreen)'
            }} />

            <a href={theID}>
                <p
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {nameOfSection}
                </p>
            </a>
        </div>
    );
}