import React from 'react'
import s from './Balalayka.module.css'
import {Link} from "react-router-dom";

const Balalayka = ({name, img, description, id}) => {
    return (
        <div className={s.balalayka}>
            <img src={img} alt=""/>
            {name}
            <div>
                {description}
            </div>
            <Link to={`/basket/${id}`}>
                <button>Купить</button>
            </Link>
            <Link to={`/balalay/${id}`}>
                <button>Подробнее</button>
            </Link>

        </div>
    )
};

export default Balalayka;