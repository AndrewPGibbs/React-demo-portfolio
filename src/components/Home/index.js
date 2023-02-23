import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['u', 'p', 'e', 'r']
    const jobArray = ['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi Muggles,
                    <br /> I'm
                <br />
                <img src={LogoTitle} alt="Developer"/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                />
                </h1>
                <h2> Frontend Developer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>

        </div>
    )
}
export default Home;