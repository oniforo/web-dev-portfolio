import { useState, useRef } from 'react';

import style from './style.module.scss';

const Section = ({ selectState }) => {

    const [selected, setSelected] = selectState;
    const nav = useRef();

    const navbar = [
        ['Sobre', 'about'],
        ['Portfólio', 'portfolio'],
        ['Contato', 'contact']
    ]

    return (
        <section className={style.section} style={{
            height: selected ? 0 : '100vh',
            overflow: selected ? 'visible' : 'hidden',
        }}>
            <nav ref={nav} style={{
                bottom: selected ? -nav.current.clientHeight : 0,
            }}>
                { navbar.map(button => <div 
                    onClick={() => {
                        setSelected(button[1]);
                    }}
                >{button[0]}</div>) }
            </nav>
            <div style={{
                opacity: selected ? 0 : 1,
            }}>
                <div>Prazer, Gabriel Orofino.</div>
                <div>Seu web designer.</div>
            </div>
        </section>
    );
};

export default Section;
