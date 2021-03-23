import style from '../styles/main.module.scss';

import Greetings from '../sessions/Greetings';
import About from '../sessions/About';

const Main = () => {
    return (
        <div style={{position: 'relative'}}>
            <Greetings/>
            <div style={{
                position: 'absolute', height: '100vh', width: '100%',
                border: '1px solid white', top: 0, zIndex: -1
            }}>
                <About/>
            </div>
        </div>
    );
};

export default Main;