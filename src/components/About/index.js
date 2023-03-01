import AnimatedLetters from '../AnimatedLetters';
import './index.scss';




const About = () => {
    return (
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <p>
            Nulla facilisi nullam vehicula ipsum a arcu cursus. Nulla pharetra
            diam sit amet nisl suscipit adipiscing bibendum est. Sit amet
            facilisis magna etiam tempor orci eu. Nullam ac tortor vitae purus
            faucibus ornare suspendisse sed. Imperdiet dui accumsan sit amet
            nulla facilisi morbi tempus.
          </p>
          <p>
            Pharetra pharetra massa massa ultricies. In arcu cursus euismod quis
            viverra nibh cras pulvinar mattis. At varius vel pharetra vel turpis
            nunc eget lorem. Nam at lectus urna duis convallis convallis tellus
            id. Posuere ac ut consequat semper viverra nam libero justo. Gravida
            neque convallis a cras semper.
          </p>
        </div>
      </div>
    )
}





export default About;