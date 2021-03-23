import style from './style.module.scss';

const Card = props => {
    return (
        <div className={props.animation}>
            <div></div>
            <div>Title</div>
            <div>
                Some description for the card.
                Some more text.
            </div>
        </div>
    );
};

const Section = () => {
    return (
        <section className={style.section}>
            <div className={style.constrainer}>
                <div className={`${style.cards}`}>
                    <Card animation={style.slideInFromLeft} />
                    <Card animation={style.slideInFromRight} />
                    <Card animation={style.slideInFromLeft} />
                </div>
            </div>
        </section>
    );
};

export default Section;