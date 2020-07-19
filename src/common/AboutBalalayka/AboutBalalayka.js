import React from 'react';
import s from './AboutBalalayka.module.css';

const About = ({name, text}) => {
    return (
        <div>
            <span> {name}: </span> <span>{text}</span>
            <hr/>
        </div>
    )
}

const AboutBalalayka = ({img, name, height, description, price}) => {

    return (
        <div className={s.gridLeft}>
        <div >
            <div className={s.about} >
                <div className={s.img}>
                    <img src={img} alt=" "/>
                </div>
                <div>
                    <About name={'Название'} text={name} />
                    <About name={'Высота'} text={height} />
                    {/*
              И так далее с нужной характеристикой
*/}
                </div>
            </div>
            <div>
                <hr/>
                <div className={s.bottomGrid}>
                    <div>
                        {name}
                    </div>
                    <div className={s.price}>
                        Цена: {price} BLR
                    </div>
                </div>
                <div>{description}</div>
            </div>
        </div>
            BockMenu вывыв
                Компонент для итоговой цены
        </div>


    )
};

export default AboutBalalayka;