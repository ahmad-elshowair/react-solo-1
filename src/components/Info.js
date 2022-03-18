import ahmad_image from '../images/ahmad.jpg'
import email_icon from '../images/email Icon.png'
import linked_image from '../images/linkedin icon.png'
 

export const Info = ()=>{
    const target ="_blank"
    const hashLink= "#"
    return(
        <div className="card--info">
            <img className="card--info_image" src={ahmad_image} alt="ahmad pic"/>
            <h2 className='card--info_name'>Ahmad Elshowair</h2>
            <h4 className='card--info_job'>Frontend Developer</h4>
            <a className='card--info_website' href='https://ahmad-elshowair.netlify.app/'>ahmad-elshowair.netlify.app</a>
            <div className='card--info_btns'>
                <a href={hashLink} target={target} className='btn email__btn'>
                    <img src={email_icon} alt='email icon' className='btn--image'/> 
                    <span className='btn--text'>Email</span>
                </a>
                <a href='https://www.linkedin.com/in/ahmad-elshowair/' className='btn linked__btn'>
                    <img src={linked_image} alt='email icon' className='btn--image'/> 
                    <span className='btn--text'>LinkedIn</span>
                </a>
            </div>
        </div>
    )
};