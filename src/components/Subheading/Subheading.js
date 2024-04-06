import './Subheading.css';

export default function Subheading({ subheadingName }) {
    return (
        <div className='webSubheading'>
            <hr />
            <h2 id={subheadingName.toLowerCase()}>{subheadingName}</h2>
        </div>
    );
}