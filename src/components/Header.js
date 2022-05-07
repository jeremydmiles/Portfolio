// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Jeremy Miles" />

            <div className='header__content'>
                <h1>Hi, I'm Jeremy Miles</h1>
                <p><h3><b>Blockchain Developer</b></h3>
        Solidity, JavaScript, React.js
                </p>
                <a href="mailto:jeremymileslaser@gmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;
