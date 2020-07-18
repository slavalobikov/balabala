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

const AboutBalalayka = ({img, name, height}) => {

    return (
        <div className={s.grid} >

            <div>
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
    )
};

export default AboutBalalayka;