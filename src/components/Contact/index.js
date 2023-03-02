import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 3000)
      
          return () => clearTimeout(timer)
        }, [])

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idc={15} />
                </h1>
                <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <div className='contact-form'>
            <form>
                <ul>
                    <li className='half'>
                        <input type='text'name='name' placeholder='Name' required />

                    </li>
                    <li className='half'>
                        <input type='email'name='email' placeholder='Email' required />

                    </li>
                    <li className=''>
                        <input type='text'name='subject' placeholder='Subject' required />

                    </li>
                    <li>
                        <textarea placeholder='Message' name='message' required></textarea>
                    </li>
                    <li>
                        <input type='submit' className='flat-button' value='SEND' />
                    </li>
                </ul>
            </form>

          </div>

            </div>

        </div>
        <Loader type="pacman" />
        
        </>
    )
}
export default Contact;