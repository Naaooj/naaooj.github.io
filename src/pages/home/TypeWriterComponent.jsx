import Typewriter from "typewriter-effect";
import './TypeWriter.scss';

function TypeWriterComponent() {
    return (
        <Typewriter 
            options={{
                strings: [
                    "#developer",
                    "#teamplayer",
                    "#gamer"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50
            }}
        />
    );
}

export default TypeWriterComponent;