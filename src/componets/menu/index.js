import './menu.css';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Menu(){
    return(
        <div className='menu'>
            <a className='social' href='https://github.com/rodrigo-dias-silva' target='blank'><BsGithub color='#fff' size={24} /></a>
            <a className='social' href='https://www.linkedin.com/in/rodrigo-cleiton-silva/' target='blank'><BsLinkedin color='#fff' size={24} /></a>
            <a className='social' href='https://www.instagram.com/digle.silva/' target='blank'><BsInstagram color='#fff' size={24} /></a>
            <Link to="/links" className='menu-item'>Meus Links</Link>
        </div>
    )
}
