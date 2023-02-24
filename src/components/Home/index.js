import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from '../Home/Logo'
import './index.scss'  


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['u', 'p', 'e', 'r', ' ']
    const jobArray = ['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        const timeout = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout(timeout)
      }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone"> 
            <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} -12`}>i,</span>
                <br />
                <span className={`${letterClass} -13`}>I</span>
                <span className={`${letterClass} -14`}>'m </span>
               
            
                <img src={LogoTitle} alt="Developer"/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                />
                   <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}
                />
                </h1>
                <h2> Frontend Developer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME
                </Link>
            </div>
            <Logo />

        </div>
        </>
    )
}
export default Home;