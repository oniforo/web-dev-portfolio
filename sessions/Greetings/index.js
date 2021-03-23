import { useState, useRef } from 'react';

import style from './style.module.scss';

const Section = () => {

    const [menuClick, setMenuClick] = useState(false);
    const nav = useRef();

    return (
        <section className={style.section} style={{
            height: menuClick ? 0 : '100vh',
            overflow: menuClick ? 'visible' : 'hidden',
        }}>
            <nav ref={nav} style={{
                bottom: menuClick ? -nav.current.clientHeight : 0,
            }}>
                { ['Sobre', 'Portfólio', 'Contato'].map(button => <div 
                    onClick={() => setMenuClick(true)}
                >{button}</div>) }
            </nav>
            <div style={{
                opacity: menuClick ? 0 : 1,
            }}>
                <div>Prazer, Gabriel Orofino.</div>
                <div>Seu web designer.</div>
            </div>
        </section>
    );
};

export default Section;
