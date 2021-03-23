import { useState } from 'react';

import style from '../styles/main.module.scss';

import Greetings from '../sessions/Greetings';
import About from '../sessions/About';
import Portfolio from '../sessions/Portfolio';
import Contact from '../sessions/Contact';

const Main = () => {

    const [selected, setSelected] = useState();

    return (
        <div style={{position: 'relative'}}>
            <Greetings selectState={[selected, setSelected]}/>
            <div style={{
                position: 'absolute', height: '100vh', width: '100%',
                top: 0, zIndex: -1,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
            }}>
                { selected == 'about' ? <About selected={selected} /> : 
                  selected == 'portfolio' ? <Portfolio/> :
                  selected == 'contact' ? <Contact/> : <></> }
            </div>
        </div>
    );
};

export default Main;