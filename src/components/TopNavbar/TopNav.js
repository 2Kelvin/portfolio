import SectionLink from '../SectionLink/SectionLink';
import './TopNav.css';


export default function TopNav() {
    return (
        <nav className='topnav'>
            <a href='#webHome'>
                <code>
                    <span className='brackets'>&lt; </span>
                    Kelvin
                    <span className='brackets'> /&gt;</span>
                </code>
            </a>
            <div className='topLinksContainer'>
                <SectionLink nameOfSection='Skills' />
                <SectionLink nameOfSection='Projects' />
            </div>
        </nav>
    );
}