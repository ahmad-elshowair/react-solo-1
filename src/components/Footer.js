import github from '../images/GitHub Icon.png'
import instagram from '../images/Instagram Icon.png'
import facebook from '../images/Facebook Icon.png'
import twitter from '../images/Twitter Icon.png'

export const Footer = ()=>{
    const target = "_blank";
    return(
        <footer className="footer">
        <ul className='social--list'>
            <li>
                <a href='https://github.com/ahmad-elshowair' target={target}>
                    <img src={github} alt="github" className='social--list_icon'/>
                </a>
            </li>
            <li>
                <a href='https://www.instagram.com/it.is.ahmad.saeed/' target={target}>
                    <img src={instagram} alt="instagram" className='social--list_icon'/>
                </a>
            </li>
            <li>
                <a href='https://www.facebook.com/ahmad.saeed.elshowair/' target={target}>
                    <img src={facebook} alt="Facebook" className='social--list_icon'/>
                </a>
            </li>
            <li>
                <a href='https://twitter.com/AhmedElshwair' target={target}>
                    <img src={twitter} alt="Twitter" className='social--list_icon'/>
                </a>
            </li>
        </ul>
        </footer>
    );
};