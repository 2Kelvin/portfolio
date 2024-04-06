import './Footer.css';


export default function Footer() {
    return (
        <footer>
            <small>
                Built by <a href='https://github.com/2Kelvin' target='blank' className='progLang'>Rocketman</a>
            </small>
            <small>{new Date().getFullYear()}</small>
        </footer>
    );
}